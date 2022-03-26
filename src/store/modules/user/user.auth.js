import axios from "../../../app/config/httpClient.js"
axios.defaults.headers.common = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }  

export default({
    actions:{
        auth(ctx, data){

            axios.post(data.apiFunc, {
                login: data.login,
                password: data.password
              })
              .then(function (res) {
                if(typeof res.data.user_id !== "undefined"){
                  localStorage.setItem('userID', res.data.user_id)
                  localStorage.setItem('token', res.data.user_token)
                  ctx.commit('resData', res)
                }
              })
              .catch(function (error) {
                alert(error);
              });
        },
        reg(ctx, data){
            axios.post(data.apiFunc, {
                login: data.login,
                email: data.email,
                password: data.password,
                passwordCheck: data.passwordCheck
              })
              .then(function (res) {
                alert(res.data.comment);
                console.log(res.data);
                localStorage.setItem('userID', res.data.user_id)
                localStorage.setItem('token', res.data.user_token)
                ctx.commit('resData', res)
              })
              .catch(function (error) {
                alert(error);
              });
        },
        logout({commit}){
          return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('userID')
            localStorage.removeItem('token')
            resolve()
          })
         }
    },
    mutations:{
        resData(state){
          state.userID = localStorage.getItem('userID');
          state.token = localStorage.getItem('token');
        },
        logout(state){
          state.userID = null;
          state.token = null;
        },
    },
    state:{
        userID: localStorage.getItem('userID') || '',
        token: localStorage.getItem('token') || '',
    },
    getters:{
        isLoggedIn: state => !!state.token,
        userAuth(state){return state}
    }
})