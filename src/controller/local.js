const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../database/schemas/User');
const { comparePasswords } = require('../utils/helpers');

passport.use(
    new Strategy({
        usernameField: 'email',
    }, async (email, password, done) => {
        console.log(email);
        console.log(password);
        try {
            if (!email || !password) throw new Error('Missing Credentials');
            const userDB = await User.findOne({ email });
            if (!userDB) throw new Error('USer not found!');
            const isValid = comparePasswords(password, userDB.password);
            if (isValid) {
                console.log('Authenticated Successfully!');
                done(null, userDB);
            } else {
                done(null, null);
            }
        } catch (err) {
            console.log(err);
            done(err, null);
        }
    })
);