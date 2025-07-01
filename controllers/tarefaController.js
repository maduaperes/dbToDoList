const tarefasServices =require('../services/tarefasServices');

async function listarTarefas(req,res){
  try{
    const tarefas = await tarefasServices.listarQuerry();
    res.status(200).json(tarefas)
  } catch(erro){
    res.status(500).json({erro: 'Erro ao buscar tarefas'});
  }
}

async function criarTarefa(req, res) {
  try {
    const { descricao } = req.body;
    await tarefasServices.criarQuerry(descricao);
    res.status(201).json({ message: 'Tarefa criada com sucesso' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar tarefa' });
  }
}

async function atualizarTarefa(req, res) {
  try {
    const { id } = req.params;
    const { descricao } = req.body;
    await tarefasServices.atualizarQuerry(id, descricao);
    res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar tarefa' });
  }
}

async function deletarTarefa(req, res) {
  try {
    const { id } = req.params;
    await tarefasServices.deletarQuerry(id);
    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao deletar tarefa' });
  }
}

module.exports = {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa
};
