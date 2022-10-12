<template>
  <v-app-bar
    relative
    color="#fff"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
    scroll-target="#scrolling-techniques-2"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5)"></v-img>
    </template>
    <v-img
      contain
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="450"
      max-width="150"
      src="https://femcoders.factoriaf5.org/wp-content/uploads/2021/12/factoria-web.png"
    ></v-img>
    <v-app-bar-title class="text-center title-bar">
      Escape Room Digital
    </v-app-bar-title>
    <v-btn>
      <RouterLink to="/"><a class="text-link">Home</a></RouterLink>
    </v-btn>

    <v-btn>
      <RouterLink to="/loginmember"
        ><a class="text-link">Login Admin</a></RouterLink
      >
    </v-btn>

    <v-btn>
      <RouterLink to="/escaperoomgame"
        ><a class="text-link">Login Candidato</a></RouterLink
      >
    </v-btn>

    <v-btn>
      <RouterLink to="/templateforms"
        ><a class="text-link">Template/Form</a></RouterLink
      >
    </v-btn>

    <v-btn>
      <RouterLink to="/prueba"><a class="text-link">pruebas</a></RouterLink>
    </v-btn>
    <v-btn>
      <RouterLink to="/post"><a class="text-link">post</a></RouterLink>
    </v-btn>
  </v-app-bar>
  <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600">
  </v-sheet>
</template>

<style scoped>
.text-link {
  text-decoration: none;
  color: black;
}
.title-bar {
  font-family: "Poppins", sans-serif;
}
</style>
