
const express = require('express');
const app = express();

app.use(express.json());


//Complete below given Middleware function which check whether number provided in api as params is odd or Even.

function CheckisOdd(req, res, next) {
    
    //Write Your Code here
    var value = parseInt(req.query.num);
    if( value%2 == 0 ){
        req.query.isOdd = false;
    }else{
        req.query.isOdd = true;
    }
    next();

}


//Complete below given Middleware function which adds 2 to a number provided in api as params.

function add2(req, res, next) {
    
    //Write Your Code here
    var value = parseInt(req.query.num);
    value = value + 2;
    req.query.num = value.toString();
    next();
}

/*

Example :- 
GET Reqest of API  '/?num=18' --> The router should return {"num": "20","isOdd":false}

*/

app.get('/', add2, CheckisOdd, (req, res) => {

    //num in data should be replaced by (num query + 2) from the get request route
    //isOdd in data should be replaced by whether (num query + 2) is odd or even if it odd make it true else false 
    const data = {
        "num" : req.query.num,
        "isOdd" : req.query.isOdd
    };
    res.send(JSON.stringify(data));
});


module.exports = app;

