import { defineStore } from "pinia";
// import { api } from "../services/serviceLogicTest";

export const useLogicTestStore = defineStore('TableRooms', () => {
    const createTestlogic = async (name) => {
        try {
            const res = await api({
                method: 'POST',
                url: '/store',
                data: {
                    name
                }
            })
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return { createTestlogic }
});