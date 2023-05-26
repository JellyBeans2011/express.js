// EXPORTS
const express = require('express');
const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());

// GROCERYLIST
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