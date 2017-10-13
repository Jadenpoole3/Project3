const mongoose = require('mongoose')

const fieldSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'New Title'
    }
})