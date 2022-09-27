<script setup>
//imports
import {ref} from "vue";
import {useLogicTestStore} from '../stores/tableLogicTestStore'

const select= ref(true);

const useLogicTest = useLogicTestStore();
</script>
    
    


<template>

    <div>
        <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3" @click="useLogicTest.createTestlogic"></v-btn>
    </div>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions">Acciones</th>
            </tr>
        </thead>

        <tbody class="" elevation="10">

            <tr>
                <th id="nameInNames">Ordena Números de Mayor a Menor</th>

                <v-spacer></v-spacer>
                <v-btn-group>
                    <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues" hide-details>
                    </v-checkbox>
                    <v-btn variant="text" icon="mdi-delete" color="orange darken-3"></v-btn>
                    <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                </v-btn-group>

            </tr>

        </tbody>


    </v-table>
</template>


<style scoped>
.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}

/* .table{
    border: 1px solid rgba(255, 71, 2, 0.58);
} */
</style>

