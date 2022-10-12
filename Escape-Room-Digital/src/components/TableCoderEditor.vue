<script setup>
//imports
import { ref } from "vue";
import { useGetDataCoderEditor } from "../services/serviceCoderEditor";

const { getDataCoder, datas, errors, loading, destroyCoder } = useGetDataCoderEditor();
const select = ref(true);
const deletes = ref(true);

const deleteCode = async (id) => {
    if (!window.confirm("You sure?")) {
        return;
    }
    await destroyCoder(id);
    await getDataCoder();
};

getDataCoder();



</script>

<template>
    <h1>Listado de Pruebas de Codigo</h1>
    <div>
            <RouterLink to="/codeeditorcreate">
                <div id="button_create">

                        <p id="text_create">Crear Pruebas de Código</p>  
                </div>
            </RouterLink>
     
    </div>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions"></th>
            </tr>
        </thead>
        <tbody>
            <tr class="list-group" id="name" v-for="codeeditor in datas" :key="codeeditor">
                <td>{{codeeditor.name}}</td>
                <div>  
                         <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="deleteCode(codeeditor.id)"></v-btn>
                             <router-link :to="{ name: 'codeeditoredit', params: { id: codeeditor.id }}">
                                 <v-btn  icon="mdi-pencil" color="darken-3" ></v-btn>
                             </router-link>
                </div>
            </tr>
        </tbody>
    </v-table>
   
        <RouterLink to="/loginadmin/paneladmin">

            <v-btn class="btn btn-success" > BACK </v-btn>
        </RouterLink>
  
</template> 
    
    
    
  
<style scoped>
@import "../assets/TableCode.css";
</style>
    


   