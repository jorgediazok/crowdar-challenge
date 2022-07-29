const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const documentRoutes = require('./routes/documents');
const userRoutes = require('./routes/users');

//Set app
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('frontend/build/'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

//Using routes

app.use('/api/documents', documentRoutes);
app.use('/api/user', userRoutes);

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
