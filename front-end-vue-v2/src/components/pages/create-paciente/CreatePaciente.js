/// @ts-nocheck
/**
 * src/components/pages/create-paciente/CreatePaciente.js
 * Arquivo responsável pela lógica do componente CreatePacienteComponent.vue
 */
import { required } from 'vuelidate/lib/validators';

import PacienteService from '../../../services/PacienteService';

export default {

  /** Formulario */
  name: 'CreatePacienteComponent',
  data() {
    return {
      pacienteForm: {
        nome: null,
        cpf: null,
        fone: null,
        email: null,
      },
      isSubmitted: false,
    };
  },

  /** Validação campos formulario */
  validations: {
    pacienteForm: {
      nome: { required },
      cpf: { required },
      fone: { required },
      email: { required },
    },
  },

  /** Logica botão paciente */
  methods: {

    handleSubmitForm() { },

    async submitNewPaciente() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'Você precisa preencher todos os campos obrigatórios!', 'error');
          return;
        }

        await PacienteService.createNewPaciente(this.pacienteForm);
        this.$swal({
          title: 'Paciente cadastrado com sucesso!',
          icon: 'sucesso',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
