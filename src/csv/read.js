const fs = require('fs');

const read = (csvPath) => {
  const content = fs.readFileSync(csvPath, 'utf8');
  return content;
};

module.exports = read;