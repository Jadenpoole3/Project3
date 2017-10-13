require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const {User, Field} = require('./schema')

const Jaden = new Field({
    title: 'Web Developer',
    information: "responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications."
    
})