
<script setup>
import Header from './components/Header.vue';

import { ref } from "vue";
  
const icons = ref(["mdi-facebook", "mdi-twitter", "mdi-instagram"]);
const drawer = null
</script>


<template>
  <v-app>
   <Header/>
     
    
    <v-main >
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
    <v-footer class="d-flex flex-column " app>
      <div class="container_footer d-flex w-100 align-center px-4">
        <strong class="text_footer">Todos los derechos reservados 2021</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          :icon="icon"
          variant="plain"
          size="small"
          id="icon_footer"
        ></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>

  main{
    background-image: url("/Users/David/ProyectosF5David/Escape-Room/Escape-Room-Digital/src/assets/image/background.png");
    background-size: 1500px
    
  }
.container_footer {
  background-color: #ff4702;
}

.text_footer {
  color: aliceblue;
  padding: 0px;
}

#icon_footer {
  color: aliceblue;
}


</style>

