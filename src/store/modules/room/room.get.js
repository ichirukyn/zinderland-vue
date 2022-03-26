import axios from "../../../app/config/httpClient.js"

export default ({
  actions: {
    AllroomGet(ctx, data) {
      // console.log(data);
      axios.get('room.get', {
        params: {
          userID: data.userID,
          token: data.token
        }
      })
        .then(function (res) {
          // console.log(res);
          ctx.commit('resData', res)
          return
        })
        .catch(function (error) {
          alert(error);
        });
    }
  },
  mutations: {
    resData(state, res) {      
      for (let i = 0; i < Object.keys(res.data).length - 3; i++) {
        let element = res.data[i];
        state.room[i] = element;
      }
    },
  },
  state: {
    "room": {}
  },
  getters: {
    roomData(state) { return state }
  }
})