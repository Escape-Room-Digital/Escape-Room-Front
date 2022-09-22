<template>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10" >       
                <tr>
                    <th>Nombre</th>     
                    <th>Acciones</th>             
                </tr>       
        </thead>
       
            <tbody class="" elevation="10">
                
            <tr>
                <th>Ordena Números de Mayor a Menor</th>
                
                <v-spacer></v-spacer>
                <v-btn-group >
                    <v-checkbox class="text-rigth" v-model="select"  color="orange darken-3" value="trues" hide-details></v-checkbox>
                    <v-btn variant="text" icon="mdi-delete" color="orange darken-3"></v-btn>
                    <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                </v-btn-group>

            </tr>
                
        </tbody>
        
       
    </v-table>
</template>

<script>

export default {
    data() {
        return {
            select: ['trues'],
        }
    },
}
</script>


<style scoped>
.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}

/* .table{
    border: 1px solid rgba(255, 71, 2, 0.58);
} */
</style>

