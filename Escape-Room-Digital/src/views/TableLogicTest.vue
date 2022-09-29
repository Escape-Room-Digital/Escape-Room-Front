<script setup>
//imports
import {ref} from "vue";
import axios from "axios";
 
const select= ref(true);

let url = "http://127.0.0.1:8000/api/logictest"

 const useGetDataLogicTest = () => {
    const json = ref(null);
     const error = ref(null);
     const loading = ref(true);

    const getDataLogic = async () => {
        try {
            const res = await axios.get(url),
            json = await res.data;
            console.log(json);
        } catch (e) {
            // console.log(e);
            error.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    };

};


useGetDataLogicTest()






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
                <th id="name" v-for="listOfLogicalTest in json"> {{listOfLogicalTest.name}} <v-btn-group>
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

