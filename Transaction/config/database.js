const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log('Database Connection is successful');})
    .catch((err) => {
        console.error(err);
        console.log('Database Connection is Nort Successful');
        process.exit(1);
    })
};