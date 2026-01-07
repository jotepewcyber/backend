require('dotenv').config();
console.log('This is the index.js file.');
const express = require('express')
const app = express()
const port = 4000

const githubdata={
  "name":"test1",
  "location":"earth",
  "company":"github",
  "followers":100,
  "following":50,
  "public_repos":10,
  "public_gists":5,
  "created_at":"2020-01-01T00:00:00Z"

}

app.get('/', (req, res) => {
 res.json({status: 'OK'});
 // res.send('Hello World!')
})

app.get('/status',(req,res)=>{
    res.json({status: 'OK'});
})

app.get('/github',(req,res)=>{
    res.json(githubdata);
})

app.get('/youtube',(req,res)=>{
res.send('<h2>go and login first</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
