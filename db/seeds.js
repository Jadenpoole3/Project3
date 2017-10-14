require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Field} = require('./schema')

const jaden = new Field({
    title: 'Web Developer',
    information: "responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications."
    
})

const kyiana = new Field({
    title: 'Medical',
    description: 'provide emotional support to patients and patients'

})

const trey = new Field({
    title: 'Business Marketing',
    description: 'aim to maximize profits through developing sales strategies that match customer requirements'
})

const april = new User ({
    userName: 'april_april',
    password: 'apriliscool',
    fields: [jaden, kyiana, trey]
})

User.remove({})
.then(() => april.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())

