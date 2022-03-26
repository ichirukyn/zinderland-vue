import axios from "../../../app/config/httpClient.js"

export default ({
  actions: {
    allSkillGet(ctx, data) {
      axios.get('character/skill.get', {
        params: {
          userID: data.userID,
          token: data.token,
          characterID: data.characterID,
        }
      })
      .then(function (res) {
        ctx.commit('skillUpdate', res)
        return
      })
      .catch(function (error) {
        alert(error);
      });
    }
  },
  mutations: {
    skillUpdate(state, res) {      
      for (let i = 0; i < Object.keys(res.data).length - 3; i++) {
        let element = res.data[i];
        // console.log(Object.key(element));

        // for (const key of Object.key(element)) {
        //   if (key == 'race_id' || key == 'race_name'){

        //   }
        //   console.log(key);
        // }

        state.skill[i] = element;

        
      }
    },
  },
  state: {
    "skill": []
  },
  getters: {
    skillData(state) { return state }
  }
})