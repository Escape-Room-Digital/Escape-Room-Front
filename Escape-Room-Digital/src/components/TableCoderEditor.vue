<script setup>
//imports
import { ref } from "vue";
import { useGetDataCoderEditor } from "../services/serviceCoderEditor";
import { onMounted } from "vue";


const { getDataCoder, data, errors, loading, destroyCoder } = useGetDataCoderEditor();
const select = ref(true);
const deletes = ref(true);

const deleteCode = async (id) => {
    if (!window.confirm("You sure?")) {
        return;
    }
    await destroyCoder(id);
    await getDataCoder();
};

const listOfLogicalTest = getDataCoder();

/* onMounted(getDataCoder); */

</script>

<template>

    <div>
        <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3">
            <RouterLink to="/codeeditorcreate"><a class="text-link">create</a></RouterLink>
        </v-btn>
    </div>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions">Acciones</th>
            </tr>
        </thead>
        <tbody>

            <tr class="list-group" id="name" v-for="(listOfLogicalTest, id) in data" :key="id">
                <td>{{listOfLogicalTest.name}}</td>
                <td>{{listOfLogicalTest.statement}}</td>
                <td>{{listOfLogicalTest.result}}</td>
                <br>
                <td>
                    <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues" hide-details>
                    </v-checkbox>
                </td>
                <td>
                    <button @click="deleteCode(listOfLogicalTest.id)" class="btn btn-danger">
                    </button>
                </td>
                <br>
                <td>
                    <v-btn icon="mdi-pencil" color="dark">
                        <router-link :to="{ name: 'codeeditoredit', params: { id: listOfLogicalTest.id }}">edit </router-link>
                    </v-btn>
                </td>
            </tr>

        </tbody>
        <!-- <div class="mt-2">
                <button :disabled="!data.previous" class="btn btn-success me-2" @click="getDataCoder(data.previous)">
                    Previous
                </button>
                <button :disabled="!data.next" class="btn btn-primary" @click="getDataCoder(data.next)">
                    Next
                </button>
            </div>  -->
    </v-table>
    <v-btn icon="mdi-file-plus" color="orange darken-3">
        <RouterLink to="/paneladmin"><a class="text-link">Back</a></RouterLink>
    </v-btn>
</template> 
    
    
    
  
<style scoped>
.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}

.table {
    border: 1px solid rgba(255, 71, 2, 0.58);
}
</style>
    


   