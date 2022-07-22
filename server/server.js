const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

//Set app
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Test server
app.get('/', (req, res) => {
  res.send('Hello');
});

//MongoDB & Server connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //SERVER
    app.listen(process.env.PORT, () =>
      console.log('Connected to DB & listening on Port', process.env.PORT)
    );
  })
  .catch((error) => {
    console.log(error);
  });
