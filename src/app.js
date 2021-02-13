const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();


// importing routes
const alumnoRoutes = require('./routes/alumno');


// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'sql10.freemysqlhosting.net',
    user:'sql10392781',
    password:'pxaRDxI7aW',
    port:3306,
    database: 'sql10392781'

}, 'single'));
app.use(express.urlencoded({extended:false}));

// routes
app.use('/', alumnoRoutes);


//statics files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
})
