/*eslint-disable*/
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Get the database file from command line arguments
const args = process.argv.slice(2);

app.get('/', (req, res) => {
  res.status(200).type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');

  if (!args[0]) {
    // No database file provided
    res.end('Cannot load the database');
    return;
  }

  try {
    const messages = await countStudents(args[0]);
    res.end(messages.join('\n'));
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
