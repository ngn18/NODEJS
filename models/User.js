const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailaddress: {
        type: String,
        required: true,
        trim: true
    },

    namefirst: {
        type: String,
        required: true,
        trim: true
    },

    namelast: {
        type: String,
        required: true,
        trim: true
    },

    pwd: {
        type: String,
        required: true,
        trim: true
    },

    pwdagain: {
        type: String,
        required: true,
        trim: true
    }
})