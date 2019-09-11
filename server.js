import express from 'express';
import morgan from "morgan";
import mongoose from 'mongoose';
import router  from './server/routes';
import Promise from "bluebird";

require('dotenv');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app= express();
app.use(morgan("dev"));


const port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET));

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/financemanager',{useMongoClient:true}, () => console.log("Connected to the database"));

router(app);

app.listen(port, () => { console.log('We are live on ' + port); });

export default app;
