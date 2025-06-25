const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController.js');

router.get('/', tarefaController.listarTarefas);

module.exports = router;