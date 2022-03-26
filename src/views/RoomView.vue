<template>
  <Header />

  <div class="room">
    <div class="user block column">
      <div class="user-info">
        <div class="image-50">
          <img src="../assets/images.png" />
        </div>
        <div class="user-log">
          <span>Ichiru<br>Администратор</span>
        </div>
      </div>
      <div class="user-nav">
        <li class="nav item block" :class="{ active: isActive('room') }"  @click.prevent="setActive('room')">
          <p>Комнаты</p> 
        </li>
        <li class="nav item block" :class="{ active: isActive('friend') }" @click.prevent="setActive('friend')">
          <p>Друзья</p>
        </li>
        <li class="nav item block" :class="{ active: isActive('profile') }" @click.prevent="setActive('profile')">
          <p>Персонаж</p>
        </li>
        <li class="nav item block" :class="{ active: isActive('contact') }" @click.prevent="setActive('contact')">
          <p>Уведомления</p>
        </li>
      </div>
    </div>
    <div class="content-tab block column">
      <div class="tab-panel" :class="{ 'show': isActive('room') }">
        <roomBlock />
      </div>
      <div class="tab-panel" :class="{ 'active show': isActive('friend') }">
        Home content
      </div>
      <div class="tab-panel" :class="{ 'active show': isActive('profile') }">
        <characterForm />
      </div>
      <div class="tab-panel" :class="{ 'active show': isActive('contact') }">
        Contact content
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Main/headerBlock.vue";
import roomBlock from "../components/Room/roomBlock.vue";
import characterForm from "../components/Room/characterForm.vue";

export default {
  name: "HomeView",
  data() {
    return {
      activeItem: "room",
    };
  },
  components: {
    Header,
    roomBlock,
    characterForm
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};

</script>

<style scoped>

.room {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-evenly;
}

.user {
  width: 20%;
  height: 200px;
  margin-top: 20px;
}

.content-tab {
  width: 50%;
  min-height: 400px;
  max-height: 650px;
  margin-top: 20px;
}

.user-nav {
  width: 90%;
}
</style>