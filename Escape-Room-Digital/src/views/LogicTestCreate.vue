<template>
  <!-- <div class="text-danger" v-if="errors.length !== 0">
    <ul>
      <li v-for="(err, index) in errors" :key="index">
        {{ err }}
      </li>
    </ul>
  </div>

  <div class="container" style="width: 400px">
    <div class="container_orange">
      <div class="container_white">
        <h2>Crear Prueba de Logica</h2>
        <form @submit.prevent="saveLogic">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              name="title"
              id="title"
              class="form-control"
              v-model="form.name"
              required
            />
          </div>

          <div class="form-group">
            <label for="statement">Statement</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="form.statement"
              required
            />
          </div>
          <div class="form-group">
            <label for="question">Question</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="form.question"
              required
            />
          </div>
          <div class="form-group">
            <label for="result">Result</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="form.result"
              required
            />
          </div>

          <div class="form-group">
            <label for="clue">Clue</label>
            <input
              type="text"
              name="clue"
              id="director"
              class="form-control"
              v-model="form.clue"
              required
            />
          </div>
          <div class="form-group">
            <label for="clue">Image</label>
            <input
              type="text"
              name="image"
              id="director"
              class="form-control"
              v-model="form.image"
              required
            />
          </div>
          <br />
          <RouterLink :to="{ name: 'tablelogictest' }" class="btn btn-primary">
            Back
          </RouterLink>

          <button type="submit" class="btn btn-success">Create</button>
        </form>
      </div>
    </div>
  </div> -->

  <div class="container">
    <div class="container_orange">
      <div class="container_white">
        <h2>CREAR PRUEBA DE LÓGICA</h2>
        <form @submit.prevent="saveLogic">
          <div class="form-group">
            <label for="name" id="label">Nombre</label>
            <input
              type="text"
              name="title"
              id="title"
              class="form-control"
              v-model="form.name"
              required
            />
          </div>

          <div class="form-group">
            <label for="statement">Statement</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="form.statement"
              required
            />
          </div>
          <div class="form-group">
            <label for="question">Question</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="form.question"
              required
            />
          </div>
          <div class="form-group">
            <label for="result">Result</label>
            <input
              type="text"
              name="director"
              id="director"
              class="form-control"
              v-model="form.result"
              required
            />
          </div>

          <div class="form-group">
            <label for="clue">Clue</label>
            <input
              type="text"
              name="clue"
              id="director"
              class="form-control"
              v-model="form.clue"
              required
            />
          </div>
          <div class="form-group">
            <label for="clue">Image</label>
            <input
              type="text"
              name="image"
              id="director"
              class="form-control"
              v-model="form.image"
              required
            />
          </div>
          <br />
        </form>
      </div>
      <RouterLink :to="{ name: 'tablelogictest' }" class="btn btn-dark">
        <p id="text_back">BACK</p>
      </RouterLink>
      <div class="">
        <button type="submit" class="btn btn-dark"><p id="text_enviar">Enviar</p></button>
      </div>
    </div>
  </div>
</template>

<script>
import { useGetDataLogicTest } from "../services/serviceLogicTest";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      statement: "",
      question: "",
      result: "",
      clue: "",
      image: "",
    });

    const { errors, storeLogic } = useGetDataLogicTest();

    const saveLogic = async () => {
      await storeLogic({ ...form });
    };

    return {
      form,
      errors,
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
H2{
    display: flex;
    justify-content: center;;
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
#text_back{
    color: #ff4702;
}
</style>
