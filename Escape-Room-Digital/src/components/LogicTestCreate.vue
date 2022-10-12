<script>
import { useGetDataLogicTest } from "../services/serviceLogicTest";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      statement: "",
      question: "",
      correct: "",
      incorrect: "",
      clue: "",
      image: "",
    });

    const { storeLogic } = useGetDataLogicTest();

    const saveLogic = async () => {
      await storeLogic(form);
    };

    return {
      form,
      saveLogic,
    };
  },
};
</script>


<template>
  <div class="container">
    <div class="container_orange">

      <h2>CREAR PRUEBA DE LÓGICA</h2>
      <form class="container_white" @submit.prevent="saveLogic">
        <div class="form-group">
          <label for="name" id="label">Nombre</label>
          <input type="text" name="title" id="title" class="form-control" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="statement">Statement</label>
          <input type="text" name="director" id="director" class="form-control" v-model="form.statement" required />
        </div>
        <div class="form-group">
          <label for="question">Question</label>
          <input type="text" name="director" id="director" class="form-control" v-model="form.question" required />
        </div>
        <div class="form-group">
          <label for="result">Correct</label>
          <input type="text" name="director" id="director" class="form-control" v-model="form.correct" required />
        </div>
        <div class="form-group">
          <label for="result">Incorrect</label>
          <input type="text" name="director" id="director" class="form-control" v-model="form.incorrect" required />
        </div>
        <div class="form-group">
          <label for="clue">Clue</label>
          <input type="text" name="clue" id="director" class="form-control" v-model="form.clue" required />
        </div>
        <div class="form-group">
          <label for="clue">Image</label>
          <input type="text" name="image" id="director" class="form-control" v-model="form.image" required />
        </div>
        <br />


        <button type="submit" class="btn btn-dark">
          <p id="text_enviar">Enviar</p>
        </button>

      </form>
      >
      <div id="button_back">
        <RouterLink :to="{ name: 'tablelogictest' }" class="btn btn-dark">
          <p id="text_back">BACK</p>
        </RouterLink>
      </div>


    </div>
  </div>
</template>


<style scoped>
@import "../assets/LoginCreate.css";
</style>
