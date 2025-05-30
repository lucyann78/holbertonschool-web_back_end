/*eslint-disable*/
const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      if (!args[0]) throw new Error('Cannot load the database');
      const response = await countStudents(args[0]);
      // Send the full response in one res.end call
      res.end(['This is the list of our students', ...response].join('\n'));
    } catch (err) {
      res.end('This is the list of our students\n' + err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
