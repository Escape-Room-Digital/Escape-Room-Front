import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router';


export const useGetDataEscapeRoom = () => {
    const data = ref([]); 
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter();
    

    const getDataEscapeRoom = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/escaperoom"); // show
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }

    const createEscapeRoom = async (data) => {
        loading.value = true;
        try {
            await axios.post("http://127.0.0.1:8000/api/escaperoom/store/", data); 
            await router.push({name: 'tablerooms'})
            /* data.value = await res.data; */
            console.log(data.value);
    }catch (e) {
        // console.log(e);
        errors.value = "Error de servidor"; 
    }
}

    const getescaperoom = async (id) => {
        let response = await http.get(`http://127.0.0.1:8000/api/escaperoom/${id}`);
        data.value = response.data
    };


    const deleteEscapeRoom = async (id) => {
        let res = await axios.delete(`http://127.0.0.1:8000/api/escaperoom/delete/${id}`);
    }
    
    return {
        getDataEscapeRoom,
        getescaperoom,
        data,
        loading,
        errors,
        createEscapeRoom,
        deleteEscapeRoom     
    }
}

