var fs = require('fs');

fs.open('mynewfile2.txt' , 'w', function(err,file){
    if(err) throw err;
    console.log('saved Ronit Satish Mehta 60009230207');
});