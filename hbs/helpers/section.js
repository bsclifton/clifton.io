var hbs = require('handlebars')

module.exports = function (sectionId, options) {
  return new hbs.SafeString(
      '<section id="' + sectionId + '">\n' +
      '  <div class="container">\n' +
      '    <div>\n' +
      options.fn(this) +
      '    </div>\n' +
      '  </div>\n' +
      '</section>')
}
