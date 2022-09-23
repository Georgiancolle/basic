const express=require('express')

//create new express object "new keywordd not used in js
const app=express()

let hello=(req, res)=>{
    res.writeHead(200)
    res.write('hello world')
    res.end()
}
//route http requests to handler function
app.use(hello)
//start express web server
app.listen(3000)
console.log('running')