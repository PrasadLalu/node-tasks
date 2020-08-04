/**
 * Test database connect
 */
const connection = require('./connection');

const connectDB = () => {
    connection.connect((err) => {
        if (err) {
            return console.error('error: ' + err.message);
        }
        console.log(`MySQL server connected to: ${connection.config.host}`);
    });
}
module.exports = connectDB;