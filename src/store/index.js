import { createStore } from 'vuex'
import userAuth from "./modules/user/user.auth.js"
import userGet from "./modules/user/user.get.js"
import roomGet from "./modules/room/room.get.js"
import roomJoin from "./modules/room/room.join.js"
import characterSkillGet from "./modules/character/skill.get.js"
import characterRaceGet from "./modules/character/race.get.js"


export default createStore({
  modules: {
    userAuth,
    userGet,
    roomGet,
    roomJoin,
    characterSkillGet,
    characterRaceGet
  }
});
