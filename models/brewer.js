const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    links: String,
    logo: String
})

module.exports = mongoose.model('brewer', brewerySchema)