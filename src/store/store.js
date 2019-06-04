import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {ADD_USER,REMOVE_USER,FIND_USER,UPDATE_USER,INIT_USER} from './actionTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  getters:{
    getUsers(state){
      return state.users
    }
  },
  mutations: {
    [INIT_USER](state,data){
      return state.users=data
    }
  },
  actions: {
    inituser({commit},data){
      axios("./mock/user.json")
      .then(users=>{
        data=users.data.result
        commit(INIT_USER,data)
      })
    }
  }
})
