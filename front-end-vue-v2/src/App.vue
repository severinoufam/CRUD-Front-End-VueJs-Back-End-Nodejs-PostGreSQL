<template>
  <div>
    <!--Home NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand order-md-last">Hospital</a>
      <ul class="navbar-nav mr-auto">
        <!-- Rota cadastro paciente -->
        <li class="nav-item">
          <router-link class="nav-link" to="/">Novo Paciente</router-link>
        </li>
        <!-- Rota lista paciente -->
        <li class="nav-item">
          <router-link class="nav-link" to="/pages/list-paciente"
            >Listar pacientes</router-link
          >
        </li>
      </ul>
    </nav>
    <!-- FIM NAVBAR -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
