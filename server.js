const fs = require('fs');

fs.writeFile('.hello.txt', 'hello, friend', () => {
    console.log('done creating file');
});