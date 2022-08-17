import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      storeUser: null,
    }
  } ,
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    
  },

})
  








