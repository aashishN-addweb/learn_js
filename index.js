// HTTP module
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {

    // write headers for response
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) {
                console.log(err);
            }
    
            res.end(content);
        });
    }else if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) {
                console.log(err);
            }
    
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

// NOTE : we can use nodemon in dev env for no need to restart server after file changes.