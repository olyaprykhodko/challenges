require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./task');
const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    await newTask.save();
    res.status(201).send(newTask);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/addtask', async (req, res) => {});

app.get('/api/tasks', async (req, res) => {
  const { topic, title } = req.query;
  try {
    if (topic && title) {
      const task = await Task.findOne({ topic, title });
      if (task) res.json([task]);
      else res.status(404).json({ message: 'Task not found' });
    } else if (topic) {
      const tasks = await Task.find({ topic });
      res.json(tasks);
    } else {
      const tasks = await Task.find();
      res.json(tasks);
    }
  } catch (err) {
    console.error('Error retrieving tasks:', err);
    res.status(500).send(err);
  }
});

app.get('/api/topics', async (req, res) => {
  try {
    const topics = await Task.distinct('topic');
    res.json(topics);
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Server running on port ${port}`));
