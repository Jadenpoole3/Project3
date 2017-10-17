const express = require ('express')
const router = express.Router({mergeParams: true})
const { Field } = require('../db/schema')

//create route
router.post('/', async (req,res) => {
    //making a empty model
    const newField = new Field()

    //find the user
    const field = await Field.findById(req.params.userId)

    //push the new user to the user list of fields
    fields.push(newField)

    //saving the user to the db 
    const saved = await user.save()

    res.json(saved)
})
//show route
router.get('/:id', async (req,res) => {
    try {
        const field = await Field.findById(req.params.userId)
        req.json(field)
    }
    catch(err){
res.send(err)
    }

    
})
//update route 
router.patch('/:id', async (req, res) => {
    // get the values 

    const updatedField = req.body.fields

    //find the user 
    const field = await Field.findById(req.params.userId)

    //get the fields
    const field = user.fields.id(req.params.id)

    field.title = updatedField.description

    //saving the user 

    const saved = await user.save()

    res.json(saved)
})





module.exports = router