const renderDoc = require('./renderDoc');

const render = (params) => {
  const ts = new Date().getTime();
  renderDoc({
    filename: `./output/diploma_${ts}.pdf`,
    ...params
  });
};

module.exports = render;