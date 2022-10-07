//stores/users.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        isLoggedIn:false
    }),
    getters: {
      getUsers(state){
          return state.users
        }
    },
    actions: {
      async fetchUsers() {
        try {
          const data = await axios.get('http://127.0.0.1:8000/api/user')
            this.users = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      checkLoggedInStatus(){
        if ( localStorage.getItem('user')){
          this.isLoggedIn = true
        }
      }
    },
})