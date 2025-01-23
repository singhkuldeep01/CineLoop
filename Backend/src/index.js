import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
