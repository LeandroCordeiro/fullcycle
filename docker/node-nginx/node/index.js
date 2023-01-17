const express = require('express');
const mysql = require('mysql2');

const app = express();

let isDbConnected = false;

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'mypassword',
    database: 'MYDB'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        isDbConnected = true;
    }
});

app.get('/', (req, res) => {
    if (isDbConnected) {


        // Insert into table PEOPLE
        const insertSql = 'INSERT INTO PEOPLE (NAME) VALUES("Leandro Cordeiro")';
        connection.query(insertSql, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Inserted ${results.affectedRows} rows`);
            }
        });

        let table = '<h1>Full Cycle Rocks!</h1>';
        table += '<table><tr><th>ID</th><th>Name</th></tr>';

        // Select all from table PEOPLE
        const selectSql = 'SELECT * FROM PEOPLE';
        connection.query(selectSql, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                results.forEach(row => {
                    table += `<tr><td>${row.ID}</td><td>${row.NAME}</td></tr>`;
                });
                table += '</table>';
                res.send(table);
            }
        });
    } else {
        res.send("Aguarde enquanto carregamos nossos serviços");
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
