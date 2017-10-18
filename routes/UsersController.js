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
// 
router.get('/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
    
})


//Create
router.post('/', async (req, res) => {
    try {
        const newUser = new User (req.body.user)
        const saved = await newUser.save()
        res.json(saved)

    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updatedUser = req.body.user
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, updatedUser, {new: true})
        res.json(user) 
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

//Delete Route
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deleted = await User.findByIdAndRemove(userId)
        res.json(deleted)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router