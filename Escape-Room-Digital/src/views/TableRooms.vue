<script setup>
//imports
import { ref } from "vue";
import { useGetDataEscapeRoom } from "../services/serviceEscapeRoom";
import { useRouter, useRoute } from "vue-router";
const switch1 = ref(true);
const route = useRoute();
const router = useRouter();

// const getescaperoom = async (id) => {
//         const response = await http.get(`http://127.0.0.1:8000/api/escaperoom/${id}`);
//         data.value = response.data
//         return getescaperoom;
//     }


const togglePushId = () => { 

    router.push("/tablelogictest");
    
};



const hola = (getDataLogic,id) =>{

    const findId = (id) => getDataLogic.value.find((item)=>item.id == id);

    const add = (listOfLogicalTest) =>{
      
        getDataLogic.value.push(listOfLogicalTest);
    
}
console.log(getDataLogic,id)
return {
    findId,
    add,
    id,
    // getescaperoom,
    
}

    
    

}
const { getDataLogic, data, errors, loading, destroyLogic } =
  useGetDataEscapeRoom();
const select = ref(true);
const deletes = ref(true);

const deleteCode = async (id) => {
  if (!window.confirm("You sure?")) {
    return;
  }
  await destroyLogic(id);
  await getDataLogic();
};
const listOfLogicalTest = getDataLogic();
</script>

<template>
  <h1>listado escape rooms</h1>

  <div>
    <RouterLink to="/escaperoomcreate">
      <div id="button_create">
        <!-- <v-btn variant="text" icon="mdi-plus-thick" color="blue darken-3" class="mt-2"></v-btn> -->

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
      <tr
        class="list-group"
        id="name"
        v-for="(listOfLogicalTest, id) in data"
        
      >
        <td>{{ listOfLogicalTest.name }}</td>
        <!-- <td>{{listOfLogicalTest.statement}}</td>
            <td>{{listOfLogicalTest.result}}</td> -->
        <div>
          <v-btn class="ma-2" color="orange" @click="togglePushId();hola(id);">Seleccionar</v-btn>

          <v-btn
            icon="mdi-alpha-x"
            class="delete btn btn-danger"
            color="red"
            @click="deleteCode(listOfLogicalTest.id)"
          ></v-btn>

          <router-link
            :to="{
              name: 'codeeditoredit',
              params: { id: listOfLogicalTest.id },
            }"
          >
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
