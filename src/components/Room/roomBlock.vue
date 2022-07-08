<template>
  <div class="room-header">
    <p class="mini-header">Список комнат</p>
    <button class="btn">Создать комнату</button>
  </div>
  <div class="room-list">
    <div class="room-item" v-for="item in roomData.room" v-bind:key="item.room_id">
      <div class="room-name">
        <p>{{item.room_name}}</p>
      </div>
      <div class="room-desc">
        <p>Страна: {{item.room_location}}</p>
        <p>Количество игроков: {{item.room_characters}} / {{item.room_max_characters}}</p>
      </div>
      <div class="room-lvl">
        <p class="btn-join" @click="goToGame(item.room_id,item.room_token)">Войти</p>
        <p>Уровень: {{item.room_lvl}}</p>
      </div>
    </div>
  </div>
  {{isAceptJoin}}
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('AllroomGet', this.$store.getters.userAuth);
  },
  data() {
    return {
      // roomData: '' this.$store.dispatch('AllroomGet', this.$store.getters.userAuth)
    }
  },
  computed: {
    roomData :{
      get() {
        return this.$store.getters.roomData;
      }
    },
    isAceptJoin : function(){
      if(this.$store.getters.isAceptJoin){
        this.$store.dispatch('clearAcept');
        return this.redirectGame()
      }
      else{
        return null
      }
    },
  },
  methods: {
      goToGame(id, token){
          let data = this.$store.getters.userAuth;
          data.room_id = id;
          data.room_token = token;
          this.$store.dispatch('roomJoin', this.$store.getters.userAuth);

          if(this.$store.getters.isAceptJoin){
            this.$router.push('/game?room_id=' + id + '&room_token=' + token)
          }
      },
      redirectGame(){
        this.$router.push('/game')
      }
  },
};
</script>

<style scoped>
.mini-header {
  margin-right: 20px;
  margin-bottom: 0px;
}
.room-list{
  width: 100%;
}
.room-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.room-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #242323;
  margin: 5px;
}
.btn-join{
  background: rgb(212, 104, 15);
  padding: 5px;
}
</style>