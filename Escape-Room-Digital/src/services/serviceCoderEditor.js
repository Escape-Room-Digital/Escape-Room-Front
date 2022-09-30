import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router'

export const useGetDataCoderEditor = () => {
    const data = ref([]);// just one 
    /* const datas = ref([]);// just varius  */
    const errors = ref([]);
    const loading = ref(true);
    const router = useRouter()

    const getDataCoder = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/codeeditor");
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            errors.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    }

    const getcoder = async (id) => {
        let response = await http.get(`http://127.0.0.1:8000/api/codeeditor/show/${id}`);
        data.value = response.data
    }


    const storeCoder = async (data) => {
        errors.value = []
        try {
            await axios.post('http://127.0.0.1:8000/api/codeeditor/store/', data)
            await router.push({ name: 'tablecodereditor' })
        } catch (e) {
            if (e.response.status === 400) { //Bad request, for validation in .net core

                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }

    }

    const updateCoder = async (id) => {
        errors.value = [];
        try {
            // http method must be put for match patch method in .net core api
            await axios.patch(`http://127.0.0.1:8000/api/codeeditor/update/${id}`, data.value)
            await router.push({ name: 'tablecodereditor' })
        } catch (e) {
            if (e.response.status === 400) { //Bad request, for validation

                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }

    const destroyCoder = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/codeeditor/delete/${id}`, data.value)
    }




    return {
        getDataCoder,
        getcoder,
        data,
        loading,
        errors,
        storeCoder,
        updateCoder,
        destroyCoder
    };
};





