const fs = require('fs');

// fs.readFile('data.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile('data.txt', '\nNew line', (err) => {
//   if (err) throw err;
//   console.log('Updated');
// });

fs.unlink('data.txt', (err) => {
  if (err) throw err;
  console.log('Deleted');
});