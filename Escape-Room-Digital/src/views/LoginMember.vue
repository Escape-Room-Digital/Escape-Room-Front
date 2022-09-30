<script>
export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>

<template>

<br />
<v-banner class=" mx-auto px-10 py-3 rounded-lg bg-dark text"  max-width="344"
  elevation="10"
  rounded
  tile
><h5 class="text-center">Iniciar Sesión</h5></v-banner>
<br />

    <v-card class="card-login mx-auto px-6 py-8 rounded-lg " max-width="344" elevation="5">
        <v-form v-model="form" @submit.prevent="onSubmit" class="text">
            <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2 bg-dark rounded-lg" clearable label="Email" >
            </v-text-field>

            <br />

            <v-text-field v-model="password" :readonly="loading" :rules="[required]" class="mb-2 bg-dark rounded-lg " clearable label="Password"
                placeholder="Enter your password"></v-text-field>

            <br />
            <v-row  justify="space-around">
            <v-btn :disabled="!form" :loading="loading" inlineblock color="dark" class=""  size="large" type="submit" elevation="4">
            <RouterLink to="/paneladmin"><a class="text">Acceder</a></RouterLink>
            </v-btn>

            <v-btn inlineblock color="dark"  size="large" type="submit" elevation="4" ><RouterLink to="/"><a class="text">Cancelar</a></RouterLink></v-btn></v-row>
            
        </v-form>
    </v-card>
</template>

<style scoped>
a {
    color: white;
}

#logear {
    width: 30vh;
}

.margin {
    padding: 1px;
}

.text{
    color:aliceblue;
    text-decoration: none;
    margin: auto;
    text-align: center;
}

.card-login {
    background-color: #FF4702;
}

</style>
