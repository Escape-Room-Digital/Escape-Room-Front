<script setup>

</script>

<template>

  <div class="container_admin_options">
    <div id="container_title">
      <p id="title_admin">Panel Administrador</p>
    </div>
 <div class="container_options">

<div value="escaperomm" id="container_scaperooms">
  <p class="title_options"><strong> <RouterLink to="/tablerooms">Scape Rooms</RouterLink></strong></p>
</div>

<div id="container_pruebasLogica">
  <p  class="title_options"><strong><RouterLink to="/tablelogictest">Pruebas Logicas</RouterLink></strong></p>
</div>

<div id="container_pruebasCodigo">
  <p  class="title_options"><strong><RouterLink to="/tablecodereditor">Prueba de Codigo</RouterLink></strong></p>
</div>

<div id="container_listadoCandidatos">
  <p  class="title_options"><strong><RouterLink to="/tablelistcandidate">Listado de Candidatos</RouterLink></strong></p>
</div>
<div id="container_listadoCandidatosPruebaCompletada">
  <p  class="title_options"><strong><RouterLink to="/post">Config</RouterLink></strong></p>
</div>
 </div>  
  </div>



</template>

<style scoped>
@import "../assets/stylePanelAdmin.css"
</style>
