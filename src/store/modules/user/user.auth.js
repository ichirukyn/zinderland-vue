import axios from "../../../app/config/httpClient.js"
axios.defaults.headers.common = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

export default ({
  actions: {
    auth(ctx, data) {

      axios.post(data.apiFunc, {
        login: data.login,
        password: data.password
      })
        .then(function (res) {
          if (res.data.status == 200) {
            localStorage.setItem('userID', res.data.user_id);
            localStorage.setItem('token', res.data.user_token);
            ctx.commit('authData', null)
          }
          else {
            ctx.commit('authData', res.data.comment)
          }
        })
    },
    reg(ctx, data) {

      axios.post(data.apiFunc, {
        login: data.login,
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck
      })
        .then(function (res) {
          if (res.data.status == 200) {
            console.log(res.data);
            localStorage.setItem('userID', res.data.user_id)
            localStorage.setItem('token', res.data.user_token)
            ctx.commit('authData', res)
          }            
          else {
            ctx.commit('authData', res.data.comment)
          }
        })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('userID')
        localStorage.removeItem('token')
        resolve(true)
      })
    }
  },
  mutations: {
    authData(state, result) {
      state.userID = localStorage.getItem('userID');
      state.token = localStorage.getItem('token');
      state.errorMesseage = result;
    },
    logout(state) {
      state.userID = null;
      state.token = null;
    },
  },
  state: {
    userID: localStorage.getItem('userID') || '',
    token: localStorage.getItem('token') || '',
    errorMesseage: null,
  },
  getters: {
    isLoggedIn: state => !!state.token,
    userAuth(state) { return state },
    errorShow(state) { return state.errorMesseage }
  }
})