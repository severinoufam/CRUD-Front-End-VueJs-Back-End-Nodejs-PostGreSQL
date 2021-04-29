<!--Formulario cadastro paciente-->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar paciente</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">

          <!--NOME-->
          <div class="form-group">
            <label class="font-weight-blod">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              placeholder="Nome do paciente"
              v-model="pacienteForm.nome"
              :class="{
                'is-invalid': isSubmitted && $v.pacienteForm.nome.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.pacienteForm.nome.required"
              class="invalid-feedback"> O campo nome do paciente é obrigatório!
            </div>
          </div>
          <!--Fim Nome-->

          <!--CPF-->
          <div class="form-group">
            <label class="font-weight-blod">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              class="form-control"
              placeholder="CPF do paciente"
              v-model="pacienteForm.cpf"
              :class="{
                'is-invalid': isSubmitted && $v.pacienteForm.cpf.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.pacienteForm.cpf.required"
              class="invalid-feedback"> O campo cpf do paciente é obrigatório!
            </div>
          </div>
          <!--Fim cpf-->

          <!--Fone-->
          <div class="form-group">
            <label class="font-weight-blod">Fone</label>
            <input
              type="text"
              id="fone"
              name="fone"
              class="form-control"
              placeholder="Telefone do paciente"
              v-model="pacienteForm.fone"
              :class="{
                'is-invalid': isSubmitted && $v.pacienteForm.fone.$error }"
            />
            <div
              v-if="isSubmitted && !$v.pacienteForm.fone.required"
              class="invalid-feedback"> O campo telefone do paciente é obrigatório!
            </div>
          </div>
          <!--Fim Fone-->

          <!--EMAIL-->
          <div class="form-group">
            <label class="font-weight-blod">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Email do paciente"
              v-model="pacienteForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.pacienteForm.email.$error }"
            />
            <div
              v-if="isSubmitted && !$v.pacienteForm.email.required"
              class="invalid-feedback"> O campo email do paciente é obrigatório!
            </div>
          </div>
          <!--Fim email-->

          <!--Botão Paciente-->
          <div class="form-group">
            <button @click="submitNewPaciente" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreatePaciente.js"></script>

<style src="" scoped></style>
