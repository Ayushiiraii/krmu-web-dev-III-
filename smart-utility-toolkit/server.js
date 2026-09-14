const http = require("http");
const log = require("./modules/logger");

const server = http.createServer((req,res)=>{
     log(`Request received: ${req.url}`, "info");

     if (req.url === "/"){
        res.end("welcome to Node server")
     }
     else if (req.url === "/about"){
        res.end("About page");
     }
     else if(req.url === "/contact"){
        res.end("Contact page")
     }
     else{
        res.statusCode = 404;
        res.end("404 - page Not Found");
     }
});

server.listen(3000,()=>{
    log("server is running on the port 3000", "success");
})