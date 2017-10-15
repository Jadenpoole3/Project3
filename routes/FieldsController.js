const express = require ('express')
const router = express.Router({mergeParams: true})
const { User, Field} = require('../db/schema')

router.post('/', async (req,res) => {
    //making a empty model
    const newField = new Field()

    //find the user
    const user = await User.findById(req.params.userId)

    //push the new user to the user list of fields
    user.fields.push(newField)

    //saving the user to the db 
    const saved = await user.save()

    res.json(saved)
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

router.delete('/:id', async(req,res) => {
    //find the user 
    const user = await User.findById(req.params.userId)

    //find the field and removing it 
    users.fields.id(req.params.id).remove()

    //saving the update user 
    const saved = await user.save()

    res.json(saved)
})

module.exports = router