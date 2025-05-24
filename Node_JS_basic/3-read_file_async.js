const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8'); // Asynchronous read
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(',');
    const fnIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    const students = [];
    const fields = {};

    for (const line of lines.slice(1)) {
      const values = line.split(',');
      const firstName = values[fnIndex].trim();
      const field = values[fieldIndex].trim();

      students.push(firstName);

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
