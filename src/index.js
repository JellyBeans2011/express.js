// EXPORTS
const express = require('express');const app = express();const PORT = 3000;const fs = require('fs');const path = require('path');const { format } = require('date-fns');const logger = require('./logger');const cors = require('cors');const optinsCors = require('./cors');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());
app.use(logger);
app.use(cors(optinsCors));

// GROCERY LIST
const groceryList = [
    {
        item: 'milk',
        quantity: 2
    },
    {
        item: 'cereal',
        quantity: 2
    },
    {
        item: 'lettace',
        quantity: 2
    },
];

// GET REQUESTS
app.get('/groceries', (req, res) => {
    res.send(groceryList);
});

// POST REQUESTS
app.post('/groceries', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.send(201);
});

// LISTENING TO A PORT
app.listen(PORT, () => console.log(`Running a server on ${PORT}...`));