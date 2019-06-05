import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {ADD_USER,REMOVE_USER,FIND_USER,UPDATE_USER,INIT_USER} from './actionTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    initial:false
  },
  getters:{
    getUsers(state){
      return state.users
    }
  },
  mutations: {
    [INIT_USER](state,data){
      state.users=[...state.users,...data]
      state.initial=true
    },
    [ADD_USER](state,data){
      state.users=[...state.users,data]
    },
    [REMOVE_USER](state,data){
      state.users=data
    },
    [UPDATE_USER](state,data){
      state.users=data
    },
    [FIND_USER](state,data){

    }
  },
  actions: {
    inituser({commit,state},data){
      if(!state.initial){
        axios("./mock/user.json")
        .then(users=>{
          data=users.data.result
          commit(INIT_USER,data)
        })
      }
      return;
    },
    adduser({commit},data){
      commit(ADD_USER,data)
    },
    removeuser({commit,state},id){
      let users=state.users.filter((user)=>{
        return user.id !== id
      })
      commit(REMOVE_USER,users)
    },
    updateuser({commit,state},data){
      let users=state.users.map((user)=>{
        if(user.id === data.id){
          user.username="Chen"
        }
        return user
      })
      commit(UPDATE_USER,users)
    }
  }
})
