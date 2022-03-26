<template>
  <form class="block column" @submit.prevent="submitForm">
    <input
      placeholder="Имя персонажа"
      class="autofill"
      type="text"
      v-model="characterData.name"
      required
    />

    <select name="raceID" size="1" v-model="characterData.raceID" required>
      <option  v-for="item in raceData" v-bind:key="item.race_id" :value="item.race_id">{{item.race_name}}</option>
    </select>

    <label>Перетащите нужные навыки в желаемый список</label>
    <div class="form-skill">
      <skillFormBlock />
    </div>
    <input type="submit">
  </form>
</template>

<script>
import skillFormBlock from "./skillFormBlock.vue";
// import skillForm from './skillFormBlock.vue'

export default {
  async created() {
    await this.$store.dispatch('allRaceGet', this.$store.getters.userAuth)
    await this.$store.dispatch('allSkillGet', this.$store.getters.userAuth)
  },
  data() {
    return {
      characterData: {},
    };
  },
  components: {
    skillFormBlock
  },
  computed: {
    raceData: function(){
      return this.$store.getters.raceData.race;
    },
    character: function(){
      return this.characterData;
    },
  },
  methods:{
    submitForm(){
      let check = true

      check = this.checkList(this.skillMain.length)
      check = this.checkList(this.skillImportant.length) 
      check = this.checkList(this.skillSub.length) 
      console.log(this.checkList(this.skillSub.length) );

      if (check) {
        let data = this.characterData

        data.skillMain = this.skillMain
        data.skillImportant = this.skillImportant
        data.skillSub = this.skillSub
        data.skillOther = this.skillData

        // data

      }
      else{
        alert("Нужно заполнить по 6 навыков в каждый список");
      }
    },
    checkList(check){
      if (check != 6)
        return false
      else
        return true
    },
  }
};
</script>

<style scoped>
form{
  align-items: stretch;
}
</style>