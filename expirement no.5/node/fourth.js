var fs = require('fs');

fs.appendFile('mynewfile1.txt','HelloContent! Ronit Satish Mehta 60009230207',function(err){
    if(err) throw err;
    console.log('Saved!');
});