<script setup>
//imports
import { ref } from "vue";
import { useGetDataEscapeRoom } from "../services/serviceEscapeRoom";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const { getDataEscapeRoom, data, errors, loading, deleteEscapeRoom } = useGetDataEscapeRoom();
const togglePushId = () => {
  router.push("/tablelogictest");
};

 const removeEscapeRoom = async (id) => {
  if (!window.confirm("You sure?")) {
    return;
  }
  await deleteEscapeRoom(id);
  await getDataEscapeRoom();
}; 

const selection = async (id) => {
    data.value = data.value.filter((item) => item.id !== id);
    console.log(id);
}



const catchIdEscapeRoom = (getDataEscapeRoom) => {
  const add = (getDataEscapeRoom) => {
    getDataEscapeRoom.value.push(getDataEscapeRoom);
  };
  console.log(getDataEscapeRoom);
  return {
    catchIdEscapeRoom,
    add,
    getDataEscapeRoom,
  };
};



const select = ref(true);
const deletes = ref(true);




const listOfLogicalTest = getDataEscapeRoom();
/* console.log(listOfLogicalTest); */
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
      <tr class="list-group" id="name" v-for="(listOfLogicalTest, id) in data" :key="id">
        <td>{{ listOfLogicalTest.name }}</td>
        <!-- <td>{{listOfLogicalTest.statement}}</td>
            <td>{{listOfLogicalTest.result}}</td> -->
        <div>
          <v-btn class="ma-2" color="orange" @click="
            togglePushId();
            catchIdEscapeRoom(listOfLogicalTest.id);
          ">Seleccionar</v-btn>

          <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="removeEscapeRoom(id)">
          </v-btn>

          <router-link :to="{
            name: 'codeeditoredit',
            params: { id: listOfLogicalTest.id },
          }">
            <v-btn icon="mdi-pencil" color="darken-3"></v-btn>
          </router-link>
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
