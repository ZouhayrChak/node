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

const oracledb = require('oracledb');

async function connectToOracleDB() {
  try {
    // Initialize Oracle Client (optional if PATH is set correctly)
    oracledb.initOracleClient(); // No need for libDir if Oracle 23c is installed

    // Connect to the database
    const connection = await oracledb.getConnection({
      user: 'SYSTEM',                     // Your username
      password: 'admin',          // Your password
      connectString: 'localhost:1521/FREE', // Adjust if service name is different
    });

    console.log('Connected to Oracle database');

    // Example query
    const result = await connection.execute('SELECT sysdate FROM dual');
    console.log('Database Time:', result.rows);

    // Close connection
    await connection.close();
    console.log('Connection closed successfully.');
  } catch (err) {
    console.error('Error connecting to Oracle Database:', err);
  }
}

connectToOracleDB();
