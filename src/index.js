// EXPORTS.
const express = require('express');
const app = express();
const PORT = 3000;
const logger = require('./functions/logger');
const cors = require('cors');
const optinsCors = require('./functions/cors');
const groceriesRouter = require('./routes/groceries');
const marketsRouter = require('./routes/markets');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authRouter = require('./routes/auth');
require('./database/mongoosedb');
require('./controller/local');
const passport = require('passport'); 

// MIDDLEWARES.
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({
    secret: "DJEJUNSDNJOICNEOJFDMCEGEHIUAHIOEJ",
    resave: false,
    saveUninitialized: false,
}));

// CUSTOM MIDDLEWARES: LOGGER AND CORS && PASSPORT
app.use(logger);
app.use(cors(optinsCors));
app.use(passport.initialize());
app.use(passport.session());
// GET AND POST REQUESTS ROUTERS.
app.use('/api/groceries', groceriesRouter);
app.use('/api/markets', marketsRouter);
app.use('/api/auth', authRouter);

// LISTENING TO A PORT.
app.listen(PORT, () => console.log(`Running a server on ${PORT}...`));