<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editar paciente</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormPaciente()">

          <!-- Nome -->
          <div class="form-group">
            <label class="font-weight-bold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              v-model="pacienteForm.nome"
            >
          </div>
          <!-- Fim Nome -->

          <!-- CPF -->
          <div class="form-group">
            <label class="font-weight-bold">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              class="form-control"
              v-model="pacienteForm.cpf"
            >
          </div>
          <!-- CPF Nome -->

          <!--Fone-->
          <div class="form-group">
            <label class="font-weight-bold">Telefone</label>
            <input
              type="Text"
              id="fone"
              name="fone"
              class="form-control"
              v-model="pacienteForm.fone"
            >
          </div>
          <!-- Fim Fone -->

          <!-- Email-->
          <div class="form-group">
            <label class="font-weight-bold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              v-model="pacienteForm.email"
            >
          </div>
          <!-- Fim Email-->

          <!-- Botão paciente atualizar-->
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Atualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditPaciente.js"></script>

<style src="" scoped></style>
