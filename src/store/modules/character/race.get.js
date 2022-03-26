import axios from "../../../app/config/httpClient.js"

export default ({
  actions: {
    allRaceGet(ctx, data) {
      axios.get('character/race.get', {
        params: {
          userID: data.userID,
          token: data.token,
          characterID: data.characterID,
        }
      })
      .then(function (res) {
        ctx.commit('raceUpdate', res)
        return
      })
      .catch(function (error) {
        alert(error);
      });
    }
  },
  mutations: {
    raceUpdate(state, res) {      
      for (let i = 0; i < Object.keys(res.data).length - 3; i++) {
        let element = res.data[i];
        state.race[i] = element;
      }
    },
  },
  state: {
    "race": []
  },
  getters: {
    raceData(state) { return state }
  }
})