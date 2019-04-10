const csvParse = require('neat-csv');
const parse = async ({ content }) => {
  // console.log("content", content);
  const opts = {
    columns: ['firstname', 'surname']
  };
  // csvParse(content, opts, (err, records) => {
  //   console.log('records', records);
  // });

  const parsed = await csvParse(content, {
    separator: ','
  })

  // console.log('parsed', parsed);
  return parsed.map(s => ({
    firstName: s.firstname,
    surname: s.surname
  }));

};

module.exports = parse;