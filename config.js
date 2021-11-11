

import dotenv from 'dotenv';
dotenv.config();
let mongoUri = process.env.MONGO_URI
let port = process.env.PORT
export {
  mongoUri, port
} ;


