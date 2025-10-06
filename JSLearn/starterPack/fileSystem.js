const fs = require('fs');

fs.writeFileSync('data.txt', 'Hello from Node!');

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})