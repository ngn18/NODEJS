const express = require('express');
const router = express.Router();

// Writing a route
router.get('/register',(req, res) => {
    res.render('register');
});

router.post('/register',(req, res) => {
    console.log(req.body);
    res.send('Thank you for your time');
});

// Always MUST always be the last line in every routes file.
module.exports = router;