<script setup>
//imports
/* import { RouterLink } from "vue-router"; */
import { ref } from "vue"
import { useGetData } from "../services/prueba";

const { getData, data, error, loading } = useGetData();

const switch1 = ref(true);

getData("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
</script>


<template>
    <h1>listado escape rooms</h1>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <v-table  v-if="data" elevation="10">
        <thead class="header-list-rooms">
            <tr>
                <th id="names">Nombre</th>
                <th id="accions">Acciones</th>
            </tr>
        </thead>
        <tbody >
            <tr  class="list-group">
                <th id="name" v-for="poke in data.results">{{ poke.name }}   <v-btn-group >
                    <v-checkbox class="text-rigth" v-model="select"  color="orange darken-3" value="trues" hide-details></v-checkbox>
                    <v-btn variant="text" icon="mdi-delete" color="orange darken-3"></v-btn>
                    <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                </v-btn-group></th> 
               
            </tr>
            
             
        </tbody>
        <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">
                Previous
            </button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">
                Next
            </button>
        </div>
    </v-table>
</template>


<style scoped>
.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}
</style>