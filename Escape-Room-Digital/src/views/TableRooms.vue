<script setup>
//imports
/* import { RouterLink } from "vue-router"; */
import { ref } from "vue"

const switch1 = ref(true);

</script>


<template>
    <h1>listado escape rooms</h1>

    <p>Cargando información...</p> 
    <v-btn variant="text" icon="mdi-plus" color="orange darken-3"></v-btn>
    <v-table elevation="10">
        <thead class="header-list-rooms">
            <tr>
                <th id="names">Nombre</th>
                <th id="accions">Acciones</th>
            </tr>
        </thead>
        <tbody class="table">
            <tr class="list-group">
                <th id="name">Tabla Escape</th>
                

            </tr>
            <div class="d-flex justify-end mb-6">
                  
                  <v-btn variant="text" icon="mdi-delete" color="orange darken-3" href=""></v-btn>
                  <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                  <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues"
                              hide-details></v-checkbox> 
  
               </div>
        
            

            </tbody>

       
        <div class="mt-2">
            <button class="btn btn-success me-2">
                Previous
            </button>
            <button  class="btn btn-primary">
                Next
            </button>
        </div>
    </v-table>
</template>


<style scoped>
.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}

.list-group{
    display:flex;
}
.table{
    display: flex;
    gap: 140vh;
}

</style>