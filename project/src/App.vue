<script setup>
import { RouterLink, RouterView } from "vue-router";
import bottomVue from "./components/bottom.vue";
import {useI18n} from 'vue-i18n';
import { reactive, watch,ref,getCurrentInstance} from "vue";
import {useRoute} from "vue-router";

const i18n = useI18n();

function changelang(){
  i18n.locale.value=='zh'?i18n.locale.value='en':i18n.locale.value='zh'
}

let route = useRoute();

let routerIndex = ref(0);

watch(()=>route.meta,(val)=>{
  routerIndex.value = val.index;
})

let tableDate = reactive([
  {
    path:'/new',
    name:'meg.TsinghuaNews'
  },
  {
    path:'/school',
    name:'meg.SchoolOverview'
  },
  {
    path:'/faculty',
    name:'meg.FacultySetting'
  },
  {
    path:'/education',
    name:'meg.EducationTeaching'
  },
  {
    path:'/research',
    name:'meg.ScientificResearch'
  },
  {
    path:'/enrollment',
    name:'meg.EnrollmentEmployment'
  },
  {
    path:'/exchange',
    name:'meg.CooperationExchange'
  },
  {
    path:'/enter',
    name:'meg.EnterUniversity'
  }
])

let that = getCurrentInstance().appContext.config.globalProperties;
function toindex(){
  that.$router.push('/')
}
</script>

<template>
  <header>
    <div class="app">
      <img src="./assets/logo.png" alt="" @click="toindex" />
      <nav>
        <RouterLink v-for="item,index in tableDate" :key="index" :to="item.path" :style="{color:routerIndex === index ? '#e2ca5b' :'white'}">{{$t(item.name)}}</RouterLink>
      </nav>
    </div>
    <button class="changelang" @click="changelang">切换语言</button>
  </header>
  <RouterView />
  <bottomVue></bottomVue>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style: none;
}

header {
  width: 100%;
  height: 150px;
  background: url('./assets/head-bg.png') center center / 100% 100% repeat-x;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  .changelang{
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
  }
}
.app{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}
.app nav {
  width: 70%;
  height: 100px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 17px;
  font-family: "SourceSansPro-Regular", "微软雅黑";
  font-weight: 800;
}
a {
  text-decoration: none;
  color: white;
}
</style>
