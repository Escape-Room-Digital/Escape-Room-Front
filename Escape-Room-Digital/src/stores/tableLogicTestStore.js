import { defineStore } from "pinia";
import axios from "axios";
import { serviceLogicTest } from "../services/serviceLogicTest";

export const useLogicTestStore = defineStore('TableRooms', () => {
    const createTestlogic = async () => {
        try {
            const res = await serviceLogicTest({
                method: 'POST',
                url: '/store',
                headers: {
                    "Content-type":"application/json;charset=utf-8"
                },
                data: {
                    name: "El caracol que cayó en el pozo 2",
                    statement: "Un caracol cayó en un pozo de 15 metros. Cada día logra subir 3 metros, pero cada noche vuelve a caer 2.",
                    question: "¿Cuánto tiempo demorará el caracol en salir del pozo?",
                    result: "15 días",
                    clue: "¿cuantos metros sube por dia?",
                    image: "https://demascotas.info/wp-content/uploads/2021/07/pexels-capriauto-8154117-scaled-e1625822522143.jpg"
                }
            })
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return { createTestlogic }
});



const createCoderEditor = async () => {
    try {
        let options = {
            method: "POST",
            url: "http://localhost:8000/api/codeeditor/store/",
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