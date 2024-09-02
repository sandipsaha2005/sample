import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

import { dbConnection } from './database/dbConnection.js';
dotenv.config({ path: './config/config.env' });
const app = express();

app.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001'], // The URL of your React app
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true, // Allow credentials
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
dbConnection();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
