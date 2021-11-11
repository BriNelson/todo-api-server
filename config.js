
import dotenv from 'dotenv';
dotenv.config();
export {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT
};

// export default module.exports;
cle