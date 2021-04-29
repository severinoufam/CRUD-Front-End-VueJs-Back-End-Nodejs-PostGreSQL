/**
 * Routes/paciente-routes.js
 * Arquivo responsável pelas rotas da API
 */
const router = require('express-promise-router')();
const pacienteController = require('../controllers/paciente.controller');

/** Definindo as rotas do CRUD */

/** Rota responsável por criar um novo paciente. */
router.post('/paciente', pacienteController.createPaciente);

/** Rota responsável por listar todos os pacientes. */
router.get('/paciente', pacienteController.listAllPacientes);

/** Rota responsável por listar um determinado paciente. */
router.get('/paciente/:id', pacienteController.findPacienteById);

/** Rota reponsável por atualizar um determinado paciente. */
router.put('/paciente/:id', pacienteController.updatePacienteById);

/** Rota responsável por deletar um determinado por Id. */
router.delete('/paciente/:id', pacienteController.deletePacienteById);

module.exports = router;