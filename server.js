 const express =require('express');
 const app =express();
 console.log("Hello Express ")
 app.get('/',(req,res,next)=> {
    res.json({'message':'ok'})
 });
  app.get('/test',(req,res,next)=> {
    res.json({'message':'ok'})
 });
   app.get('/test1',(req,res,next)=> {
    res.json({'message':'ok'})
 });
  console.log("Hello Express ")
 app.listen(3000,()=>console.log('listening on port 3000'))
