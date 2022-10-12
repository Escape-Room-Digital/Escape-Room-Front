<script setup>
import { ref, computed, watch } from "vue";
import ModalClue from "@/components/ModalClue.vue";
//import users store
import { useEscapeStore } from "../stores/useEscapeGameStore";
import TimerOut from "../components/TimerOut.vue";





// declare store variable
const store = useEscapeStore();

const { fetchEscapes } = useEscapeStore();

const getEscapeGame = computed(() => {
  return store.getEscapeGame;
});
const escapes = computed(() => {
  return store.escapes;
});

fetchEscapes();

////////////



const question = ref('')
const answer = ref('lo has conseguido')

// watch works directly on a ref
watch(question, (newQuestion, oldQuestion) => {
  if (newQuestion == "no") {
      return answer
  }
})

const awesome = ref(true)

</script>

<template>

  <TimerOut />
  
  <div>
    <div v-for="(getterEscape, index) in escapes" :key="index" :getterEscape="getterEscape">

      <v-card class="mx-auto my-12 backgroud-color rounded-lg" max-width="674" max-height="956">

        <v-card-title class="text-center background-title">{{getterEscape.name}}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1 text-center">
            <p class="text-center">{{ getterEscape.statement }}</p>
          </div>
        </v-card-text>

        <v-img height="250" :src="getterEscape.image"></v-img>
        <v-divider class="mx-4"></v-divider>

        <div class="text-center">
          <input class="m-3 text-center inputa" @change="awesome = !awesome" type="text" placeholder="Contesta" color="orange">
          <h6 v-if="awesome" > contesta sabiamente</h6>
          <h2 v-else>esa es la respuesta correcta!</h2>
          <br>
     
          <v-btn class="m-4" icon="mdi-" color="orange" data-bs-toggle="modal" :data-bs-target="'#showModal' + getterEscape.id" dark>
            Pista
          </v-btn>
        </div>
        
      </v-card>
      <modal-clue :id="getterEscape.id" :clue="getterEscape.clue" />
    </div>
  </div>



  


</template>

<style scoped>
@import "../assets/EscapeGame.css";
</style>
