<script setup>
import { ref, onMounted, computed } from "vue";
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

const number1 = ref(0);
const numdos = ref(0);

const arrayAdd = ref([]);
const arrayCompare = ref([]);

const add = () => {
  arrayAdd.value.push(number1.value);
  console.log(arrayAdd.value);
};

const add1 = () => {
  arrayCompare.value.push(numdos.value);
  console.log(arrayCompare.value);
};

const compareNumber = () => {
  if (arrayAdd.value >= arrayCompare.value) {
    console.log("correct number");
  } else {
    console.log("wrong number");
  }
};

const mostrarResultado = ref("resultado");
</script>

<template>
  <TimerOut />
  <div>
    <div
      v-for="(getterEscape, index) in escapes"
      :key="index"
      :getterEscape="getterEscape"
    >
      <v-card class="mx-auto my-12 backgroud-color rounded-lg" max-width="674">
        <v-card-title class="text-center background-title">{{
          getterEscape.name
        }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1 text-center">
            <p class="text-center">{{ getterEscape.statement }}</p>
          </div>
        </v-card-text>

        <v-img height="250" :src="getterEscape.image"></v-img>
        <v-divider class="mx-4"></v-divider>
        <div>
          <p class="text-center">{{ getterEscape.clue }}</p>
        </div>

        <input type="checkbox" id="checkbox" color="orange" @click="add1" />
        <label for="checkbox">opcion a</label>
        <br />
        <input type="checkbox" id="checkbox" @click="add" />
        <label for="checkbox">opcion b</label>
        <v-btn @click="compareNumber"></v-btn>
        <label for="checkbox">resultado</label>
        <v-btn
          icon="mdi-"
          color="orange"
          data-bs-toggle="modal"
          :data-bs-target="'#showModal' + getterEscape.id"
          dark
        >
          Pista
        </v-btn>
      </v-card>
      <modal-clue :id="getterEscape.id" :clue="getterEscape.clue" />
    </div>
  </div>
</template>

<style scoped>
.background-title {
  margin-bottom: 20px;
  background: #ff4702;
}

.backgroud-color {
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
}

.text-center {
  color: aliceblue;
}
</style>
