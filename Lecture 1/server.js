const http = require("http");

const PORT = 3000;

console.log("Starting HTTP Server...");

const server = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {

        console.log("Home route accessed");

        res.statusCode = 200;
        res.end("Welcome to Smart Utility Toolkit!");

    } else if (req.url === "/about") {

        console.log("About route accessed");

        res.statusCode = 200;
        res.end("This is the About Page.");

    } else if (req.url === "/contact") {

        console.log("Contact route accessed");

        res.statusCode = 200;
        res.end("This is the Contact Page.");

    } else {

        console.log("Invalid route accessed");

        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});