var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var data =[];
var Redis = require('ioredis');
const client = new Redis();

const { default: RedisClient } = require('@node-redis/client/dist/lib/client');

var request = process.env.REQ || 10;
var timeWindow = process.env.TIME || 60;

app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));

app.get('/showroute',async function(req,res){
    let ip = req.ip;
    errMsg={
        res : 0,
        msg : " no of request exceeded"
    }
    sucMsg={
        res : 1,
        msg : " success"

    }
    const [noOfReq] =  await client.multi().incr(ip).expire(ip,timeWindow).exec();
  
    if(noOfReq[1]>request){
        res.send(errMsg);
    }
    else{
         res.send(sucMsg);
    }
   
})



app.post('/submit', function (req, res) {

    data.push(req.body);
    res.send("1");
  
})
app.get('/list', function(req,res){
    res.send(data);
})

app.get('/deletedata', function (req, res) {
    data =[];
    res.send('1');
})

var server = app.listen(8081, function () {
  
    console.log("Example app listening at")
 })

