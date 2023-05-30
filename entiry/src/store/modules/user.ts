const state: Object = {
    userInfo: {
        name: 'ocean',
        menuRole: [
            'test', 'potarl', 'computed', 'login', 'potarl', 'watch', 'refTest', 'reactviceTest', 'lifeCycle', 'hookTest', 'toRefs', 'comnutation', 'slotTest', 'dashboard'
        ],
        userId: 1,
        role: true
    }
}
const mutations: Object = {
    CHANGE_USERINFO: (state: Object, payload: Object) => {
        state.userInfo = payload
    }
}
const actions: Object = {
    changeUserInfo: ({ commit }, data) => {
        commit(CHANGE_USERINFO, data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}