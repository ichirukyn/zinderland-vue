import axios from "../../../app/config/httpClient.js"

export default({
    actions:{
        userDataGet(ctx, data){
            // console.log(data);
            axios.get('user.get', {
                params:{
                    userID: data.userID,
                    token: data.token
                }
              })
              .then(function (res) {
                ctx.commit('resData', res)
              })
              .catch(function (error) {
                alert(error);
              });
        }
    },
    mutations:{
        resData(state, res){
            state.login = res.data.login;
            state.password = res.data.password;
            state.email = res.data.mail;
            state.userAvatar = res.data.user_avatar;
        },
    },
    state:{
        login: "",
        password:  "",
        email:  "",
        userAvatar:  "",
    },
    getters:{
        userData(state){return state}
    }
})