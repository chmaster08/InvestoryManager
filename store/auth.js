const getDefaultState = () =>({token : null});
export default {
    namespaced : true,
    state : {
        token: null,
    },

    getters : {
        isLogined: (state) => state.token !== null,
        dispToken:(state) => state.token,
    },

    mutations : {
        setToken(state, newtoken) {
            state.token = newtoken;
        },
    },
    

}

