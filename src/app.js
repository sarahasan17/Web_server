//npm i hbs@4.0.1
//Express documentation->Api Reference
const express=require('express')
const path=require('path')
console.log(__dirname)
console.log()
const app=express()

//define paths for express config
const pathhtml=path.join(__dirname,'../public')
//customizing views
const viewpath=path.join(__dirname,'../templates')

//set up handlebars, engines and views location
app.set('view engine','hbs')
app.set('views',viewpath)

//set up static directory to serve
app.use(express.static(pathhtml))
app.get('',(req,res)=>{
    res.render('index',{
        title:'alhamdulillah',
        name:'sara'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Sara'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        help:'Allah helps',
    })
})
/*app.get('',(req,res)=>{
    res.send('<h1>BISMILLAH!!</h1>')//app.com
})
app.get('/help',(req,res)=>{
    res.send([{name:'Sara', age:18},{name:'Anas'}])
})
app.get('/about',(req,res)=>{
    app.use(express.static(pathhtml))
})*/
app.get('/weather',(req,res)=>{
    app.use(express.static(pathhtml))
})
app.listen(3000,()=>{
    console.log("Running on port 3000")
})



//app.com/help
//app.com/aboutus