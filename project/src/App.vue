<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="app">
      <img src="./assets/logo.png" alt="" />
      <nav>
        <RouterLink to="/new">清华新闻</RouterLink>
        <RouterLink to="/school">学校概括</RouterLink>
        <RouterLink to="/faculty">院系设置</RouterLink>
        <RouterLink to="/education">教育教学</RouterLink>
        <RouterLink to="/research">科学研究</RouterLink>
        <RouterLink to="/enrollment">招生就业</RouterLink>
        <RouterLink to="/exchange">合作交流</RouterLink>
        <RouterLink to="/enter">走进清华</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 150px;
  background: url('./assets/head-bg.png') center repeat-x;
  position: fixed;
  top: 0;
  left: 0;
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
