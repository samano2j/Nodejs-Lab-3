const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
const notes = require('../utils/notes')

router.get('/', (req,res,next) => {
    res.render('leaveNote', {pageTitle: 'Leave a Note'})
})

router.post('/', (req,res,next) => {
    let note = Object.values(req.body)
    notes.push(...note)

    res.render('readNote', { notes }, () => {
        res.redirect('/')
    })
})

module.exports = router