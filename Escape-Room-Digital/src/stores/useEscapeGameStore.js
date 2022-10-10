//stores/users.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useEscapeStore = defineStore("escape", {
    state: () => ({
        escapes: [],
    }),
    getters: {
        getEscapes(state) {
            return state.escapes;
        }
    },
    actions: {
        async fetchEscapes() {
            try {
                let options = await axios.get('http://127.0.0.1:8000/api/myLogicTestsInEscapeRoom') 
                this.escapes = options.data
                console.log(options.data)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }

    },
})