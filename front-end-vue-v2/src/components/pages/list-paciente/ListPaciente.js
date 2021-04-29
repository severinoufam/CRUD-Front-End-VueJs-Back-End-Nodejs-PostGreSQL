// @ts-nocheck
/**
 * src/components/pages/list-paciente/ListPaciente.js
 * Arquivo responsável pela lógica do componente ListPacienteComponent.vue'
 */
import PacienteService from '../../../services/PacienteService';

export default {
  /** Retorna informações do BD */
  name: 'ListPacienteComponent',
  data() {
    return {
      pacientes: [],
    };
  },

  /** Monta informações */
  mounted() {
    this.listAllPacientes();
  },

  /** Logica p/ exibir e deletar paciente */
  methods: {

    async listAllPacientes() {
      const response = await PacienteService.getPacientes();
      this.pacientes = response;
    },

    async removePaciente(id) {
      this.$swal({
        title: 'Tem certeza de que deseja excluir o paciente?',
        text: 'Atenção! Este paciente será excluído!',
        icon: 'aviso',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim! Por favor, apague-o!',
      }).then(async (result) => {
        if (result.value) {
          await PacienteService.deletePaciente(id);
          this.$swal('Deletado', 'Deletado com sucesso', 'successo');
          this.listAllPacientes();
        } else {
          this.$swal('Cancelado', 'Cancelar exclusão', 'informações');
        }
      });
    },
  },
};
