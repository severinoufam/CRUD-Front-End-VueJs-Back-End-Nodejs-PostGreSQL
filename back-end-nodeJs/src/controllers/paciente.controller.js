/**
 * Controllers/pacientes-routes.js
 * Arquivo responsável pela lógica do CRUD.
 */
const db = require("../config/database");

/** Método responsável por criar um novo paciente. (POST) */
exports.createPaciente = async (req, res) => {
  const { nome, cpf, fone, email } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO paciente (nome, cpf, fone, email) VALUES ($1, $2, $3, $4)",
      [nome, cpf, fone, email]
    );
    res.status(201).send({
      message: "Paciente adicionado com sucesso!",
      body: {
        paciente: { nome, cpf, fone, email },
      },
    });
    res.status(200).send(rows);
  } catch (error) {
    console.error('createPaciente', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

/** Método responsável por listar todos os pacientes. (GET) */
exports.listAllPacientes = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
                                      pacienteid,
                                      nome, 
                                      cpf, 
                                      fone, 
                                      email
                                    FROM paciente ORDER BY nome asc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listAllPacientes', error);
    res.status(500).send({
      message: "Ocorreu um erro!!."
    });
  }
};

/** Método responsável por listar um determinado paciente */
exports.findPacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT 
                                      pcienteid,
                                      nome, 
                                      cpf,
                                      fone,
                                      email, 
                                    FROM paciente WHERE pacienteid = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'paciente_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findPacienteById', error);
    if (error == 'paciente_not_found') {
      res.status(404).send({
        message: "Paciente não encontrado!."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

/** Método responsável por atualizar um determinado paciente. */
exports.updatePacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome, cpf, fone, email } = req.body;
    const { rows } = await db.query(`UPDATE paciente 
                                    SET nome = $1, 
                                    cpf = $2, 
                                    fone = $3, 
                                    email = $4, 
                                    WHERE pacienteid = $5`,
      [nome, cpf, fone, email, id]
    );
    res.status(200).send(rows);
  } catch (error) {
    console.error('updatePacienteById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

/** Método responsável por deletar um determinado paciente */
exports.deletePacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM paciente WHERE pacienteid = $1", [id]);
    res.status(200).send({ message: "Paciente deletado com sucesso!" });
  } catch (error) {
    console.error('deletePacienteById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};
