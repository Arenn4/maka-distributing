const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080;
const env = require('dotenv');
const sgMail = require('@sendgrid/mail');
require('dotenv').config()

env.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to mongo
mongoose.connect(`mongodb://localhost:27017/SOMEDATABASE`, { useNewUrlParser: true }, )
    .then(() => console.log("MongoDB is now connected"))
    .catch(err => console.error(err))

//routes
app.use('')


