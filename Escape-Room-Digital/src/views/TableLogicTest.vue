<script>
import axios from "axios";
export default {
data(){
    return {
        data: [],
        dialog:false,
        operacion:'',
        listOfLogicalTest:{
            id:null,
            name:"",
            statement:"",
            question:"",
            result:"",
            clue:"",
            image:"",

        }

        
    }
},

created() {
    this.mostrar()
},
methods: {
    mostrar() {
        axios.get("http://127.0.0.1:8000/api/logictest/").then(response =>{
            this.data = response.data;

        });
    },
    crear(){
        const parametros = {name: this.listOfLogicalTest.name, statement: this.listOfLogicalTest.statement, question: this.listOfLogicalTest.question,result: this.listOfLogicalTest.result, clue: this.listOfLogicalTest.clue, image: this.listOfLogicalTest.image,}
        axios.post("http://127.0.0.1:8000/api/logictest/create",parametros).then(response =>{
        
        this.mostrar();
    });
    this.listOfLogicalTest.name = "";
    this.listOfLogicalTest.statement = "";
    this.listOfLogicalTest.question = "";
    this.listOfLogicalTest.result = "";
    this.listOfLogicalTest.clue = "";
    this.listOfLogicalTest.image = "";
},
    editar(){
        const parametros = { id: this.listOfLogicalTest.id, name: this.listOfLogicalTest.name, statement: this.listOfLogicalTest.statement, question: this.listOfLogicalTest.question,result: this.listOfLogicalTest.result, clue: this.listOfLogicalTest.clue, image: this.listOfLogicalTest.image,}
        axios.patch("http://127.0.0.1:8000/api/logictest/update/{id}" + this.listOfLogicalTest.id ,parametros).then(response =>{
            this.mostrar();
        });
    },

    },
    borrar(id){
     axios.delete("http://127.0.0.1:8000/api/logictest/delete/").then(response =>{
     this.mostrar();
     });
    },
guardar(){
    if(this.operacion == 'crear'){
        this.crear();
    }
    if(this.operacion == 'editar'){
        this.editar();
}
},
fornmNuevo(){
    this.operacion = 'crear';
    this.operacion.name= "";
    this.operacion.statement= "";
    this.operacion.question= "";
    this.operacion.result = "";
    this.operacion.clue = "";
    this.operacion.image = "";

},
formEditar(id, name, statement, question, result, clue, image){

    this.listOfLogicalTest.id= id;
    this.listOfLogicalTest.name= name;
    this.listOfLogicalTest.statement= statement;
    this.listOfLogicalTest.question= question;
    this.listOfLogicalTest.result= result;
    this.listOfLogicalTest.clue= clue;  
    this.listOfLogicalTest.imagen= image;
    this.operacion = 'editar'
}
}




</script>


<template>

    <!-- <div>
        <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3" @click="useLogicTest.createTestlogic"></v-btn>
    </div> -->
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr class="list-group">
                <th id="name" v-for="listOfLogicalTest in data" :key="listOfLogicalTest.name"> 
                    
                    {{listOfLogicalTest.name}} 
                    





                    <v-btn-group>
                        <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues"
                            hide-details></v-checkbox>



                        <v-btn variant="text" @click="borrar(id)"  icon="mdi-delete" color="orange darken-3"></v-btn>




                        <v-btn variant="text"  @click="formEditar(listOfLogicalTest.id, listOfLogicalTest.name, listOfLogicalTest.statement, listOfLogicalTest.question, listOfLogicalTest.result, listOfLogicalTest.clue, listOfLogicalTest.image)" icon="mdi-pencil" color="dark"></v-btn>

                    </v-btn-group>




                </th>

            </tr>
                
        </tbody>
        <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-success me-2" method="delete" @click="getData(data.previous)">
                Previous
            </button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">
                Next
            </button>
        </div>
    </v-table>
</template>




<style scoped>
.header-list-rooms {
    background: rgba(255, 71, 2, 0.58);
}

/* .table{
    border: 1px solid rgba(255, 71, 2, 0.58);
} */
</style>

