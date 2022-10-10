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


/* const catchIdEscapeRoom = (getDataEscapeRoom) => {
  const add = (getDataEscapeRoom) => {
    getDataEscapeRoom.value.push(getDataEscapeRoom);
  };
  console.log(getDataEscapeRoom);
  return {
    catchIdEscapeRoom,
    add,
    getDataEscapeRoom,
  };
}; */



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
        <!-- <td>{{listOfLogicalTest.statement}}</td>
            <td>{{listOfLogicalTest.result}}</td> -->
        <div>
          <v-btn class="ma-2" color="orange" @click="
            togglePushId();
            storeAdd();
          ">Seleccionar</v-btn>
          <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="removeEscapeRoom(listOfEscapeRoom.id)">
          </v-btn>
          <v-btn color="blue" @click="selection1(listOfEscapeRoom.id)">habilitar</v-btn>
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
