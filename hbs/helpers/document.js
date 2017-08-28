const hbs = require('handlebars')
const config = require('../config.json')

module.exports = function (id, options) {
  let activeDocument

  config.documents.forEach((doc) => {
    doc.active = doc.id === id
    if (doc.active) {
      activeDocument = doc
    }
  })

  if (!activeDocument) {
    activeDocument = {
      title: config.author,
      description: config.websiteDescription,
      href: config.home
    }
  }

  const head = hbs.compile('{{> head }}')
  const header = hbs.compile('{{> header }}')
  const footer = hbs.compile('{{> footer }}')

  return new hbs.SafeString(
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      head({
        title: activeDocument.title,
        description: activeDocument.description,
        href: activeDocument.href,
        authorHref: config.links.googlePlus
      }) +
      '  <body>\n' +
      '    <div id="content-wrapper" class="' + id + '">\n' +
      header({
        home: config.home,
        author: config.author,
        documents: config.documents
      }) +
      options.fn(this) +
      '    </div>' +
      '\n  </body>\n' +
      footer({
        index: id === 'index',
        links: config.links,
        author: config.author
      }) +
      '</html>')
}
