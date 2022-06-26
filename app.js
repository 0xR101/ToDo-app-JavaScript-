const express = require('express');
const app = express();

const methodOverride = require('method-override') 
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));

const mongoose = require('mongoose');
// , {userNewUrlParser: true, useUnifiedTopology: true}
// view engine for the project
app.set("view engine", "ejs");
// able to recieve any information in the body of the application like forms for instance
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/ToDo');

const Router = require('./routes/tasks.js')
app.use('/', Router);
app.listen(3000, ()=>console.log("express started!"));