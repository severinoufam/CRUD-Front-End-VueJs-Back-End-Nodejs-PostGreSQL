/**
 * src/components/pages/edit-paciente/EditPaciente.js
 * Arquivo responsável pela lógica do componente EditPacienteComponent.vue
 */
import PacienteService from '../../../services/PacienteService';

export default {
  name: 'EditPacienteComponent',
  data() {
    return {
      pacienteForm: {
      },
    };
  },

  mounted() {
    this.getPacienteById();
  },

  methods: {
    async getPacienteById() {
      const { id } = this.$route.params;
      const response = await PacienteService.getPacienteId(id);

      this.pacienteForm = { ...response };
    },

    async updateFormPaciente() {
      // Chamada do service passando as propriedades por meio do paciente
      await PacienteService.updatePaciente(this.pacienteForm);
      this.$swal({
        title: 'Paciente atualizado com sucesso!',
        icon: 'successo',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'list',
        });
      });
    },
  },
};
