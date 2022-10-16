const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },

    ward: {
        type: String,
        required: true,
        trim: true
    },

    firstname: {
        type: String,
        required: true,
        trim: true
    },

    lastname: {
        type: String,
        required: true,
        trim: true
    },

    dateofbirth: {
        type: String,
        required: true,
        trim: true
    },

    nin: {
        type: String,
        required: true,
        trim: true
    },

    telephone: {
        type: String,
        required: true,
        trim: true
    },

    activity: {
        type: String,
        required: true,
        trim: true
    },

    regdate: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    passwords: {
        type: String,
        required: true,
        trim: true
    }
})

userSchema.plugin(passportLocalMongoose, {
usernameField: 'email'
});
module.exports = mongoose.model('Registration', userSchema);