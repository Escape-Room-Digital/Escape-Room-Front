<script>
import { useGetDataCoderEditor } from "../services/serviceCoderEditor";
import { onMounted } from "vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { errors, data, getcoder, updateCoder } = useGetDataCoderEditor();

    onMounted(() => getcoder(props.id));

    const saveCode = async (data) => {
      await updateCoder(data.id, data);
    };

    return {
      errors,
      data,
      saveCode,
      getcoder,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="container_orange">
      <div class="container_white">
        <h2>EDITAR PRUEBA DE CÓDIGO</h2>
        <form @submit.prevent="saveCode">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              v-model="data.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="statement">Enunciado</label>
            <input
              type="text"
              name="statement"
              id="statement"
              class="form-control"
              v-model="data.statement"
              required
            />
          </div>
          <div class="form-group">
            <label for="result">Solucion</label>
            <input
              type="text"
              name="result"
              id="result"
              class="form-control"
              v-model="data.result"
              required
            />
          </div>
          <div id="button_back">
            <RouterLink :to="{ name: 'tablecodereditor' }" class="btn btn-dark">
              <p id="text_back">BACK</p>
            </RouterLink>
          </div>
          <div class="">
            <button type="submit" class="btn btn-dark">
              <p id="text_enviar">Enviar</p>
            </button>
          </div>
        </form>
      </div>
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
