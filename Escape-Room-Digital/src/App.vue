
<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>


<template>
  <v-app app>
    <Header />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
main {
  background-image: url("./assets/image/background.png");
  background-size: 1500px
}
</style>

