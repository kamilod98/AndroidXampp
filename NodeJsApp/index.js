//1. Llamar el paquete de mysql
const mysql = require('mysql');

//2. Llamar el paquete express
const express = require('express');

//3. Llamar el paquete de body-parser
const bodyparser = require('body-parser');

//4. Crear una nueva instancia de la app
var app = express();

//5. Habilitar las peticiones JSON
app.use(bodyparser.json());

//6. Crear la conexion de base de datos mysql
var connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'market'
});

//7. Validar la conexion 
connectionDB.connect((err) => {
    if(!err){
        console.log('.: Successsfull data base connection :.');
    } else {
        console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
    }
});

//8. Correr el servidor 
app.listen(3000, ()=>console.log('Server is RUNNING at port: 3000')); 

//9. Obtener todos los datos
app.get('/list_users',(req,res) => {
    connectionDB.query('SELECT * FROM users',(err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//10. Buscar por un usuario
app.get('/list_users',(req,res) => {
    connectionDB.query('SELECT * FROM users WHERE id = ?', [req.params.id],(err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//11. INSERT/UPDATE

//12. DELETE