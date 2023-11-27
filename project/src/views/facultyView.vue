<template>
  <div class="pagetitle">
    <img src="https://www.tsinghua.edu.cn/image/banner07.jpg" alt="">
    <h1>院系设置</h1>
    <section>目前，清华大学设有21个学院，59个系， 已成为一所具有理学、工学、文学、艺术学、历史学、哲学、经济学、管理学、法学、教育学和医学等学科的综合性的研究型大学。</section>
  </div>
  <div class="main">
    <main>
      <div class="change">
        <div :class="{choose:ischoose == 1,btn:true,btns:true}" @click="choose(1)">
          <img src="../assets/faculty/szicOn.png" alt="" v-show="ischoose == 1">
          <img src="../assets/faculty/szic.png" alt="" v-show="ischoose == 2">
          树状
        </div>
        <div :class="{choose:ischoose == 2,btn:true,btns:true}" @click="choose(2)">A-Z</div>
      </div>
    </main>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <div class="tip">注：* 为非实体学院</div>
    </footer>
  </div>
</template>
  
<script setup>
import { ref,getCurrentInstance } from 'vue'
let that = getCurrentInstance().appContext.config.globalProperties;
  let ischoose = ref(1)
  that.$router.push('/arborescence')
  function choose(x){
    if(x == 1){
      that.$router.push('/arborescence')
    }else{
      that.$router.push('/wordsort')
    }
    ischoose.value = x
  }
</script>
  
<style scoped lang="less">
.pagetitle {
  width: 100%;
  height: 75vh;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  h1 {
    font-size: 44.64px;
    color: white;
    z-index: 9;
    font-weight: normal;
    margin-bottom: 0.15rem;
    position: absolute;
    top: 63%;
    left: 12%;
  }

  section {
    display: block;
    font-size: 16.74px;
    color: white;
    line-height: 30px;
    text-align: justify;
    width: 40.25%;
    position: absolute;
    top: 78%;
    left: 12%;
  }
}

.main {
  width: 100%;
  padding-top: 80px;
  main {
    width: 70%;
    height: 100px;
    margin: 0 auto;

    .change {
      width: 100%;
      height: 40px;
      position: relative;
      display: flex;

      .btn {
        width: 120px;
        height: 40px;
        border: 1px solid #791cb5;
        background: #fff;
        position: relative;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 13px;
        color: #791cb5;
        cursor: pointer;
      }

      .choose {
        background: #791cb5;
        color: #fff;
        position: relative;
      }

      .choose::after {
        position: absolute;
        content: '';
        border:15px solid;
        border-color: #791cb5 transparent transparent transparent;
        position: absolute;
        top:39px;
        left:calc(50% - 15px);
      }
    }

    .change::after {
      content: '';
      display: block;
      width: 100%;
      border-bottom: 1px solid #ccc;
      position: relative;
      top: -20px
    }
  }
  section{
    width: 70%;
    height: 100%;
    margin: 0 auto;
  }
}
footer{
  width:100%;
  height:200px;
  display:flex;
  justify-content: end;
  align-items: center;
  .tip{
    width:83%;
    padding: 15px;
    color: #999999;
    font-size:12px;
    background: #f5f5f5;
    text-indent: 1em;
  }
}

</style>
  