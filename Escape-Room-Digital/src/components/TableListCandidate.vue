
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
            <p id="text_create">Crear Usuarios</p>
          </div>
        </RouterLink>
      </div>

    <div class="container pt-3">
        

        <h1>Listado de Usuarios</h1>

        <v-table>
            <thead class="header-list-rooms" elevation="10">
                <tr>
                    <th id="">Datos</th>
                    <th id="">actions</th>
                </tr>
            </thead>
            <tbody v-for="(listOfUser, id) in data" :key="id" >

                <tr class="list-group" id="name">
                    <td class="m-1 p-1">{{listOfUser.name}}</td>
                    <td class="m-1 p-1">{{listOfUser.phone}}</td>
                    <td class="m-1 p-1">{{listOfUser.email}}</td>
                    <td class="m-1 p-1">{{listOfUser.promo}}</td>
                    <div>
                       
                        <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="removeUser(listOfUser.id)"></v-btn>
                    </div>

                </tr>

            </tbody>
  
        </v-table>

        <RouterLink to="/loginadmin/paneladmin">

            <v-btn class="btn btn-success"> BACK </v-btn>

        </RouterLink>

    </div>
</template>

<style scoped>

@import "../assets/TableCandidate.css";
</style>