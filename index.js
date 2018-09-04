// #!/usr/bin/env node
const fs = require('fs');
const path = require('path')

const mdLinks = require("md-links");

const [, , ...userFile] = process.argv; // operador de propagación para que usuario ingrese su archivo

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);
  
const mdLinks = () => {
  if (mdLinks.indexOf('http://') > 0) {
    return true;
  }
  if (mdLinks.includes('www.')) {
    return true;
  }
  if (mdLinks.includes('.xyz')) {
    return true;
  }
  
}

module.exports = {
  mdLinks: mdLinks,
};