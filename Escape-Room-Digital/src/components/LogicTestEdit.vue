<template>
  <div class="container">
    <div class="container_orange">
      <div class="container_white">
        <h2>EDITAR PRUEBA DE LÓGICA</h2>
        <form @submit.prevent="saveLogic">
          <div class="form-group">
            <label for="name" id="label">Nombre</label>
            <input type="text" name="title" id="title" class="form-control" v-model="listOfLogicalTest" required />
          </div>

          <div class="form-group">
            <label for="statement">Statement</label>
            <input type="text" name="director" id="director" class="form-control" v-model="form" required />
          </div>
          <div class="form-group">
            <label for="question">Question</label>
            <input type="text" name="director" id="director" class="form-control" v-model="form" required />
          </div>
          <div class="form-group">
            <label for="result">Result</label>
            <input type="text" name="director" id="director" class="form-control" v-model="form" required />
          </div>

          <div class="form-group">
            <label for="clue">Clue</label>
            <input type="text" name="clue" id="director" class="form-control" v-model="form" required />
          </div>
          <div class="form-group">
            <label for="clue">Image</label>
            <input type="text" name="image" id="director" class="form-control" v-model="form" required />
          </div>
          <br />
        </form>
      </div>
      <RouterLink :to="{ name: 'tablelogictest' }" class="btn btn-dark">
        <p id="text_back">BACK</p>
      </RouterLink>
      <div class="">
        <button type="submit" class="btn btn-dark">
          <p id="text_enviar">Enviar</p>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useGetDataLogicTest } from "../services/serviceLogicTest";
import { onMounted } from "vue";


export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { errors, logicstests, logictest, getlogic, updateLogic } = useGetDataLogicTest();

    onMounted(() => getlogic(props.id));

    const saveLogic = async () => {
      await updateLogic(props.id);
    };

    return {
      errors,
      data,
      saveLogic,
    };
  },




};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.container_white {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  width: 90vh;
  height: 70vh;
  margin: 2vh;
  border-radius: 8px;
}

H2 {
  display: flex;
  justify-content: center;
}

.container_orange {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff4702;
  width: 100vh;
  height: 80vh;
  margin: 2vh;
  border-radius: 8px;
}

.container_button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 20vh;
  height: 10vh;
  margin: 3vh;
  border-radius: 8px;
}

#text_enviar {
  font-size: 3vh;
  color: #ff4702;
}

.form-group {
  margin: 1vh;
}

#text_back {
  color: #ff4702;
}
</style>
