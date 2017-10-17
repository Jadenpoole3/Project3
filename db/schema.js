const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
title: {
    type: String,
    default: 'New Title'
},
description: {
    type: String,
    default: 'New Description'
},

img: {
    type: String,
},

fieldOfInterest: {
    type: String,
}




})


const fieldSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'New Title'
    },
    information: {type: String, default: 'New field information'},
    createdAt: {type: Date, default: Date.now},
    job: [jobSchema]
})

const userSchema = mongoose.Schema({
    
    userName: String,
    bio: String, 
    img: String,
    fieldOfInterest: String,

    
})



const Field = mongoose.model('Field', fieldSchema)
const User = mongoose.model('User', userSchema)
const Job = mongoose.model('Job', jobSchema)


module.exports = {
    Field, User, Job
}