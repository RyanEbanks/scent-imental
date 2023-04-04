const express = require('express');
const path = require('path');
const homeRouter = require('./controllers/homeRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

//Middleware to parse JSON
app.use(express.json());

//Middleware for parsing urlencoded form data
app.use(express.urlencoded({extended: true}));

//Create static directory here!

//Creating the parent route for home page api
app.use('/home', homeRouter);

//Getting the route of the home page.
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, './views/layouts/homepage.handlebars'))
);

app.listen(PORT, () => console.log(`App Listening at PORT http://localhost:${PORT} !`))