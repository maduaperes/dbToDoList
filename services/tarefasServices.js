const db = require("../config/db.js");

async function listarQuerry(){
   const [resultado] = await db.query('SELECT * FROM tarefas');
   return resultado;
}
async function criarQuerry({titulo, descricao, status, prioridade, data_entrega}) {
   const query = 'INSERT INTO tarefas (titulo, descricao, status, prioridade, data_entrega) ' + 'VALUES (?, ?, ?, ?, ?)';
   await db.query(query, [titulo, descricao, status, prioridade, data_entrega]);
}

async function atualizarQuerry(id, {titulo, descricao, status, prioridade, data_entrega}) {
   const query = 'UPDATE tarefas SET titulo = ?, descricao = ?, status = ?, prioridade = ?, data_entrega = ? ' + ' WHERE id = ?';
   const [resultado] = await db.query(query, [titulo, descricao, status, prioridade, data_entrega, id]);
   return resultado;
}

async function deletarQuerry(id) {
   const query = 'DELETE FROM tarefas WHERE id = ?';
   const [resultado] = await db.query(query, [id]);
   return resultado.affectedRows;
}
 module.exports = {
    listarQuerry,
    criarQuerry,
    atualizarQuerry,
    deletarQuerry
}