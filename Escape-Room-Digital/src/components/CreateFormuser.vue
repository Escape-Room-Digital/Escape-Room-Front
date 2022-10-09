<script>
import { useGetDataUser } from "../services/ServiceUser";
import { reactive } from "vue";

export default {
    setup() {
        const form = reactive({
            name: "",
            phone: "",
            email: "",
            promo: "",
            solution: "",
            testdone: "",

        });

        const { createUser } = useGetDataUser();

        const saveUser = async () => {
            await createUser(form);
        };

        return {
            form,
            saveUser,
        };
    },
};

</script>



<template fluid >
    <h2>CREAR CANDIDATOS</h2>

    <div class="container_all">
        <br>
        <div class="container_orange_escaperoom_create " width="856px">
            <br><br><br>
            <form method="POST" class="container_white_escaperoom_create" @submit.prevent="saveUser">
                <div class="form-group">
                    <label for="name" id="label">Nombre</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Nombre" v-model="form.name"
                        required />
                    <label for="phone" id="label">Telefono</label>
                    <input type="phone" name="phone" id="name" class="form-control" placeholder="telefono"
                        v-model="form.phone" required />
                    <label for="email" id="label">Correo</label>
                    <input type="email" name="email" id="name" class="form-control" placeholder="Correo" v-model="form.email"
                        required />
                    <label for="promo" id="label">Promo</label>
                    <input type="text" name="prom" id="name" class="form-control" placeholder="Promocion"
                        v-model="form.promo" required />
                    <label for="solution" id="label">solucion logica</label>
                    <input type="text" name="solution" id="name" class="form-control" placeholder="Solucion"
                        v-model="form.solution" required />
                    <label for="testdone" id="label">Test Done</label>
                    <input type="text" name="textDone" id="name" class="form-control" placeholder="Text Done"
                        v-model="form.testdone" required />
                </div>
                <button type="submit" class="btn btn-dark">
                    enviar
                </button>
            </form>
            <div id="container_buttons_create">
                <div id="button_back">
                    <RouterLink :to="{ name: 'tablelistcandidate' }" class="btn btn-dark">
                        <p id="text_back">BACK</p>
                    </RouterLink>
                </div>
            </div>

        </div>
    </div>


</template>
  
<style scoped>
#container_buttons_create {
    display: flex;
}

.container_all {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.container_white_escaperoom_create {
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

.container_orange_escaperoom_create {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff4702;
    width: 100vh;
    height: 60vh;
    margin: 2vh;
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