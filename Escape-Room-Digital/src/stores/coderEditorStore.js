import { defineStore } from "pinia";
import axios from "axios";
import { useGetDataCoderEditor} from "../services/serviceCoderEditor"

export const useCodeEditorStore = defineStore('CoderEditor', (name,statement,result) => {
    const codeEditor = useGetDataCoderEditor();
    const createCoderEditor = async () => {
        try {
            let options = {
                method: "POST",
               /*  url: "http://localhost:8000/api/codeeditor/store/", */
                headers: {
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: "",
                    statement: "",
                    result: "",
                })
            }
            console.log(options);
            /*   location.reload(); */
    
    
        } catch (error) {
            /*    let message = error.statusText || "Ocurrió un error"; */
            /*  $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}: ${message}</b></p>`); */
            console.error(error);
        }
    };
    return { createCoderEditor }
});