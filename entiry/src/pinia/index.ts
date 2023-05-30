import { defineStore } from "pinia";
export const testData = defineStore('test', {
    state: () => {
        return {
            name: '树哥',
            age: 18
        }
    }
})

// export default {
//     useUserStore,
//     testData
// }