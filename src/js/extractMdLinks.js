const Marked = require('marked');

function markdownLinkExtractor(markdown) {
  const links = [];

  const renderer = new Marked.Renderer();

  renderer.link = function(href, title, text) {
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };
  return links;
};