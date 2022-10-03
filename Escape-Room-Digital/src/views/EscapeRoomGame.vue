<script >
export default {
    data() {
        return {
            myToggle: false,
            buttons: [
                { caption: 'Toggle 1', state: true },
                { caption: 'Toggle 2', state: false },
                { caption: 'Toggle 3', state: true },
                { caption: 'Toggle 4', state: false }
            ]
        }
    },
    computed: {
        btnStates() {
            return this.buttons.map(btn => btn.state)
        }
    }
}
</script>



<template>
    <v-card class="mx-auto my-12 backgroud-color rounded-lg " max-width="674">

        <v-card-title class="text-center background-title">Prueba Logica 1</v-card-title>


        <template>
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>



        <v-card-text>


            <div class="my-4 text-subtitle-1 text-center">El caracol que cayó en el pozo</div>

            <div>
                <p class="text-center">Un caracol cayó en un pozo de 15 metros. Cada día logra subir 3 metros, pero cada
                    noche vuelve a caer 2.</p>
            </div>
        </v-card-text>
        <v-img height="250" src="https://image.ondacero.es/clipping/cmsimages01/2016/05/15/6726F9F8-B36F-473F-8CF4-70F85E187F55/58.jpg"></v-img>


        <v-divider class="mx-4"></v-divider>

        <div>
            <p class="text-center">¿Cuánto tiempo demorará el caracol en salir del pozo?</p>
        </div>



      
    </v-card>
</template>

<style scoped>
.background-title {
    margin-bottom: 20px;
    background: #FF4702;
}

.backgroud-color{
    background: rgba(0, 0, 0, 0.8);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);  
}
.text-center {
    color: aliceblue;
}

</style>
