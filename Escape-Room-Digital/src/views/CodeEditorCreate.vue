<template>
    <div class="text-danger" v-if="errors.length !== 0">
        <ul>
            <li v-for="(err, index) in errors" :key="index">
                {{err}}
            </li>
        </ul>
    </div>


    <div class="container" style="width: 400px">
        <h2>Create Coder Editor</h2>
        <form @submit.prevent="saveCode">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" name="name" id="name" class="form-control" v-model="form.name" required />
            </div>

            <div class="form-group">
                <label for="statement">statement</label>

                <input type="text" name="director" id="director" class="form-control" v-model="form.statement"
                    required />
            </div>
            <div class="form-group">
                <label for="result">result</label>

                <input type="text" name="director" id="director" class="form-control" v-model="form.result" required />
            </div>
            <router-link :to="{ name: 'tablecodereditor' }" class="btn btn-primary">
                Back
            </router-link>
            |
            <button type="submit" class="btn btn-success">Create</button>
        </form>
    </div>
</template>
  
  
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

        const { errors, storeCoder } = useGetDataCoderEditor();

        const saveCode = async () => {
            await storeCoder({ ...form });
        };

        return {
            form,
            errors,
            saveCode,
        };
    },
};
</script>