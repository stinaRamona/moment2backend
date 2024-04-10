/*Script för installation av databas*/

const sqlite3 = require("sqlite3").verbose(); //verbose för fler felmeddelanden under dev 

const db = new sqlite3.Database("./db/experience.db"); 

//skapar tabellen för kurser som kommer fyllas på via hemsidan 
db.run(` 
CREATE TABLE workexp (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    companyname TEXT NOT NULL, 
    jobtitle TEXT NOT NULL, 
    description TEXT NOT NULL, 
    location TEXT NOT NULL
); 
`) 

//stänger databasen
db.close();