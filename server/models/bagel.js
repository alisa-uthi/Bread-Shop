const mongoose = require('mongoose')

const bagelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    menuImage: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Bagel', bagelSchema)

