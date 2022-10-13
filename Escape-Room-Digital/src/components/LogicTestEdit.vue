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
@import "../assets/LogicEdit.css";
</style>
