const express=require('express')

//create new express object "new keywordd not used in js
const app=express()

let hello=(req, res)=>{
    res.writeHead(200)
    res.write('hello world')
    res.end()
}

let goodbye=(req, res)=>{
    res.writeHead(200)
    res.write('good bye')
    res.end()
}

let index=(req,res)=>{
    if(req.url==='/'){
    res.writeHead(200)
    res.write('home page')
    res.end()
    }
    else{
        res.writeHead(404)
        res.write('Not Found')
        res.end()
    }

}


//route http requests to handler function
//index path must go last  or it exeute on all urls
app.use('/hello',hello)
app.use('/goodbye',goodbye)
app.use('/',index)

//start express web server
app.listen(3000)
console.log('running')