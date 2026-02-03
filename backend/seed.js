require('dotenv').config();
const mongoose = require('mongoose');
const Task = require('./task');

const tasks = [
  {
    title: 'Array Deduplication',
    description:
      'Given an array of integers, return a new array with duplicate values removed while preserving the original order.',
    solution:
      'Use a Set to track seen values. Iterate through the array and push values not in the Set into a result array.',
    topic: 'arrays',
  },
  {
    title: 'String Compression',
    description:
      'Compress a string by replacing consecutive repeated characters with the character followed by the count. Example: "aaabbc" -> "a3b2c1".',
    solution:
      'Traverse the string, keep a counter for the current run, and append character+count when the run ends.',
    topic: 'strings',
  },
  {
    title: 'Promise Timeout',
    description:
      'Implement a function that wraps a promise and rejects if it does not settle within a given timeout in milliseconds.',
    solution:
      'Create a timeout promise that rejects after the delay and use Promise.race between the original promise and timeout.',
    topic: 'async',
  },
  {
    title: 'Debounce Function',
    description:
      'Create a debounce function that delays invoking a function until after a specified wait time has elapsed since the last call.',
    solution:
      'Use a timer in closure. Clear the previous timer on each call, then set a new one to invoke the function.',
    topic: 'functions',
  },
  {
    title: 'Group By Property',
    description:
      'Given an array of objects and a property name, return an object that groups items by that property.',
    solution:
      'Reduce the array, using the property value as a key and pushing each item into the corresponding array.',
    topic: 'objects',
  },
  {
    title: 'Simple LRU Cache',
    description:
      'Design a simple LRU cache with get and put operations. When capacity is exceeded, remove the least recently used item.',
    solution:
      'Use a Map to store items. On get/put, refresh the key by deleting and re-setting it. On overflow, delete the first key.',
    topic: 'data-structures',
  },
];

async function seed() {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    throw new Error('MONGO_URI is not set');
  }

  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Task.deleteMany({});
  await Task.insertMany(tasks);

  console.log(`Inserted ${tasks.length} tasks`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
