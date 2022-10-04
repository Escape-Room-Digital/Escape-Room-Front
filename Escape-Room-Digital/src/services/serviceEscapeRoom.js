import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router';


export const useGetDataEscapeRoom = () => {
    const data = ref([]); 
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter();
    

    const getDataLogic = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/escaperoom");
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }
    const getlogic = async (id) => {
        let response = await http.get(`http://127.0.0.1:8000/api/escaperoom/${id}`);
        data.value = response.data
    }
    
    return {
        getDataLogic,
        getlogic,
        data,
        loading,
        errors,
      
    };
}