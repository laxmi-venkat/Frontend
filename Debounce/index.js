const { request } = require("express");

const express = reqiure('express');
const server = express();


server.use((request,response,proceed)=>{
    response.header('Acess-Control -Allow-Origin',"*");
    response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    response.header('Access-Control-Allow _Headers','Origin,X-requsted-with,content-Type,Accept');
    proceed();
});

server.get('/info',(request,response)=>{
    response.json({country:'India',currencyCode:'INR'});

});

server.listen(3000,()=>{
    console.log('Application is live on port 3000');
    
})