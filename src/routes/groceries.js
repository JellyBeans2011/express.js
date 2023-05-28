const express = require('express');
const router = express.Router();

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
router.get('/', (req, res) => {
    res.cookie('visited', true, {
        maxAge: 30000,
    });
    const cookies = req.headers.cookie;
    if (cookies) {
        console.log(req.cookies);
    };
    res.send(groceryList);
});

// FIND GROCERY ITEM
router.get('/:item', (req, res) => {
    const item = req.params.item;
    const groceryItem = groceryList.find((g) => g.item === item);
    res.send(groceryItem);
});

// POST REQUESTS
router.post('/', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body);
    res.send(201);
});

module.exports = router;