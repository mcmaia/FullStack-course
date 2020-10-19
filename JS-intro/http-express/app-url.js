// importint http module
const http = require('http');


http.createServer((req, res) =>{
    res.writeHead(200, {'content-type': 'text/plain'});

        switch (req.url) {
            case "/":
                res.end("This is the Home page!")
                break;
            case "/contact":
                res.end("This is the Contact page")
                break;
            default:
                res.end("Wrong url, try again")
            break;
        }

}).listen(3000, 'localhost');

