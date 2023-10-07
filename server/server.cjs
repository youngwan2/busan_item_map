require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const cors =require('cors')

app.use(cors({origin:'*'}))
app.use('/',express.static(path.join(__dirname,'/build')))
const PORT = 3000
const __path = path.join(__dirname,'/build','index.html')


const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;

console.log(client_secret,client_id)


app.get('/search/encyc', function (req, res) {
    console.log(req.query)
    console.log(client_secret,client_id)

   const api_url = 'https://openapi.naver.com/v1/search/encyc?query=' + encodeURI(req.query.query); // JSON 결과
   const axios = require('axios')
   const options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   axios(options).then((response)=>{
    console.log("응답:",response)
        res.json({response:response.data})
   }).catch((error)=>{
    console.error(error)
    })
 });














app.get('*',(req,res)=>{
    res.sendFile(__path)

})



app.listen(PORT,()=>{
    console.log(PORT,"포트가 열림")
})


