const express=require('express')
const path=require('path')
console.log(__dirname)
console.log()
const pathhtml=path.join(__dirname,'../public')
const app=express()

app.use(express.static(pathhtml))
/*app.get('',(req,res)=>{
    res.send('<h1>BISMILLAH!!</h1>')//app.com
})
app.get('/help',(req,res)=>{
    res.send([{name:'Sara', age:18},{name:'Anas'}])
})
app.get('/about',(req,res)=>{
    app.use(express.static(pathhtml))
})
app.get('/weather',(req,res)=>{
    app.use(express.static(pathhtml))
})*/
app.listen(3000,()=>{
    console.log("Running on port 3000")
})



//app.com/help
//app.com/aboutus