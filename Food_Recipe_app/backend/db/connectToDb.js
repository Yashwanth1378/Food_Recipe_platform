const mongoose = require('mongoose');


const connectToDb = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connected to the database'))
}

module.exports = connectToDb;