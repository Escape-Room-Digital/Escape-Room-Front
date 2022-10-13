<script setup>
//imports
import { onMounted, ref } from "vue";
import { useEscapeAddLogicTestStore } from "../stores/addEscapeRoom"
import { useGetDataEscapeRoom } from "../services/serviceEscapeRoom";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const { getDataEscapeRoom, data, errors, loading, deleteEscapeRoom } = useGetDataEscapeRoom();

const listOfEscapeRoom = getDataEscapeRoom();

const storeAdd =  onMounted(useEscapeAddLogicTestStore())

//actions Crud
 const removeEscapeRoom = async (id) => {
  await deleteEscapeRoom(id);
  await getDataEscapeRoom();
}; 

const select = ref();

const togglePushId = () => {
  router.push("/tablelogictest");
};

</script>

<template>
  <h1>listado escape rooms</h1>

  <div>
    <RouterLink to="/escaperoomcreate">
      <div id="button_create">
        <p id="text_create">Crear Escape Room</p>
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
      <tr class="list-group" id="name" v-for="(listOfEscapeRoom, id) in data" :key="id">
        <td>{{ listOfEscapeRoom.name }}</td>
        <div>
          <v-btn class="ma-2" color="orange" @click="
            togglePushId();
            storeAdd();
          ">Seleccionar</v-btn>
          <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="removeEscapeRoom(listOfEscapeRoom.id)">
          </v-btn>
        </div>
      </tr>
    </tbody>
  </v-table>

  <RouterLink to="/loginadmin/paneladmin">
    <v-btn class="btn btn-success"> BACK </v-btn>
  </RouterLink>
</template>

<style scoped>
@import "../assets/TableLogic.css";
</style>
