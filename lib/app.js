// import dependencies
import express from 'express';
import cors from 'cors';
import creatures from '../data/creatures.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
// API routes for cats
app.get('/data/creatures', (req, res) => {
  res.json(creatures);
});
export default app;
