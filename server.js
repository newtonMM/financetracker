const express = require('express');
const mongoose = require('mongoose');
const router = require('./server/routes');

require('dotenv');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app= express();



const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET));

mongoose.connect('mongodb://localhost/financemanager',{useMongoClient:true});

router(app);

app.listen(port, () => { console.log('We are live on ' + port); });

module.exports= app;