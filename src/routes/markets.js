const express = require('express');
const router = express.Router();

const supermarkets = [
    {
        store: "Whole Food"
    },
    {
        store: "Trader Joes"
    },
    {
        store: "Albetsons"
    },
];

router.get('', (req, res) => {
    res.send(supermarkets);
});

module.exports = router;