/**
 * src/services/PacienteService.js
 * Arquivo responsável pelos métodos de requisições das Apis via HTTP
 */
import Api from './api';

export default {
  /**
   * (POST) método responsavel por criar novo paciente.
   */
  async createNewPaciente(paciente) {
    try {
      const response = await Api().post('/paciente', paciente);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * (GET) método responsavel por listar todos os pacientes.
   */
  async getPacientes() {
    try {
      const response = await Api().get('/paciente');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * (GET) método responsavel por Lista por Id determinado paciente.
   */
  async getPacienteId(id) {
    try {
      const response = await Api().get(`/paciente/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * (PUT) método responsavel por atualizar um determinado paciente.
   */
  async updatePaciente(paciente) {
    try {
      const id = paciente.paciente_id;
      const response = await Api().put(`/paciente/${id}`, paciente);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * (DELETE) método responsavel por excluir por Id um determinado paciente.
   */
  async deletePaciente(id) {
    try {
      const response = await Api().delete(`/paciente/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
