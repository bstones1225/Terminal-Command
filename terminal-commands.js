 const fs = require('fs');

 module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
   });
 };
module.exports.touch = () => {
  fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {
  if (err) throw err;

  console.log('success')
});
};
module.exports.mkdir = () => {
  fs.mkdir('./TestDir', (err) => {
  if (err) throw err;
  console.log('mkdir success');
});
};