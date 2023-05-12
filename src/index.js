//importing core modules
const http = require('http')
const path = require('path')

//importing 3rd party libraries
const express = require('express')
const bodyParser = require('body-parser')

//initialize
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

//routes
app.use(require('./routes/home'))
app.use('/leaveNote', require('./routes/leaveNote'))
app.use('/readNote', require('./routes/readNote'))

//catch-all-middleware
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//listener
const PORT = process.env.PORT || 8000
app.listen(PORT)