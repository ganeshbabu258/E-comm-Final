const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDatabase = () => {
    mongoose.connect(process.env.DB_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    })
    .catch((error) => {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); 
    });
};

module.exports = connectDatabase;
