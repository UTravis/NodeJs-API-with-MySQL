const mysql =  require("mysql");
const env =  require('dotenv')

env.config()

// Conneting
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : process.env.DATABASE
});

db.connect((err) => {
    if(err) {console.log(err.stack);
         return;
    }
    console.log(`MySql Connected!!`)
})


module.exports = db;
