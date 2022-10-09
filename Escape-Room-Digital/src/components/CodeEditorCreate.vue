<script>
import { useGetDataCoderEditor } from "../services/serviceCoderEditor";
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
      statement: "",
      result: "",
    });

    const { storeCoder } = useGetDataCoderEditor();

    const saveCode = async () => {
      await storeCoder(form);
    };

    return {
      form,
      saveCode,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="container_orange">
      <h2>CREAR PRUEBA DE CÓDIGO</h2>
      <form class="container_white" @submit.prevent="saveCode">
        <div class="form-group">
          <label for="name" id="label">Nombre</label>
          <input type="text" name="title" id="title" class="form-control" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="statement">Enunciado</label>
          <input type="textarea" name="director" id="director" class="form-control" v-model="form.statement" required />
        </div>

        <div class="form-group">
          <label for="result">Solución</label>
          <input type="text" name="director" id="director" class="form-control" v-model="form.result" required />
        </div>

        <br />

        <button type="submit" class="btn btn-dark">
          <p id="text_enviar">Enviar</p>
        </button>

      </form>
    </div>
    <div id="button_back">
      <RouterLink :to="{ name: 'tablecodereditor' }" class="btn btn-dark">
        <p id="text_back">BACK</p>
      </RouterLink>
    </div>
  </div>
</template>


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

#button_back {
  margin-bottom: 1vh;
}
</style>
