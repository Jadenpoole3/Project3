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
    // get the values 

    const updatedField = req.body.fields

    //find the user 
    const user = await User.findById(req.params.userId)

    //get the fields
    const field = user.fields.id(req.params.id)

    field.title = updatedField.description

    //saving the user 

    const saved = await user.save()

    res.json(saved)
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