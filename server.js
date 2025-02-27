const http = require('http');
const fs = require('fs');
const path = require('path'); // We'll need this to work with file paths
const port = 3000;

// Create the server
const server = http.createServer(function (req, res) {
    // Serve index.html when the root URL is accessed
    if (req.url === '/') {
        fs.readFile('index.html', function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    }
    // Serve about.html
    else if (req.url === '/page2') {
        fs.readFile('page2.html', function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    }
    // Serve contact.html
    else if (req.url === '/page3') {
        fs.readFile('page3.html', function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    }
    // Serve services.html
    else if (req.url === '/page4') {
        fs.readFile('page4.html', function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    }
    // Serve CSS file
    else if (req.url === '/css/style.css') {
        fs.readFile(path.join(__dirname, 'public', 'css', 'style.css'), function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
            }
            res.end();
        });
    }
    // Handle 404 for unrecognized URLs
    else {
        res.writeHead(404);
        res.write('Error: File Not Found');
        res.end();
    }
});

// Start the server
server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong:', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});