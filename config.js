
import dotenv from 'dotenv';
dotenv.config();
let mongoUri = process.env.MONGO_URI
let port = process.env.PORT
let staticServeFile = process.env.STATIC_SERVE_FILE
export {
  mongoUri, port, staticServeFile
} ;


