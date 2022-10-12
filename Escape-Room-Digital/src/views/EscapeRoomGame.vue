<script setup >
import { ref, onMounted, computed } from 'vue';
//import users store
import { useEscapeStore } from "../stores/useEscapeGameStore"
// declare store variable
const store = useEscapeStore();

const {fetchEscapes} = useEscapeStore();
 
const getEscapeGame = computed(() => {
    return store.getEscapeGame
})
const escapes = computed(() => {
    return store.escapes
})

fetchEscapes();


////////////

const number1 = ref(0);
const numdos = ref(0);

const arrayAdd = ref([]);
const arrayCompare = ref([]);


const add = () => {
    arrayAdd.value.push(number1.value);
    console.log(arrayAdd.value)
}

const add1 = () => {
    arrayCompare.value.push(numdos.value);
    console.log(arrayCompare.value)
}

const compareNumber = () => {
    if (arrayAdd.value >= arrayCompare.value) {
        console.log('correct number')
    } else {
        console.log('wrong number')
    }
};

const mostrarResultado = ref('resultado');





</script>



<template>

    <div v-for="getterEscape  in escapes" :key="getterEscape">
        <!--  v-for="value in getterEscape" :key="value" -->
        <v-card v-if=" getterEscape.id === 0" class="mx-auto my-12 backgroud-color rounded-lg" max-width="674">

            <v-card-title class="text-center background-title">{{getterEscape.name}}</v-card-title>

            <v-card-text>
                <div class="my-4 text-subtitle-1 text-center">
                    <p class="text-center">{{getterEscape.statement}}</p>
                </div>
            </v-card-text>
            <v-img height="250" :src="getterEscape.image"></v-img>
            <v-divider class="mx-4"></v-divider>
            
            <div>
                <p class="text-center">{{getterEscape.clue}}</p>
            </div>
           
            <v-btn icon="mdi-" color="orange" dark>
                Pista
            </v-btn>
        </v-card>

        <v-card v-if=" getterEscape.id >= 2" class="mx-auto my-12 backgroud-color rounded-lg" max-width="674">

            <v-card-title class="text-center background-title">{{getterEscape.name}}</v-card-title>

            <v-card-text>
                <div class="my-4 text-subtitle-1 text-center">
                    <p class="text-center">{{getterEscape.statement}}</p>
                </div>
            </v-card-text>

            <v-img height="250" :src="getterEscape.image"></v-img>
            <v-divider class="mx-4"></v-divider>
            <div>
                <p class="text-center">{{getterEscape.clue}}</p>
            </div>

            <input type="checkbox" id="checkbox" color="orange" @click="add1">
            <label for="checkbox">opcion a</label>
            <br>
            <input type="checkbox" id="checkbox" @click="add">
            <label for="checkbox">opcion b</label>
          
        
            <v-btn @click="compareNumber"></v-btn>
            <label for="checkbox">resultado</label>
            <!-- Modal -->
            <v-btn icon="mdi-" color="orange" dark>
                Pista
            </v-btn>
        
          
        </v-card>

    </div>


 

</template>

<style scoped>
.background-title {
    margin-bottom: 20px;
    background: #FF4702;
}

.backgroud-color {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
}

.text-center {
    color: aliceblue;
}
</style>
