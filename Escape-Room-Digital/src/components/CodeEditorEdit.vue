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

    const saveCode = async () => {
      await updateCoder(props.id);
    };

    return {
      errors,
      data,
      saveCode,
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
        </form>
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
    </div>
  </div>
</template>


<style scoped>
@import "../assets/CoderEditorEdit.css";
</style>
