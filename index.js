//Dependencies
const express = require('express'); // Code used for importing express.

const path = require('path');

//Instantiations
const app = express();
//Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views','./views');


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))


// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

//Routes
// Path param(parameter)
app.get('/users/:name', (req, res)=> {
  res.send('Hello' + req.params.name)
})

// Query param(parameter)
app.get("/queryparams", (req, res) => {
  res.send(
    "My query params are: " + req.query.class + " and " + req.query.cohort
  );
});


app.delete("/about", (req, res) => {
  res.send("You have deleted something");
});


app.post("/register", (req, res) => {
  res.send("You have registered a user");
});


//put request, used for updating
app.put("/about", (req, res) => {
  res.send("You have changed me");
});

  // How to send a file
app.get('/books/:bookId', (req, res) => {
  res.send(req.params);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

// Rendering pug file
app.get('/', (req, res) => {
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
app.listen(3000, () => console.log('listening on port 3000'));
