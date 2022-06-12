const fs = require('fs')
const errCallback = (err)=>{if(err){(err)=>{console.log(err)}}}

fs.writeFileSync('./notes.txt','some text')
fs.copyFileSync('./notes.txt','./copy.txt')
fs.rename( 'copy.txt', 'renamed.txt', errCallback)
getCurrentFilenames();

// console.log(fs.readdirSync(__dirname));
function getCurrentFilenames(){
  const folder = './';

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  })
}