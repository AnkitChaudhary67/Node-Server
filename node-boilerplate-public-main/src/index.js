var http = require("http");
const querystring=require("querystring");
const port=8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
 let url=req.url.split("?")[0];
 if(url=="/"){
    res.writeHead(300,{Location:"/welcome"})
 }
      if(url=="/welcome"){
          res.writeHead(200,{"Content-type":"text/plain"})
         res.write("Welcome to Dominos!");
         res.end();
      } else if(url=="/contact"){
        res.writeHead(300,{"Content-type":"application/json"})
        res.write(
            JSON.stringify( {  
                phone: '18602100000', 
                     email: 'guestcaredominos@jublfood.com' 
               })
           
           );
           res.end();
      }else{
        res.writeHead(404,{"Content-type":"text/plain"})
          res.end("<h1>404, Page does not exist</h1>")
      }
}
httpServer.listen(`${port}`,()=>{console.log(`The server is up at port ${port}`)});
module.exports = httpServer;