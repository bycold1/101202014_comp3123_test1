
const fs = require('fs')
const path=require('path')
var writeTo = '../logs';
let add = function () {
   if (!fs.existsSync(writeTo)){
       fs.mkdirSync(writeTo);
   }

   try {
       process.chdir(writeTo);    
   }
   catch (err) {
       console.log('change directory error: ' + err);
   }
   let data = 'I am a student of George Brown College, Hello world';
   for (let i = 1; i < 11; i++) {
       fs.writeFile(`log${i}.txt`, data, function(err){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}
add()
