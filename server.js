const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080
const env = require('dotenv');
const sgMail = require('@sendgrid/mail');
const brewerRouter = require('./routes/brewerRouter')
require('dotenv').config()

env.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to mongo
mongoose.connect(`mongodb://localhost:27017/brewery-db`, { useNewUrlParser: true}, )
    .then(() => console.log("MongoDB is now connected"))
    .catch(err => console.error(err))

//routes
app.use('/brewers', brewerRouter)

//logic for sending email
app.post('/send', (req, res) => {
    const msg = {
        to: process.env.DB_USER,
        from: req.body.email,
        subject: req.body.fName + " " + req.body.lName + " sent a message from Webpage",
        text: req.body.message
    };
    sgMail.send(msg)
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
})