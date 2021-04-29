<!-- Tabela lista pacientes-->
<template>
  <div>
    <h3 class="text-center">Listar todos os pacientes</h3>
    <table class="table table-striped">
      <thead>

        <!-- Exibe todos os pacientes -->
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center">CPF</th>
          <th class="text-center">Telefone</th>
          <th class="text-center">Email</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <!-- Retorna todos os dasdos do BD ---->
        <tr v-for="paciente in pacientes" :key="paciente.paciente_id">
          <td>{{ paciente.nome }}</td>
          <td>{{ paciente.cpf }}</td>
          <td>{{ paciente.fone }}</td>
          <td>{{ paciente.email }}</td>
          <td>
            <!-- Rota p/ editar paciente -->
            <router-link
              :to="{ name: 'update', params: { id: paciente.pacienteid } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']" /> Editar
            </router-link>
          </td>
          <td>
            <!-- Ação p/ deletar paciente especifico -->
            <button @click="removePaciente(paciente.pacienteid)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListPaciente.js"></script>

<style src="" scoped></style>
