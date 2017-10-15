const express = require('express')
const router = express.Router()
const {User} = require('../db/schema')

router.get('/',  async (req,res)=> {
    try {
        const users = await User.find({})
        res.json(users)
        
    } catch (err) {
        res.send(err)
    }
   

})

router.post('/', async (req, res) => {
    try {
        const newUser = new User (req.body.user)
        const saved = await newUser.save()
        res.json(saved)

    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router