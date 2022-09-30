import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export const useGetDataLogicTest = () => {
    const data = ref(null); 
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
            await axios.post('http://127.0.0.1:8000/api/logictest/store/', options)
            await router.push({ name: 'tablelogictest' })
        } catch (e) {
            if (e.response.status === 400) { //Bad request, for validation in .net core
                
                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]) ;
                }
            }
        }

    }

    

    return {
        getDataLogic,
        data,
        loading,
        errors,
        storeLogic
    };
};