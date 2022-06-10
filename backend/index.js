const dotenv = require("dotenv");

const connectDB = require('./src/database/connect')

dotenv.config();

connectDB();

require('./modules/express');