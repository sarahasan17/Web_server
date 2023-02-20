const express=require('express')
const app=express()
app.get('',(req,res)=>{
    res.send('<h1>BISMILLAH!!</h1>')//app.com
})
app.get('/help',(req,res)=>{
    res.send([{name:'Sara', age:18},{name:'Anas'}])
})
app.get('/about',(req,res)=>{
    res.send('<h3>About Page</h3>')
})
app.get('/weather',(req,res)=>{
    res.send({Location:"Ranchi", forecast:"Sunny"})
})
app.listen(3000,()=>{
    console.log("Running on port 3000")
})



//app.com/help
//app.com/aboutus