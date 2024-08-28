const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect(process.env.MONGO_URL, {dbName: 'IGTechso'})
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
}

module.exports = connection;