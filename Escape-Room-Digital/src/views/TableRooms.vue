<template>
    <v-table elevation="10" >
        <thead class="header-list-rooms">
            <tr>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Escape-room-promo-asturias</th>
                <v-spacer></v-spacer>
                <v-btn-group class="text-center">
                    <v-switch row v-model="switch1" :label="` ${switch1.toString()}`" color="orange darken-3"
                    value="habilitado" hide-details inlineblock></v-switch>
                    <v-spacer></v-spacer>
                <v-btn class="ma-2" variant="text" icon="mdi-delete" color="orange darken-3"></v-btn>
                </v-btn-group>
                
            </tr>
        </tbody>
    </v-table>
</template>

<script>

export default {
    data() {
        return {
            switch1: false,
        }
    },
}
</script>


<style scoped>

.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}
</style>