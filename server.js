const express = require('express');
const path = require('path');
const homeRouter = require('./controllers/homeRoutes');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3001;
const app = express();


//Middleware to parse JSON
app.use(express.json());

//Middleware for parsing urlencoded form data
app.use(express.urlencoded({extended: true}));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Create static directory here!
app.use(express.static(path.join(__dirname, 'public')));

//Creating the parent route for home page api
app.use('/home', homeRouter);

// app.use(require('./controllers/'));
//Getting the route of the home page.
// app.get('/', (req, res) => 
// res.sendFile(path.join(__dirname, './views/layouts/homepage.handlebars'))
// );

app.listen(PORT, () => console.log(`App Listening at PORT http://localhost:${PORT} !`))