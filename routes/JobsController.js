const express = require ('express')
const router = express.Router({mergeParams: true})
const { Job, Field} = require('../db/schema')

router.post('/', async (req,res) => {
    const newJob = new newJob()
})

const 