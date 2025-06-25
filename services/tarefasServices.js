const db = require("../config/db.js");

async function listarQuerry(){
   const [rows] = await db.query("SELECT * FROM tarefas");
   return rows;
}
 module.exports = {
    listarQuerry
}

 
