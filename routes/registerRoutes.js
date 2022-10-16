const express = require('express');
const router = express.Router();

// Importing model
const Registration = require('../models/User');

// Writing a route
router.get('/register',(req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error) =>{
            if (error) {
                throw error
            } 
            res.redirect('/register');
        });
    } catch (error){
        res.status(400).send('Sorry system update');
        console.log(error)
    }
});

// Always MUST always be the last line in every routes file.
module.exports = router;
