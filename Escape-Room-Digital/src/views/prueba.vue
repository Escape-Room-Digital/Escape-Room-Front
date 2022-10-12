<!-- <script setup>
import { ref } from "vue";

import { storeToRefs } from 'pinia'
//import users store
import {useEscapeStore} from "../stores/useEscapeGameStore"
// declare store variable
const { escapes } = storeToRefs(useEscapeStore());

const { fetchEscapes} = useEscapeStore()

fetchEscapes()

/* const arrayCheck = [

    {
        id: 2,
        name: "Los tres perros",
        statement: "Rover pesa menos que Fido. Rover pesa más que Boomer. De los tres perros, Boomer es el que menos pesa.",
        question: "Si las dos primeras afirmaciones son verdaderas, la tercera afirmación es",
        correct: 1,
        incorrect: 0,
        clue: "Fido pesa mas que los otros dos perros",
        image: "https://st.depositphotos.com/2166845/4807/i/600/depositphotos_48073787-stock-photo-three-dogs.jpg",
        pivot: {
            "escaperoom_id": 1,
            "logictest_id": 2
        }
    }
]
 */



const active = ref(true);

const reformattedArray = arrayCheck.map(function(Obj){
    let rObj ={};
     rObj = [Obj.correct, Obj.incorrect]

   console.log(rObj);
   
   return rObj;
});




console.log(reformattedArray)



/* const increment = () => counter.value++;


const decrement = () => counter.value--;

const reset = () => counter.value = 0;
 */




/* const showResponse = () => {
    const showAnswer = true;
    const message = ref('La respuesta es correcta')
    const messageIncorrect = ref('La respuesta es incorrecta')

    console.log(checkAnswer)
} */

</script>


<template>

    <h1>prueba</h1>

    <ul v-if="active">
        <div v-for="index  in reformattedArray  " :key="index" >
            {{index}}

              <ul v-for=" item, value in index" :key="value">
                <li v-if="item > 0" > {{item}} </li>
              </ul> 
        </div>

    </ul>

</template>
    

 -->
<!-- 
<script setup>
import {ref, computed } from 'vue'








</script>

<template>
    <div class="container">
        <div class="numuno" @submit="number1">
            <input type="text" id="numuno" >
        
        <div class="boton">
            <button id="boton" @click="add">15 metros</button>
        </div>
    </div>
        <div class="numdos" @submit="numdos">
            <input type="text" id="numdos" >
            <div class="boton">
                <button id="botondos" @click="add1">30 metros</button>
            </div>
        </div>
      
        <div class="boton">
            <button id="botondos" @click="compareNumber">Adivinar</button>
        </div>
        <div>
            <span id="resultado"></span>
        </div>
    </div>
    <div>
        <label for="">Puntos</label>
        <span id="puntos"></span>
    </div>
</template> -->


<template>
    <div>
      <slot :hour="hour" :min="min" :sec="sec"></slot>
        
    </div>
</template>
  
<script>
export default {
    props: {
        endDate: {  // pass date object till when you want to run the timer
            type: Date,
            default() {
                return new Date()
            }
        },
        negative: {  // optional, should countdown after 0 to negative
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            now: new Date(),
            timer: null
        }
    },
    computed: {
        hour() {
            let h = Math.trunc((this.endDate - this.now) / 1000 / 3600);
            return h > 9 ? h : '0' + h;
        },
        min() {
            let m = Math.trunc((this.endDate - this.now) / 1000 / 60) % 60;
            return m > 9 ? m : '0' + m;
        },
        sec() {
            let s = Math.trunc((this.endDate - this.now) / 1000) % 60
            return s > 9 ? s : '0' + s;
        }
    },
    watch: {
        endDate: {
            immediate: true,
            handler(newVal) {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                this.timer = setInterval(() => {
                    this.now = new Date()
                    if (this.negative)
                        return
                    if (this.now > newVal) {
                        this.now = newVal
                        this.$emit('endTime')
                        clearInterval(this.timer)
                    }
                }, 1000)
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>





<!-- <style scoped>
.container {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}

.numuno {
    text-align: center;
    margin-top: 10px;
    border: 1rem;

}

.numdos {
    text-align: center;
    margin-top: 10px;
    border: 1rem;
}

.resultado {

    border: 3px solid red;
    float: right;
    width: 200px;
    top: 0px;
    right: 100px;
    text-align: center;

}

.boton {
    text-align: center;
    margin-top: 10px;
}

span {
    margin: auto;
    text-align: center;

    width: 50px;

}
</style> -->