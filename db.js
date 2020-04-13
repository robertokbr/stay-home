const sqlite3 = require("sqlite3").verbose()


const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
/*
  //create table
  db.run(`CREATE TABLE IF NOT EXISTS ideas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title  TEXT,
    category TEXT,
    description TEXT,
    link TEXT
  );`)

  
//insert data

const query=`
INSERT INTO ideas(
  image,
  title,
  category,
  description,
  link
) VALUES(?,?,?,?,?);`

const values = [
  "https://www.flaticon.com/premium-icon/icons/svg/2007/2007476.svg",
  "Cursos de programação",
  "cagar",
  "lbalblablalbalblalb",
  "#"
]

db.run(query, values, function(err){
  if (err) return console.log(err)
  console.log(this)
   })

//delete ideas

db.run(`DELETE FROM ideas WHERE id=?`, [1], function(err){
  if (err) return console.log(err)

  console.log("Deletei", this)
})

//show ideas
db.all(`SELECT * FROM ideas`, function(err, rows){
  if (err) return console.log(err)
  
    console.log(rows)
  })
  


*/

db.run(`DELETE FROM ideas WHERE id=?`, [3], function(err){
  if (err) return console.log(err)

  console.log("Deletei", this)
})
})


module.exports = db
