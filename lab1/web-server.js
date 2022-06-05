const http = require('http')
const fs = require('fs')
const PORT = 3100

// create an HTTP server that handles HTTP requests; it is handed two parameters: the request and response objects
const server = http.createServer((req, resp) => {
    console.log(req.url)
    if (req.url === "/") {
        fs.readFile("web/index.html", function (error, page) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(page);
            }
            resp.end();
        })
    } else {
        resp.writeHead(404);
        resp.write('Contents you are looking are Not Found');

    }
})
server.listen(PORT);
console.log(`HTTP Server is listening at port ${PORT} for HTTP GET requests`)