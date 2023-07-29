// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (change the URL to your own MongoDB database)
mongoose.connect('mongodb+srv://abhishek_0504:9971749520a@cluster0.b6e9z.mongodb.net/highOnDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Schema and Model
const itemSchema = new mongoose.Schema({
  title: String,
  image_url: String,
  size: String,
  type: String,
  description: String
});

const Item = mongoose.model('Item', itemSchema);

// CRUD Operations
app.get('/items', async (req, res) => {
  try {
    console.log("Comming for items get");
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/items', async (req, res) => {
  console.log("Comming for items");
  const { title, image_url, size, type, description } = req.body;
  const newItem = new Item({ title, image_url, size, type, description });
  try {
    const createdItem = await newItem.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/items/:id', async (req, res) => {
  const { title, image_url, size } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { title, image_url, size },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
