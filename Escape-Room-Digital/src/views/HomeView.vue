<script setup></script>

<template>
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
    <div id="button_home">
      <p id="word_button">Empezar Pruebas</p>
      <!-- <v-container fluid class="pa-0">
        <v-row align="center" justify-center>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div class="my-2">
                <v-btn color="warning" dark>Empezar Pruebas</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container> -->
    </div>
    
  </div>
</template>

<style scoped>
.container_home {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8HR-DzuTxhmbYQ-vnS5v0DJYc43czHXSSw&usqp=CAU");
  background-size:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#container_message_welcome {
  width: 70vh;
  height: 80vh;
  border-radius: 10px;
  background-color: black;
  opacity: 0.7;
}
.logo_f5 {
  height: 20vh;
  width: 40vh;
}
#message {
  color: aliceblue;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 13vh;
}
#button_home{
  margin:3vh ;
  width: 30vh;
  height: 6vh;
  border-radius: 10px;
  background-color: black;
    opacity: 0.7;
  
}
#word_button{
  display: flex;
  justify-content: center;
  color: aliceblue;
  margin: 1vh;
}

</style>
