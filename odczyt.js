const fs = require('fs');

fs.readFile('plik.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }else{
        
        console.log(data);
    }
})