import Vuex from 'vuex'
import { createApp } from 'vue'
import user from './modules/user.ts'

// const store: Object = {
//     state,
//     mutations,
//     actions
// }
const store = new Vuex.Store({
    modules: {
        user
    }
})
createApp(store)
export default store