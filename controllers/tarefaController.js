const tarefasServices =require('../services/tarefasServices');

async function listarTarefas(req,res){
  try{
    const tarefas = await tarefasServices.listarQuerry();
    res.status(200).json(tarefas)
  } catch(erro){
    res.status(500).json({erro: 'Erro ao buscar tarefas'});
  }
}
module.exports = {listarTarefas}