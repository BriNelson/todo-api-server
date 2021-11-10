

import dotenv from 'dotenv';
dotenv.config();
module.exports = {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT,
};


