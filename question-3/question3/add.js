
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
   let data = 'I dont know what to say, so hello';
   for (let i = 0; i < 10; i++) {
       fs.writeFile(`log${i}.txt`, data+i, function(err){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}
add()
