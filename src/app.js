const express = require ('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
const alumnoRoutes = require('./routes/alumno');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'remotemysql.com',
    user:'a7BzilyPvu',
    password:'uerFygqwmg',
    port:3306,
    database: 'a7BzilyPvu'
}, 'single'));
app.use(express.urlencoded({extended:false}));
app.use('/', alumnoRoutes);
app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
})
