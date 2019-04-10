const fs = require('fs');
const PDFDocument = require('pdfkit');
const renderPage = require('./renderPage');

const renderDoc = ({
  filename,
  students,
  deliveryDate,
  descriptionWorkshop,
  awarderLeftName,
  awarderLeftRole,
  awarderRightName,
  awarderRightRole
}) => {
  const doc = new PDFDocument({
    size: [1500, 1062] // size defined by manually typing at the tplPath image size
  });
  doc.pipe(fs.createWriteStream(filename));

  const firstStudent = students[0];
  const studentsLeft = students.slice(1);

  renderPage({
    doc,
    studentFirstName: firstStudent.firstName,
    studentSurname: firstStudent.surname,
    deliveryDate,
    descriptionWorkshop,
    awarderLeftName,
    awarderLeftRole,
    awarderRightName,
    awarderRightRole
  });

  studentsLeft.forEach((student) => {
    doc.addPage();
    renderPage({
      doc,
      studentFirstName: student.firstName,
      studentSurname: student.surname,
      deliveryDate,
      descriptionWorkshop,
      awarderLeftName,
      awarderLeftRole,
      awarderRightName,
      awarderRightRole
    });
  });

  doc.end();
};

module.exports = renderDoc;