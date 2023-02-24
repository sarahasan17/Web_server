
console.log("Client size javascript file loaded.")
// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

//to view setting->other tools->developers tools->console

const weatherform= document.querySelector('form')
const search=document.querySelector('input')
const res=weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
       if(data.error){
        console.log(data.error)
       }
       else{
        console.log(data.location)
        console.log(data.data)
       }
    })
})
})
