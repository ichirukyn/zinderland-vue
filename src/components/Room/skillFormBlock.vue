<template>

  <div class="tab">
    <li class="item" :class="{ active: isActive('skillMain') }" @click.prevent="setActive('skillMain')">
      <p>Основные</p>
    </li>
    <li class="item" :class="{ active: isActive('skillImportant') }" @click.prevent="setActive('skillImportant')">
      <p>Важные</p>
    </li>
    <li class="item" :class="{ active: isActive('skillSub') }" @click.prevent="setActive('skillSub')">
      <p>Побочные</p>
    </li>
  </div>
  <div class="row">
    <draggable
      class="skill-all scroll"
      :list="skillData"
      itemKey="skill_id"
      group="skill"
      :value="characterData.skill_other"
      :move="checkMove"
    >
      <template #item="{ element }">
      <div class="item" :title="element.skill_desc">
          {{ element.skill_title }}
      </div>
      </template>
    </draggable>

    <div v-for="(list, index) in skill_lists" v-bind:key="list" :class="{ 'show': isActive(index) }">
      <draggable
        class="skill-sub scroll"
        :class="{'show': isActive(index)}"
        :list="list"
        itemKey="skill_id"
        group="skill"
        :value="characterData.skill_other"
        :move="checkMove"
      >
        <template #item="{ element }">
        <div class="item" :title="element.skill_desc">
            {{ element.skill_title }}
        </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default{
  components: {
    draggable
  },
  data() {
    return {
      activeItem: "skillMain",
      characterData: {},
      skill_lists:{
        skillMain: [],
        skillImportant: [],
        skillSub: [],  
      }
    }
  },
  computed:{
    skillData: function(){
      return this.$store.getters.skillData.skill;
    },
  },
  methods: {
    checkMove(event) {
      if (event.relatedContext.list.length > 5) return false
    },
    test(list){
      console.log(list);
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      return this.activeItem = menuItem;
    },
  },
}
</script>

<style scoped>

.tab{
  display: flex;
  justify-content: center;
}

.skill-all, .skill-sub{
  border: 1px solid #242323;
  max-height: 217px;
  margin: 5px;
  border-radius: 5px;
  overflow-x: hidden;
  width: 50%;
}

.skill-sub{
  display: none;
  width: 94%!important;
  height: 100%;
}

.show{
  width: 50%;
}

</style>
