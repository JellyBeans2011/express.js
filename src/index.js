// EXPORTS.
const express = require('express'); const app = express(); const PORT = 3000; const fs = require('fs'); const path = require('path'); const { format } = require('date-fns'); const logger = require('./logger'); const cors = require('cors'); const optinsCors = require('./cors'); const groceriesRouter = require('./routes/groceries'); const marketsRouter = require('./routes/markets');

// MIDDLEWARES.
app.use(express.json());
app.use(express.urlencoded());

// CUSTOM MIDDLEWARES: LOGGER AND CORS.
app.use(logger);
app.use(cors(optinsCors));

// GET AND POST REQUESTS ROUTERS.
app.use('/api/groceries', groceriesRouter);
app.use('/api/markets', marketsRouter);

// LISTENING TO A PORT.
app.listen(PORT, () => console.log(`Running a server on ${PORT}...`));