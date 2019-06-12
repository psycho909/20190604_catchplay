import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Mock from '../mock/mock'
import {ADD_USER,REMOVE_USER,UPDATE_USER,INIT_USER,FIND_ONE_USER} from './actionTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    user:[],
    initial:false
  },
  getters:{
    getUsers(state){
      return state.users
    },
    getUser(state){
      return state.user
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
    [FIND_ONE_USER](state,data){
      state.user=data
    }
  },
  actions: {
    inituser({commit,state},data){
      if(!state.initial){
        axios.get("/api/users")
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
      let newData=state.users.filter((user)=>{
        return user.id !== id
      })
      commit(REMOVE_USER,newData)
    },
    updateuser({commit,state},data){
      let newData=state.users.map((user)=>{
        if(user.id === data.id){
          user=data
        }
        return user
      })
      commit(UPDATE_USER,newData)
    },
    findOneUser({commit,state},id){
      let newData=state.users.find(user=>user.id === id);
      commit(FIND_ONE_USER,newData)
    }
  }
})
