/*eslint-disable*/
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1); // skip the first line (header)

    const fields = {};

    for (let student of students) {
      const parts = student.split(',');
      const name = parts[0];
      const field = parts[parts.length - 1];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    }

    console.log(`Number of students: ${students.length}`);
    for (let field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
