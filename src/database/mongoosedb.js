const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://savage:(password)@cluster0.4dcstto.mongodb.net/users_data')
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err))
