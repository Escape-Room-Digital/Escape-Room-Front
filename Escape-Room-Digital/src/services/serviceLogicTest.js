import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export const useGetDataLogicTest = () => {
    const data = ref([]); 
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter()

    const getDataLogic = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/logictest");
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }
    
    const getlogic = async (id) => {
        let response = await http.get(`http://127.0.0.1:8000/api/logictest/show/${id}`);
        data.value = response.data
    }

    const storeLogic = async (data) => {
        errors.value = []
        try {
            let options = {
                data: JSON.stringify({
                    name: "",
                    statement: "",
                    question: "",
                    result: "",
                    clue: "",
                    image: "",
                }),
            }
            await axios.post('http://127.0.0.1:8000/api/logictest/store/', options, data)
            await router.push({ name: 'tablelogictest' })
        } catch (e) {
            if (e.response.status === 400) { //Bad request, for validation in .net core
                
                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]) ;
                }
            }
        }

    }
    const updateLogic = async (id) => {
        errors.value = [];
        try {
            // http method must be put for match patch method in .net core api
            await axios.patch(`http://127.0.0.1:8000/api/logictest/update/${id}`, data.value)
            await router.push({ name: 'tablelogictest' })
        } catch (e) {
            if (e.response.status === 400) { //Bad request, for validation

                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }
    const destroyLogic = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/logictest/delete/${id}`, data.value)
    }

    

    return {
        getDataLogic,
        getlogic,
        data,
        loading,
        errors,
        storeLogic,
        updateLogic,
        destroyLogic
    };
};