<template>
  <v-app>
    <v-app-bar app>
      <!-- -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer class="d-flex flex-column" app>
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
        id="icon_footer" ></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-instagram"]);
</script>


<style>
  .container_footer {
    background-color: #FF4702
;
  }

  .text_footer{
    color:aliceblue;
  }

#icon_footer {
    color:aliceblue;
  }
</style>

