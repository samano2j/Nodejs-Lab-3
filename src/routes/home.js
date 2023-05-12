const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/', (req,res,next) => {
    res.render('home', {pageTitle: 'Guessbook'})
})

module.exports = router