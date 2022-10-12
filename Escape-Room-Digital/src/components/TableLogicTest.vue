<script setup>
//imports
import router from "@/router";
import { ref, onMounted } from "vue";
import { useGetDataLogicTest } from "../services/serviceLogicTest";
import { useEscapeAddLogicTestStore } from "../stores/addEscapeRoom"



const { getDataLogic, logicstests, logictest, errors, loading, destroyLogic, getlogic } = useGetDataLogicTest();
const select = ref(true);
const deletes = ref(true);

const deleteCode = async (id) => {
  if (!window.confirm("You sure?")) {
    return;
  }
  await destroyLogic(id);
  await getDataLogic();
};


const details = async (id) => {
  await getlogic ();
  console.log(id);
}

const storeAdd =  onMounted(useEscapeAddLogicTestStore())

onMounted(getDataLogic);

const listOfLogicalTest = getDataLogic();
</script>

<template>
  <h1>Listado de Pruebas de Lógica</h1>
  <div>
    <RouterLink to="/logictestcreate">
      <div id="button_create">
        <!-- <v-btn variant="text" icon="mdi-plus-thick" color="blue darken-3" class="mt-2"></v-btn> -->

        <p id="text_create">Crear Prueba Lógica.</p>
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
      <tr class="list-group" id="name" v-for=" logictest in logicstests" :key="logictest.id">
        <td>{{ logictest.name }}</td>
       
        <div>
          <v-btn class="ma-2" color="orange" @click="storeAdd()">Seleccionar</v-btn>

          <v-btn icon="mdi-alpha-x" class="delete btn btn-danger" color="red" @click="deleteCode(logictest.id)">
          </v-btn>
          <!-- <button id="margin" type="button" class="btn btn-success" @click="details(logictest.id)"> <RouterLink to="/details">detalles</RouterLink>  </button> -->
          <router-link :to="`/tablelogictest/${logictest.id}`">detalles</router-link>
          <router-link :to="{ name: 'logictestedit',  params: { id: logictest.id } }">
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

  <RouterLink to="/loginadmin/paneladmin">
    <v-btn class="btn btn-success"> BACK </v-btn>
  </RouterLink>
</template>

<style scoped>
.header-list-rooms {
  background: rgba(255, 71, 2, 0.58);
}

.table {
  border: 1px solid rgba(255, 71, 2, 0.58);
}

tr {
  width: 80vw;
}

svg {
  margin-top: 1vh;
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
