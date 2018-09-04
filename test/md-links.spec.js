const mdLinks = require('./../src/js/index.js').mdLinks;
test('El enlace contiene el protocolo http://', () => {
  expect(mdLinks).toBeTruthy();
});
test('El enlace contiene www.', () => {
  expect(mdLinks).toBeTruty();
});
test('El enlace contiene un dominio .xyz', () => {

})
 
test('Estado del enlace funcional', () => {

});