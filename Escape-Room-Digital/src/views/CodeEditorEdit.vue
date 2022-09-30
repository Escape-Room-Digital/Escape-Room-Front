<template>
  <div class="text-danger" v-if="errors.length !== 0">
    <ul>
      <li v-for="(err, index) in errors" :key="index">
        {{err}}
      </li>
    </ul>
  </div>

  <div class="container" style="width: 400px">
    <h2>Edit Code Editor</h2>
    <form @submit.prevent="saveCode">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" class="form-control" v-model="data.name" required /></div>

      <div class="form-group">
        <label for="statement">statement</label>

        <input type="text" name="statement" id="statement" class="form-control" v-model="data.statement" required />
      </div>
      <div class="form-group">
        <label for="result">result</label>
        <input type="text" name="result" id="result" class="form-control" v-model="data.result" required />
      </div>
      <router-link :to="{ name: 'tablecodereditor' }" class="btn btn-primary">
        Back
      </router-link>
      |
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>
  
  
<script>
import { useGetDataCoderEditor } from "../services/serviceCoderEditor";
import { onMounted } from "vue";
import { data } from "browserslist";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { errors, data, getcoder,  updateCoder } = useGetDataCoderEditor();

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