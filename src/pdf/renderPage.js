const fontPath = './fonts/';
// const FONT_NAME = `${fontPath}PlayfairDisplay-BoldItalic.ttf`;
const FONT_NAME = `${fontPath}MonotypeCorsiva.ttf`;
const FONT_DESCRIPTION = `${fontPath}LibreBaskerville-Regular.ttf`;
const FONT_BODY = `${fontPath}Roboto-Regular.ttf`;

const COLOR_NAME = '#222222';
const COLOR_DESCRIPTION = '#8c8c8c';

const tplPath = `./fixtures/diploma_ai.png`;
const logoKonexio = `./fixtures/logo-konexio-final2.png`;

const renderPage = ({
  doc,
  studentFirstName,
  studentSurname,
  deliveryDate,
  descriptionWorkshop,
  awarderLeftName,
  awarderLeftRole,
  awarderRightName,
  awarderRightRole
}) => {
  const firstName = studentFirstName.substring(0, 1).toUpperCase() + studentFirstName.substring(1).toLowerCase();
  const surname = studentSurname.toUpperCase();

  doc.image(tplPath, 0, 0);

doc.image(logoKonexio, 240, 635, {
  width: 240
});

doc.image(logoKonexio, 1025, 635, {
  width: 240
});

doc
  .font(FONT_NAME)
  .fillColor(COLOR_NAME)
  .fontSize(80)
  .text(`${firstName} ${surname}`, 150, 400, {
    width: 1200,
    align: 'center'
  });


// delivery date
doc
  .font(FONT_DESCRIPTION)
  .fontSize(40)
  .fillColor(COLOR_DESCRIPTION)
  .text(deliveryDate, 550, 525, {
    width: 450,
    align: 'center'
  });

// description diploma
doc
  .font(FONT_BODY)
  .fontSize(25)
  .fillColor(COLOR_DESCRIPTION)
  .text(descriptionWorkshop, 550, 590, {
    width: 450,
    align: 'center'
  });

// awarder left name
doc
  .font(FONT_BODY)
  .fontSize(25)
  .fillColor(COLOR_DESCRIPTION)
  .text(awarderLeftName, 220, 870, {
    width: 310,
    align: 'center'
  });

// awarder left role
doc
  .font(FONT_BODY)
  .fontSize(25)
  .fillColor(COLOR_DESCRIPTION)
  .text(awarderLeftRole, 220, 900, {
    width: 310,
    align: 'center'
  });

// awarder right name
doc
  .font(FONT_BODY)
  .fontSize(25)
  .fillColor(COLOR_DESCRIPTION)
  .text(awarderRightName, 985, 870, {
    width: 310,
    align: 'center'
  });

// awarder right role
doc
  .font(FONT_BODY)
  .fontSize(25)
  .fillColor(COLOR_DESCRIPTION)
  .text(awarderRightRole, 985, 900, {
    width: 310,
    align: 'center'
  });
};

module.exports = renderPage;