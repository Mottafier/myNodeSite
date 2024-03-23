const http = require('http');
const fs = require('fs');

const port = 1177;

http.createServer((req,res) =>{

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    var path_first = path.split('/')[1]

    switch(path){
        case '/': 
        case '': 
        case '/index.html': serveStaticFile(res,path,"text/html") ;break;
        case '/shop.html': serveStaticFile(res,path,"text/html") ;break;
        case '/contact.html': serveStaticFile(res,path,"text/html") ;break;
        case '/about.html': serveStaticFile(res,path,"text/html") ;break;
        case '/css/style.css': serveStaticFile(res,"/css/style.css","text/css") ;break;
        default: 
            if(path_first === "js"){
                serveStaticFile(res,path,"text/javascript")
            }
            else if(path_first === "images"){
                serveStaticFile(res,path,"images/" + path.substring(path.indexOf(".")+1))
            }
            else serveStaticFile(res,"404.html","text/html") ;break;
    }


}).listen(port);

console.log("Server listening on port " + port);

function serveStaticFile(res,path,contentType,responseCode){
    if(!responseCode) responseCode = 200;

    fs.readFile("public" + path, (err,data) =>{
        if(err){
            res.writeHead(500,{'Content-Type': 'text/plain'})
            res.end("500 - Internal Server Error.")
        }
        else{
            res.writeHead(responseCode,{'Content-Type': contentType});
            res.end(data);
        }
    })
}