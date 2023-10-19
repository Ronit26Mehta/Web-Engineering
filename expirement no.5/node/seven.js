var fs = require('fs');
fs.appendFile('myreadmefile.txt','This is my text Ronit Satish Mehta 60009230207',function(err){
    if (err) throw err;
    console.log('Updated')
});