//Dependencies
const express = require('express'); // Code used for importing express.
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');

//express sesssion
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  //cookie:{ maxAge:60*60*1000},  
});

// Importing route files
const registrationRoutes = require('./routes/registerRoutes');

//Instantiations
const app = express();

//Set up database connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});


//Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views','./views');


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

//Passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/user', registrationRoutes);



app.get("/", (req, res) => {
  res.render("register", { title: "Home"});
  // res.sendFile(__dirname + "/register.html");
});

// Rendering pug file
app.get('/registering', (req, res) => {
  res.render('registration');
});
  
app.post("/registering", (req, res) => {
  console.log(req.body);
 res.redirect("/");
});

// app.get("/quotes", (req, res) => {
//   res.sendFile(__dirname + "/html/form-validation2.hmtl");
// });
  
app.post("/", (req, res) => {
  console.log(req.body);
 res.redirect("/");
});
  

  // Should be the last route before the bootstrapping server
  app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });

//Bootstrapping Server, should be the last in the file
app.listen(4000, () => console.log('listening on port 4000'));
