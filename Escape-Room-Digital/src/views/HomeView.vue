<script setup></script>

<template>
  <div class="imagen">
  <img
    src="https://femcoders.factoriaf5.org/wp-content/uploads/2021/12/factoria-web.png"
    alt="image_logo"
    class="logo_f5"
  />
  <div class="container_home">
    <div id="container_message_welcome">
      <p id="message">
        Bienvenido/a al Escape Room digital de Factoria F5, lugar donde los
        sueños se pueden hacer realidad dependiendo del esfuerzo que le dediques
        en esta aventura de pruebas de logica y código. Dispondrás de una hora
        para completar dichas tareas, teniendo 45 min para las de lógica y 15
        min para la de código. Tómate tu tiempo y a por todas, nos vemos a la
        vuelta.
      </p>
    </div>
    <RouterLink to="/landingpage">
      <button id="button_home">

        <a id="word_button">Empezar Pruebas</a>
  
      </button>

    </RouterLink>
  
    
  </div>
  </div>
</template>

<style scoped>
@import "../assets/styleHome.css"

</style>
