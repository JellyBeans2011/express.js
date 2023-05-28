const express = require('express');
const router = express.Router();

// LIST OF SUPERMARKETS
const supermarkets = [
    {
        id: 1,
        store: "Whole Food",
        miles: 0.6,
    },
    {
        id: 2,
        store: "Trader Joes",
        miles: 1.3,
    },
    {
        id: 3,
        store: "Albetsons",
        miles: 2,
    },
    {
        id: 4,
        store: "Albetsons",
        miles: 2.5,
    },
    {
        id: 5,
        store: "Albetsons",
        miles: 3.4,
    },
    {
        id: 6,
        store: "Albetsons",
        miles: 4,
    },
    {
        id: 7,
        store: "Albetsons",
        miles: 5.1,
    },
];

// FILTER BY MILES (HOW FAR AWAY U R FROM A STORE)
router.get('', (req, res) => {
    const miles = req.query.miles;
    const parsedMiles = parseInt(miles);
    if(!isNaN(parsedMiles)) {
        const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
        res.send(filteredStores);
    } else {
        res.send(supermarkets);
    };
});

// EXPORT OF ROUTER
module.exports = router;