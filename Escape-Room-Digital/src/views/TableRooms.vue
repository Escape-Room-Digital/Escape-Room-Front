<script setup>
//imports
import { ref } from "vue"



const switch1 = ref(true);

</script>


<template>
    <h1>listado escape rooms</h1>
 
    
    <v-table  elevation="10">
        <thead class="header-list-rooms">
            <tr>
                <th id="names">Nombre</th>
                <th id="accions">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr class="list-group">
                <th></th>
                    <v-btn-group>
                        <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues"
                            hide-details></v-checkbox>
                        <v-btn variant="text" icon="mdi-delete" color="orange darken-3" href=""></v-btn>
                        <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                        <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3"></v-btn>
                    </v-btn-group>
            </tr>
        </tbody>
        <div class="mt-2">
            <button  class="btn btn-success me-2">
                Previous
            </button>
            <button class="btn btn-primary" >
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