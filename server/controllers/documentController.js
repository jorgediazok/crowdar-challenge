const mongoose = require('mongoose');
const Document = require('../models/document');
require('dotenv').config();

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 });
    res.json({
      data: documents,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getDocument = async (req, res) => {
  const { id } = req.params;

  try {
    const document = await Document.findById(id);

    res.status(200).json(document);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createDocument = async (req, res) => {
  const document = req.body;

  const newDocument = new Document({
    ...document,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  console.log(newDocument);

  try {
    await newDocument.save();

    res.status(201).json(newDocument);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateDocument = async (req, res) => {
  const { id } = req.params;
  const { name, file, type, owner, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedDocument = {
    name,
    file,
    type,
    owner,
    description,
    _id: id,
  };

  await Document.findByIdAndUpdate(id, updatedDocument, { new: true });

  res.json(updatedDocument);
};

exports.deleteDocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No existe el documento con el id: ${id}`);

  await Document.findByIdAndRemove(id);

  res.json({ message: 'Document eliminado correctamente.' });
};
