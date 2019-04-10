// node index --file ./data/students_test_2.csv 

const pdf = require('./src/pdf');
const csv = require('./src/csv');
const argv = require('minimist')(process.argv.slice(2));

const {
  awarderLeftName,
  awarderLeftRole,
  awarderRightName,
  awarderRightRole,
  deliveryDate,
  descriptionWorkshop
} = require('./fixtures/details.json');

(async () => {
  const students = await csv.parse({
    content: csv.read(argv.file)
  });

  pdf.render({
    students,
    awarderLeftName,
    awarderLeftRole,
    awarderRightName,
    awarderRightRole,
    deliveryDate,
    descriptionWorkshop
  });

})();