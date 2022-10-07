
<script setup>
import { ref, onMounted, computed } from 'vue';
//import users store
import { useUserStore } from "../stores/serviceUser";
// declare store variable
const store = useUserStore();

const getUsers = computed(() => {
    return store.getUsers
})

onMounted(() => {
    store.fetchUsers();
    store.checkLoggedInStatus();
})

</script>

<template>

    <h1>Listado de Candidatos</h1>
    <div>
        <RouterLink to="/codeeditorcreate">
            <div id="button_create">
                <!-- <v-btn variant="text" icon="mdi-plus-thick" color="blue darken-3" class="mt-2"></v-btn> -->
                <p id="text_create"></p>
            </div>
        </RouterLink>

    </div>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions">actions</th>
            </tr>
        </thead>
        <tbody>

            <tr class="list-group" id="name" v-for='gettersUser in getUsers' :key='gettersUser.id'>
                <td class="m-2 p-1">{{gettersUser.name}}</td>
                <div class="m-1">
                    <v-btn class="m-1" color="orange" dark>Seleccionar</v-btn>
                    <v-btn icon="mdi-alpha-x" class="delete btn btn-danger m-1" color="red"></v-btn>
                </div>

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

    <RouterLink to="/paneladmin">

        <v-btn class="btn btn-success"> BACK </v-btn>


    </RouterLink>

</template>

<style scoped>
.header-list-rooms {

    background: rgba(255, 71, 2, 0.58);
}

tr {
    width: 80vw;


}

svg {
    margin-top: 1vh;
}

.table {
    border: 1px solid rgba(255, 71, 2, 0.58);
}

.list-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

#button_create {
    display: flex;
}

#text_create {
    margin-top: 2vh;
    color: black;
    font-size: 2vh;
}
</style>