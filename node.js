const mysql=require("mysql");
const http=require("http");
const fs=require("fs");
const url=require("url");
const server=http.createServer(function(req,res){
        
        var q=url.parse(req.url,true).pathname;
        var file="."+q;
        
        fs.readFile(file,function(err,data){
                if (err){
                        res.end("<h1>404 NOT FOUND</h1>");
                };

                res.end(data);
        });

        


}).listen(81);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});