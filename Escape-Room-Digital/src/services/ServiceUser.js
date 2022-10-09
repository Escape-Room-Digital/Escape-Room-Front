import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router';


export const useGetDataUser = () => {
    const data = ref([]); 
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter();
    

    const getDataUsers = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/user"); 
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }

    const createUser = async (data) => {
        loading.value = true;
        try {
            await axios.get("http://127.0.0.1:8000/api/user/user/create/", data); 
            await router.push({name: 'tablelistcandidate'})
            /* data.value = await res.data; */
            console.log(data.value);
    }catch (e) {
        // console.log(e);
        errors.value = "Error de servidor"; 
    }
}

    const getUser = async (id) => {
        let response = await http.get(`http://127.0.0.1:8000/api/user/${id}/${adlist}`); // show
        data.value = response.data
    };


    const deleteUser = async (id) => {
        let res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    }
    
    return {
        getDataUsers,
        getUser,
        data,
        loading,
        errors,
        createUser,
        deleteUser     
    }
}

