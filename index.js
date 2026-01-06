require('dotenv').config();
console.log('This is the index.js file.');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 res.json({status: 'OK'});
 // res.send('Hello World!')
})

app.get('/status',(req,res)=>{
    res.json({status: 'OK'});

})

app.get('/youtube',(req,res)=>{
res.send('<h2>go and login first</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
