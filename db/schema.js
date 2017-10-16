const mongoose = require('mongoose')

const fieldSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'New Title'
    },
    information: {type: String, default: 'New field information'},
    createdAt: {type: Date, default: Date.now}
})

const userSchema = mongoose.Schema({
    userName: String,
    bio: String, 
    fields: [fieldSchema]
})

const Field = mongoose.model('Field', fieldSchema)
const User = mongoose.model('User', userSchema)


module.exports = {
    Field, User
}