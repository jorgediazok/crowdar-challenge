const mongoose = require('mongoose');
const User = require('../models/user');

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Público', 'Privado', 'Draft'],
    default: 'Público',
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: User,
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('Document', documentSchema);
