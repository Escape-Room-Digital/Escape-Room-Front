<script setup >
import { ref, onMounted, computed } from 'vue';
//import users store
import { useEscapeStore } from "../stores/useEscapeGameStore";
// declare store variable
const store = useEscapeStore();

const getEscapes = computed(() => {
    return store.getEscapes;
})



onMounted(() => {
    store.fetchEscapes();
    const dialog = false;
})



</script>



<template>
    <v-card class="mx-auto my-12 backgroud-color rounded-lg" max-width="674" v-for="gettersEscape in getEscapes"
        :key="gettersEscape.id">

        <v-card-title class="text-center background-title">Prueba Logica 1</v-card-title>

        <v-card-text>
            <div class="my-4 text-subtitle-1 text-center">{{gettersEscape.name}}</div>
            <div>
                <p class="text-center">{{gettersEscape.statement}}</p>
            </div>
        </v-card-text>
        <v-img height="250" :src="gettersEscape.image"></v-img>
        <v-divider class="mx-4"></v-divider>
        <div>
            <p class="text-center">{{gettersEscape.question}}</p>
        </div>
    </v-card>

<!-- Modal -->
    <v-btn icon="mdi-" color="orange" dark @click.stop="dialog = true">
        Pista
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                Use Google's location service?
            </v-card-title>

            <v-card-text>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when
                no apps are running.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" text @click="dialog = true">
                    Disagree
                </v-btn>

                <v-btn color="green darken-1" text @click="dialog = false">
                    Agree
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<style scoped>
.background-title {
    margin-bottom: 20px;
    background: #FF4702;
}

.backgroud-color {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
}

.text-center {
    color: aliceblue;
}
</style>
