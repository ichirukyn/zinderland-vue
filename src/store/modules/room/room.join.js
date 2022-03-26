import axios from "../../../app/config/httpClient.js"

export default ({
  actions: {
    roomJoin(ctx, data) {
      // console.log(data);
      axios.get('room.join', {
        params: {
          userID: data.userID,
          token: data.token,
          roomID: data.roomID,
          room_token: data.room_token
        }
      })
        .then(function (res) {
          ctx.commit('stateJoinUpdate', res)
        })
        .catch(function (error) {
          alert(error);
        });
    },
    clearAcept(ctx){
      ctx.commit('clearAcept')
    }
  },
  mutations: {
    stateJoinUpdate(state, res) {      
      state.status = res.data.status;
      state.roomID = res.data.roomID;
      state.room_token = res.data.room_token;
    },
    clearAcept(state){
      state.status = ''
    }
  },
  state: {
    "status": '',
    "roomID": '',
    "room_token": ''
  },
  getters: {
    isAceptJoin: state => state.status,
  }
})