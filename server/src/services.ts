import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "TOTOjemysql.37",
  database: 'vinyl',
});

con.connect((err:any) => {
  if (err) throw err;
  console.log("Connected to DB!");
});

export default con;