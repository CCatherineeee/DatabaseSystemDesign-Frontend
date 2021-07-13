import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        
        userID:'',
        userState:false,

    },
    mutations:{
       
        ['setUserID'](state,userID){
            sessionStorage.setItem("userID",userID);
            state.userID = userID;
        }
    }
})

