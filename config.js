

// import dotenv from 'dotenv';
// dotenv.config();
// let mongoUri = process.env.MONGO_URI
// let port = process.env.PORT
// export {
//   mongoUri, port
// } ;


import { config } from 'dotenv';
config();
export const mongoUri = process.env.MONGO_URI;
export const port = process.env.PORT;