<template>
  <div class="main">
      <aside>
          <el-row class="tac">
              <el-col>
                  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo menu"
                      :default-active="indexs" text-color="#fff" @open="handleOpen" @close="handleClose"
                      unique-opened router>
                      <img class="mb-2 logo" src="https://id.tsinghua.edu.cn/ui/activation/images/logo2.png" alt="">

                      <el-sub-menu index="1">
                        <template #title>
                          <el-icon><icon-menu /></el-icon>
                          <span>个人信息</span>
                        </template>
                        <el-menu-item index="/banner">轮播图</el-menu-item>
                        <el-menu-item index="/medium">媒体清华</el-menu-item>
                        <el-menu-item index="/new">头条新闻</el-menu-item>
                        <el-menu-item index="/subject">专题推荐</el-menu-item>
                        <el-menu-item index="/school">校园看点</el-menu-item>
                        <el-menu-item index="/enter">入读清华</el-menu-item>
                      </el-sub-menu>

                  </el-menu>
              </el-col>
          </el-row>
      </aside>

      <section>
          <nav class="nav">
              <ul class="navleft">
                  <li><i class="el-icon-user-solid"></i>欢迎{{ token }}</li>
                  <li @click="exit"><i class="el-icon-refresh-left"></i>退出</li>
              </ul>
          </nav>
          <nav class="path">
              <i class="el-icon-s-home"></i>
              <el-breadcrumb id="bread" separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item v-if="names">{{names}}</el-breadcrumb-item>
              </el-breadcrumb>
          </nav>
          <main>
              <RouterView></RouterView>
          </main>

      </section>
  </div>
</template>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref,watch } from 'vue'
import { getCurrentInstance, reactive } from 'vue'
import {useRouter} from 'vue-router'
let that = getCurrentInstance().appContext.config.globalProperties;
let token = ref(window.sessionStorage.getItem('username'))
let key = window.sessionStorage.getItem('super')

let router = useRouter();
let names = ref('');
let indexs = ref('0');

watch(() => {
  watch(
    () => router.currentRoute.value,
    (newValue) => {
      names.value = newValue.meta.name,
      indexs.value = newValue.path
    },
    { immediate: true }
  );
});

function exit() {
  that.$router.push('/login')
  window.sessionStorage.clear()
}

</script>
<style>
*{
  margin: 0;
  padding: 0;
}

li{
  list-style: none;
}
#bread {
  font-size: 12px;
}

main {
  width: 100%;
  height: calc(100% - 75px);
  position: absolute;
  top: 75px;
  left: 0
}

.path {
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 35px;
  background: #fff;
  color: #666;
  font-size: 11px;
  line-height: 35px;
  text-indent: 0.5em;
  padding: 0;
}

.navleft>li {
  padding: 0 15px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  cursor: pointer;
}

.navleft {
  display: flex;
  height: 100%;
  line-height: 40px;
  color: #999;
  font-size: 11px;
}

.nav {
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #2e363f;
}

section {
  width: 85%;
  height: 100vh;
  position: relative;
}

.logo {
  padding: 10px 20px;
  display: block;
  width:130px;
  text-align: center;
}

.menu {
  height: 100%;
}

.main {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

aside {
  width: 15%;
  height: 100%;
  background: #2e363f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.tac {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.tac>div {
  width: 100%;
  height: 100%;
}</style>