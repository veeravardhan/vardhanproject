const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require("mongoose")


require('dotenv').config();


const app = express();
const port = process.env.PORT || 3001;

app.use(bodyparser.json())
app.use(function(req, res, next) {
    console.log("MY MIDDLE WARE");
    //res.send("Cant continue");
        next();
})

mongoose.connect("mongodb://localhost:27017/Form", { useNewUrlParser: true ,useUnifiedTopology : true } )
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Error')
});

db.once('open', function () {
    console.log('DB is connected')
});

const UserRouter = require('./routes/user.routes')
app.use('/user',UserRouter)
app.listen(port, () => {
    console.log("server is running on the port" + port)
})