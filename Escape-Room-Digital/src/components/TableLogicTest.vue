<script setup>
    //imports
    import { ref } from "vue";
    import { useGetDataLogicTest} from "../services/serviceLogicTest";
    
    
    
    const { getDataLogic, data, errors, loading } = useGetDataLogicTest();
    const select = ref(true);
    const deletes = ref(true);
    
    
    
    const listOfLogicalTest = getDataLogic();
    
    
    </script>
    
    <template>
    
        <div>
            <v-btn variant="text" icon="mdi-file-plus" color="orange darken-3" ><RouterLink to="/logictestcreate"><a class="text-link">create</a></RouterLink></v-btn>
        </div>
        <v-table fluid>
            <thead class="header-list-rooms" elevation="10">
                <tr>
                    <th id="names">Nombre</th>
                    <br>
                    <th id="statement">statement</th>
                    <br>
                    <th id="question">question</th>
                    <br>
                    <th id="result">result</th>
                    <th id="clue">clue</th>
                    <th id="actions">Acciones</th>
                </tr>
            </thead>
            <tbody>
    
                <tr class="list-group" id="name" v-for="(listOfLogicalTest, name) in data" :key="name">
                    <td>{{listOfLogicalTest.name}}</td>
                    <td>{{listOfLogicalTest.statement}}</td>
                    <td>{{listOfLogicalTest.question}}</td>
                    <td>{{listOfLogicalTest.result}}</td>
                    <td>{{listOfLogicalTest.clue}}</td>
                    <td>{{listOfLogicalTest.image}}</td>
                    
                    <br>
                    <td>
                        <v-checkbox class="text-rigth" v-model="select" color="orange darken-3" value="trues" hide-details>
                        </v-checkbox>
                    </td>
                    <td>
                        <v-btn variant="text" icon="mdi-delete" class="delete" color="orange darken-3" @click="deletes">
                        </v-btn>
                    </td>
                    <br>
                    <td>
                        <v-btn variant="text" icon="mdi-pencil" color="dark" @click="editCoderEditor"></v-btn>
                    </td>
                </tr>
    
            </tbody>
             <!-- <div class="mt-2">
                    <button :disabled="!data.previous" class="btn btn-success me-2" @click="getDataCoder(data.previous)">
                        Previous
                    </button>
                    <button :disabled="!data.next" class="btn btn-primary" @click="getDataCoder(data.next)">
                        Next
                    </button>
                </div>  -->
      </v-table> 

      <v-btn  icon="mdi-file-plus" color="orange darken-3" ><RouterLink to="/paneladmin"><a class="text-link">Back</a></RouterLink></v-btn>
     </template> 
        
        
        
      
    <style scoped>
    .header-list-rooms {
        background: rgba(255, 71, 2, 0.58);
    }
    
    .table{
            border: 1px solid rgba(255, 71, 2, 0.58);
        } 
    </style>
        
    
    
       