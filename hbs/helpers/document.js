var hbs = require('handlebars')
var config = require('../config.json')

module.exports = function (id, options) {
  var head = hbs.compile('{{> head }}')
  var header = hbs.compile('{{> header }}')
  var footer = hbs.compile('{{> footer }}')

  return new hbs.SafeString(
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      head({'head-title': config.title.index, 'head-description': config['meta-description'].index, 'head-link': config.links.index}) +
      '  <body>\n' +
      '    <div id="content-wrapper" class="' + id + '">\n' +
      header({links: config.links, 'meta-author': config['meta-author']}) +
      options.fn(this) +
      '    </div>' +
      '\n  </body>\n' +
      footer({index: id === 'index', links: config.links, 'meta-author': config['meta-author']}) +
      '</html>')
}
