const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.session.user) next();
    else res.send(401);
});

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

// CHECKING IF CART EXISTS AND SENDING CART OBJ
router.get('/shopping/cart', (req, res) => {
    const { cart } = req.session;
    if (!cart) {
        res.send('You have no cart items!')
    } else {
        res.send(cart);
    };
});

// CREATING CART W/ EXPRESS SESSION OR JUST ADDING CART|ITEM INTO OBJ
router.post('/shopping/cart/item', (req, res) => {
    const { item, quantity } = req.body;
    const cartItem = { item, quantity };
    const { cart } = req.session;
    if (cart) {
        req.session.cart.items.push(cartItem);
    } else {
        req.session.cart = {
            items: [cartItem],
        };
    }
    res.send(201);
});

module.exports = router;