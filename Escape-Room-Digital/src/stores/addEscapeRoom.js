import { defineStore } from 'pinia'
/* import { useRoute, useRouter} from 'vue-router'  */
// Import axios to make HTTP requests
import axios from "axios"
/* const route = useRoute();
const router = useRouter(); */

export const useEscapeAddLogicTestStore = defineStore("escapeadd", {
    state: () => ({
        escapes: {},
        logictest: []
    }),
    getters: {
    /*     getEscapesAddLogic(state) {
            this.router.push(state.escapes) 
        } */
    },
    actions: {
        async fetchEscapesAddLogic(escapes,logictest) {
            try {
                let options = await axios.get(`http://127.0.0.1:8000/api/addLogicTestToEscaperoom/${escapes}/${logictest}`) 
                this.escapes = options.data
                console.log(options.data)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }

    },
})