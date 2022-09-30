<template>
    <div class="text-danger" v-if="errors.length !== 0">
        <ul>
            <li v-for="(err, index) in errors" :key="index">
                {{err}}
            </li>
        </ul>
    </div>


    <div class="container" style="width: 400px">
        <h2>Create Logic Test</h2>
        <form @submit.prevent="saveLogic">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" name="title" id="title" class="form-control" v-model="form.name" required />
            </div>

            <div class="form-group">
                <label for="statement">statement</label>
                <input type="text" name="director" id="director" class="form-control" v-model="form.statement"
                    required />
            </div>
            <div class="form-group">
                <label for="question">Question</label>
                <input type="text" name="director" id="director" class="form-control" v-model="form.question"
                    required />
            </div>
            <div class="form-group">
                <label for="result">result</label>
                <input type="text" name="director" id="director" class="form-control" v-model="form.result" required />
            </div>

            <div class="form-group">
                <label for="clue">clue</label>
                <input type="text" name="clue" id="director" class="form-control" v-model="form.clue" required />
            </div>
            <div class="form-group">
                <label for="clue">image</label>
                <input type="text" name="image" id="director" class="form-control" v-model="form.image" required />
            </div>
            <br>
            <RouterLink :to="{ name: 'tablelogictest' }" class="btn btn-primary">
                Back
            </RouterLink>
            <br>
            <button type="submit" class="btn btn-success">Create</button>
        </form>
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