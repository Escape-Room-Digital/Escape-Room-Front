import axios from "axios";
import { ref } from "vue";

export const useGetDataCoderEditor = () => {
    const data = ref(null); 
    const error = ref(null);
    const loading = ref(true);

    const getDataCoder = async () => {
        loading.value = true;
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/codeeditor");
            data.value = await res.data;
        } catch (e) {
            // console.log(e);
            error.value = "Error de servidor";
        } finally {
            loading.value = false;
        }
    };

    return {
        getDataCoder,
        data,
        loading,
        error,
    };
};