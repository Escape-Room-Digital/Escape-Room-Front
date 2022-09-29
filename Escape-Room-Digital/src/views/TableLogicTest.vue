<script setup >
//imports
import {ref} from "vue";
import axios from "axios";
 
// const select= ref(true);

// let url = "http://127.0.0.1:8000/api/logictest"

//  const useGetDataLogicTest = () => {
//     const json = ref(null);
//      const error = ref(null);
//      const loading = ref(true);

//     const getDataLogic = async () => {
//         try {
//             const res = await axios.get(url),
//             json = await res.data;
//             console.log(json);
//         } catch (e) {
//             // console.log(e);
//             error.value = "Error de servidor";
//         } finally {
//             loading.value = false;
//         }
//     };

// };


// useGetDataLogicTest()

// export default {
// data(){
//     return {
//         data: [],
//         dialog:false,
//         operacion:'',
//         listOfLogicalTest:{
//             id:null,
//             name:"",
//             statement:"",
//             question:"",
//             result:"",
//             clue:"",
//             image:"",

//         }

        
//     }
// },

// created() {
//     this.mostrar()
// },

// methods: {

//     mostrar() {
//         axios.get("http://127.0.0.1:8000/api/logictest/").then(response =>{
//             this.data = response.data;

//         });
//     },
//     crear(){
//         const parametros = {name: this.listOfLogicalTest.name, statement: this.listOfLogicalTest.statement, question: this.listOfLogicalTest.question,result: this.listOfLogicalTest.result, clue: this.listOfLogicalTest.clue, image: this.listOfLogicalTest.image,}
//         axios.post("http://127.0.0.1:8000/api/logictest/create",parametros).then(response =>{
        
//         this.mostrar();
//     });
//     this.listOfLogicalTest.name = "";
//     this.listOfLogicalTest.statement = "";
//     this.listOfLogicalTest.question = "";
//     this.listOfLogicalTest.result = "";
//     this.listOfLogicalTest.clue = "";
//     this.listOfLogicalTest.image = "";
// },
//     editar(){
//         const parametros = { id: this.listOfLogicalTest.id, name: this.listOfLogicalTest.name, statement: this.listOfLogicalTest.statement, question: this.listOfLogicalTest.question,result: this.listOfLogicalTest.result, clue: this.listOfLogicalTest.clue, image: this.listOfLogicalTest.image,}
//         axios.patch("http://127.0.0.1:8000/api/logictest/update/{id}" + this.listOfLogicalTest.id ,parametros).then(response =>{
//             this.mostrar();
//         });
//     },

//     },
//     borrar(id){
//      axios.delete("http://127.0.0.1:8000/api/logictest/delete/").then(response =>{
//      this.mostrar();
//      });
//     },
// guardar(){
//     if(this.operacion == 'crear'){
//         this.crear();
//     }
//     if(this.operacion == 'editar'){
//         this.editar();
// }
// },
// fornmNuevo(){
//     this.operacion = 'crear';
//     this.operacion.name= "";
//     this.operacion.statement= "";
//     this.operacion.question= "";
//     this.operacion.result = "";
//     this.operacion.clue = "";
//     this.operacion.image = "";

// },
// formEditar(id, name, statement, question, result, clue, image){

//     this.listOfLogicalTest.id= id;
//     this.listOfLogicalTest.name= name;
//     this.listOfLogicalTest.statement= statement;
//     this.listOfLogicalTest.question= question;
//     this.listOfLogicalTest.result= result;
//     this.listOfLogicalTest.clue= clue;  
//     this.listOfLogicalTest.imagen= image;
//     this.operacion = 'editar'
// }
// }


    const useGetData = () => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(true);

    const getData = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/logictest");
            data.value = res.data;
        } catch (e) {
            // console.log(e);
            error.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    };

    return {
        useGetData,
        getData,
        data,
        loading,
        error,
    }

    
};

</script>
    
    


<template>

    <div>
        <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3"></v-btn>
    </div>
    <v-table fluid>
        <thead class="header-list-rooms" elevation="10">
            <tr>
                <th id="names">Nombre</th>
                <th id="actions">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr class="list-group">
                <th id="name" v-for="listOfLogicalTest in data"> {{listOfLogicalTest.name}} <v-btn-group>
                        <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues"
                            hide-details></v-checkbox>
                        <v-btn variant="text" icon="mdi-delete" color="orange darken-3"></v-btn>
                        <v-btn variant="text" icon="mdi-pencil" color="dark"></v-btn>
                    </v-btn-group>
                </th>

            </tr>
                
        </tbody>
        <!-- <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">
                Previous
            </button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">
                Next
            </button>
        </div> -->
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

