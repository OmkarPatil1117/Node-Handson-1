const http = require("http");
const port=8008;
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Home page");
        res.end()
    }

    else if(req.method==="GET" && req.url === '/about'){
        res.write("Got It");
        res.end();
    }
    else if(req.url === "/contact"){
        res.write("Contact Us");
        res.end();

    }
    
})

server.listen(port)
console.log('Hello')