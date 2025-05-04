const express = require('express');
const mysql = require('mysql2');
const app = express();

//Database conectivity here
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gallery',
});

//If database is connected then show output in console
db.connect((error) => {
  if(error) {
    console.log('Error connecting to the database: ' + error);
    return;
  }
  console.log('Database is connect with your project');
});



const PORT = 3000;

app.listen(PORT, ()=>{
  console.log(`Server is running on port :${PORT}`);
});