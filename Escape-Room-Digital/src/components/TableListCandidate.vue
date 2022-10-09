
<script setup>
import { ref } from "vue";
import { useGetDataUser } from "../services/ServiceUser";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const { getDataUsers, data, errors, loading, deleteUser } = useGetDataUser();
const listOfUsers = getDataUsers();

const removeUser = async (id) => {
  await deleteUser(id);
  await getDataUsers();
}; 



</script>

<template>

    <div>
        <RouterLink to="/userscreated">
          <div id="button_create">
            <p id="text_create">Crear Escape Room</p>
          </div>
        </RouterLink>
      </div>

    <div class="container pt-3">
        

        <h1>Listado de Candidatos</h1>

        <v-table>
            <thead class="header-list-rooms" elevation="10">
                <tr>
                    <th id="">Nombre</th>
                    <th id="">Phone</th>
                    <th id="">email</th>
                    <th id="">promo</th>
                    <th id="">solution</th>
                    <th id="">solution</th>
                    <th id="">actions</th>
                </tr>
            </thead>
            <tbody v-for="(listOfUser, id) in data" :key="id" >

                <tr class="list-group" id="name">
                    <td class="m-1 p-1">{{listOfUser.name}}</td>
                    <td class="m-1 p-1">{{listOfUser.phone}}</td>
                    <td class="m-1 p-1">{{listOfUser.email}}</td>
                    <td class="m-1 p-1">{{listOfUser.promo}}</td>
                    <td class="m-1 p-1">{{listOfUser.solution}}</td>
                    <td class="m-2 p-1">{{listOfUser.testdone}}</td>


                    <div>
                        <v-btn class="m-2" color="orange" dark>Seleccionar</v-btn>
                        <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="removeUser(listOfUser.id)"></v-btn>
                       <!--  <button @click="deletesId(user.id)" class="btn btn-sm btn-danger btn-delete-user" :disabled="user.isDeleting">
                            <span v-if="user.isDeleting" class="spinner-border spinner-border-sm"></span>
                            <span v-else>Delete</span>
                        </button> -->
                    </div>

                </tr>

            </tbody>
  
        </v-table>

        <RouterLink to="/paneladmin">

            <v-btn class="btn btn-success"> BACK </v-btn>

        </RouterLink>

    </div>
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
    justify-content: space-evenly;

}




</style>