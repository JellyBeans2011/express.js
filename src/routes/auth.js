const { Router } = require('express');
const router = Router();
const User = require('../database/schemas/User');
const { hashPassword, comparePasswords } = require('../utils/helpers');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400);
    const userDB = await User.findOne({ email });
    if (!userDB) return res.send(401);
    const isValid = comparePasswords(password, userDB.password);
    if (isValid) {
        console.log('Authenticated Successfully!');
        req.session.user = userDB;
        return res.send(200);
    } else {
        console.log('Failed to Authenticate');
        return res.send(401);
    }
});

router.post('/register', async (req, res) => {
    const { email } = req.body;
    const userDB = await User.findOne({ $or: [{ email }] });
    if (userDB) {
        res.status(400).send({ msg: 'User already exists!' });
    } else {
        const password = hashPassword(req.body.password);
        const newUser = await User.create({ password, email });
        res.send(201);
    }
})

module.exports = router;