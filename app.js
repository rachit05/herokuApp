const express = require('express');
let app = express();

let port = process.env.PORT || 5000

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.render('index.html')
})

app.listen(port,()=>{
    console.log('app running')
})