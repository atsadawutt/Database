
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
 const connection = mysql.createConnection({ // ทำการติดต่อกับฐานข้อมูล
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'student_database', // เชื่อมต่อไปยังฐานข้อมูลชื่อ student_database
 });

 // เปิด connection ไปที่ database
 connection.connect();

 connection.query("SELECT * from students where id = '3'", (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

 // ปิด connection
 connection.end();
});

app.listen(3000, () => {
 console.log('server started on port 3000!');
});

// คำสั่ง Termimal
// npm i express mysql2 nodemon
// เปิด server : nodemon app.js หรือ npx nodemon app.js