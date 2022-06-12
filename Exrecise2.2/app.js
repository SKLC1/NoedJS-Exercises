const fs = require('fs')
const errCallback = (err)=>{if(err){(err)=>{console.log(err)}}}

fs.writeFile('./notes.txt','some text',errCallback)
fs.copyFile('./notes.txt','copy.txt',errCallback)
getCurrentFilenames();
fs.rename( 'copy.txt', 'renamedCopyNotes.txt', errCallback)

// console.log(fs.readdirSync(__dirname));
function getCurrentFilenames(){
  const folder = './';

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  })
}