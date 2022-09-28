<script setup>
//imports
import {ref} from "vue";
import { useGetDataLogicTest } from "../services/serviceLogicTest";
const { getDataLogic, data, error, loading } = useGetDataLogicTest(); 
const select= ref(true);

/*  const useLogicTest = useLogicTestStore(); */
 const listOfLogicalTest =  getDataLogic();
</script>
    
    


<template>

    <div>
        <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3"></v-btn>
    </div>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr class="list-group">
                <th id="name" v-for="listOfLogicalTest in data">{{listOfLogicalTest.name}} <v-btn-group>
                        <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues"
                            hide-details></v-checkbox>
                        <v-btn variant="text" icon="mdi-delete" color="orange darken-3"></v-btn>
                        <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                    </v-btn-group>
                </th>

            </tr>
                
        </tbody>
        <!-- <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">
                Previous
            </button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">
                Next
            </button>
        </div> -->
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

