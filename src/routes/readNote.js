const fs = require('fs')
const path = require('path')
const express = require('express')
const { dir } = require('console')
const router = express.Router()
const notes = require('../utils/notes')

router.get('/', (req,res,next) => {
    res.render('readNote', {pageTitle: 'Read the Notes of Others', notes})
})

module.exports = router