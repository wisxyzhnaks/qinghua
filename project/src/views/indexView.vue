<template>
  <div class="home-banner">
    <div class="swiper">
      <div class="item">
        <img :src="'http://47.109.51.95:3000/' + item.img" v-for="item, index in obj.home_banner"
          :class="{ showimg: index == swiperindex ? true : false }">

        <div class="title" v-for="item, index in obj.home_banner"
          :class="{ showtitle: index == titleindex ? true : false }">{{ item.title }}</div>
      </div>
      <ul class="controller">
        <li v-for="item, index in obj.home_banner" :class="{ showcontroller: index == controllerindex ? true : false }"
          @click="changeswiper(index)"></li>
        <div class="swipermore">更多></div>
      </ul>
    </div>
    <div class="search">
      <div class="searchbox">
        <div class="input">
          <input type="text" placeholder="快速探索 Tsinghua University">
        </div>
        <div class="hotword">
          <div class="tip">高频搜索内容 > </div>
          <ul class="hotworditem">
            <li v-for="item in obj.hot_word">{{ item.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="hotnew">
    <main>
      <div class="left">
        <div class="title">媒体清华 IN THE MEDIA</div>
        <img :src="obj.medium_qinghua[0].imgpath" alt="">
        <div class="item" v-for="item in obj.medium_qinghua">{{ item.title }}</div>
      </div>
      <div class="mid">
        <div :class="{ midswiper: true, midswiperno: isnotswiper }" :style="{ left: midswiperindex * -600 + 'px' }">
          <div class="item">
            <img :src="'http://47.109.51.95:3000/' + obj.headLines[obj.headLines.length - 1].imgpath">
            <div class="down">
              <div class="midtitle">头条新闻 HEADLINES</div>
              <div class="title">{{ obj.headLines[obj.headLines.length - 1].title }}</div>
              <div class="context">{{ obj.headLines[obj.headLines.length - 1].context }}</div>
            </div>
          </div>
          <div class="item" v-for="item, index in obj.headLines">
            <img :src="'http://47.109.51.95:3000/' + item.imgpath">
            <div class="down">
              <div class="midtitle">头条新闻 HEADLINES</div>
              <div class="title">{{ item.title }}</div>
              <div class="context">{{ item.context }}</div>
            </div>
          </div>


          <div class="item">
            <img :src="'http://47.109.51.95:3000/' + obj.headLines[0].imgpath">
            <div class="down">
              <div class="midtitle">头条新闻 HEADLINES</div>
              <div class="title">{{ obj.headLines[0].title }}</div>
              <div class="context">{{ obj.headLines[0].context }}</div>
            </div>
          </div>
        </div>

        <div class="midcontroller">
          <img src="../assets/prev58.png" alt="" class="side" @click="pre">
          <ul>
            <li :class="{ nowmid: index == midcontrollerindex ? true : false }" v-for="item, index in obj.headLines"
              @click="changemidswiper(index)"></li>
          </ul>
          <img src="../assets/next58.png" alt="" class="side" @click="next">
        </div>
      </div>
      <div class="left">
        <div class="title">媒体清华 IN THE MEDIA</div>
        <img :src="obj.search_suggest[0].imgpath" alt="">
        <div class="item" v-for="item in obj.search_suggest">{{ item.title }}</div>
      </div>
    </main>
  </div>
  <div class="lookingschool">
    <div class="lookingtitle">
      <div class="title">EVENTS<br><span>校园看点</span></div>
      <div class="titlemsg">大师讲座、学术论坛、文体活动、演出展览…… 清华365天精彩活动，邀您共见。</div>
      <div class="more">查看更多</div>
      <div class=""></div>
      <div class="controller">
        <img src="https://www.tsinghua.edu.cn/image/prev53.png" alt="">
        <img src="https://www.tsinghua.edu.cn/image/next53.png" alt="">
      </div>
    </div>
    <main>
      <!-- <div class="item">
        <div class="card">
          <div class="sort">{{ obj.looking_school[0].class }}</div>
          <img src="http://47.109.51.95:3000/images/home/schoolLook/1.jpg" alt="">
          <div class="title">出光华记：袁运甫艺术教育思想暨于会见、马泉、张大力、袁加作品展</div>
          <div class="other">
            <div class="time">2023年11月1日–2024年2月29日</div>
            <div class="address">清华大学艺术博物馆一层展厅</div>
          </div>
        </div>
      </div> -->
      <swiper :slidesPerView="4" :spaceBetween="30" :loop="true" :centeredSlides="true" :pagination="{
        clickable: true
      }" >
        <swiper-slide v-for="item, index in obj.looking_school">
          <div class="card">
            <div class="sort">{{ item.class }}</div>
            <img :src="'http://47.109.51.95:3000/' + item.imgpath" alt="">
            <div class="title">{{ item.title }}</div>
            <div class="other">
              <div class="time">{{ item.time }}</div>
              <div class="address">{{ item.address }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </main>
  </div>
  <div class="research">
    <div class="left">
      <div class="title">RESEARCH<br><span>学术科研</span></div>
      <div class="msg">
        清华始终坚持面向世界科技前沿和国家重大战略需要，坚定地走中国特色自主创新之路。百年创新，硕果累累，清华师生在科技进步和学术发展中填补了一个又一个空白，刷新着一项又一项纪录，作出了重要的思想、理论和知识贡献。</div>
      <ul class="tips">
        <li v-for="item, index in obj.research" @mouseenter="choosecard(index)"
          :class="{ choosetip: index == showtip ? true : false }">{{ item.title }}</li>
      </ul>
    </div>
    <div class="right">
      <img :src="'http://47.109.51.95:3000/' + item.imgpath" alt="" v-for="item, index in obj.research"
        :class="{ showimg: index == showresearchimg ? true : false }">
    </div>
  </div>
  <div class="toqinghua">
    <div class="title">ADMISSIONS<br><span>入读清华</span></div>
    <div class="msg">
      32年前，我怀着人生梦想来到清华，从此就一直浸润在这个美丽而充满生机的园子里。今天，你们像当年的我一样，怀揣梦想、憧憬未来。如果你们要问我:“大学有多大？”我会告诉你们，“清华足够大，就看你的梦想有多大。”——清华大学党委书记 邱勇
    </div>
    <main>
      <div class="swiper" :style="{ left: -270 * 5 * shownum + 'px' }">
        <div class="card" v-for="item, index in obj.admissions">
          <img :src="item.imgpath" alt="">
          <div class="num"><span>{{ item.number }}</span>{{ item.unit }}</div>
          <div class="info">{{ item.context }}</div>
        </div>
      </div>
      <ul class="controller">
        <li v-for="item, index in 2" :class="{ nowcard: index == shownum ? true : false }" @click="choosecard2(index)">
        </li>
      </ul>
    </main>
  </div>
  <div class="medium">
    <div class="video">
      <div class="left">
        <div>本科生招生</div>
        <div>研究生招生</div>
        <div>国际学生招生</div>
        <div>在线教育</div>
        <div>终身教育</div>
      </div>
      <video src="http://47.109.51.95:3000/video/qinghua.mp4" controls></video>
    </div>
    <div class="title">
      <div class="left">
        FOLLOW US @SOCIAL MEDIA<br><span>关注社交媒体上的我们</span>
      </div>
      <div class="more">
        查看更多
      </div>
      <div class="img">
        <img src="https://www.tsinghua.edu.cn/image/img56_3.png" alt="">
        <img src="https://www.tsinghua.edu.cn/image/img56_4.png" alt="">
        <img src="https://www.tsinghua.edu.cn/image/img56_5.png" alt="">
        <img src="https://www.tsinghua.edu.cn/image/img56_1.png" alt="">
        <img src="https://www.tsinghua.edu.cn/image/img56_2.png" alt="">
        <img src="https://www.tsinghua.edu.cn/image/dots.png" alt="">
      </div>
    </div>
    <main>
      <div :class="{ card: true, longcard: index == 3 || index == 2 }" v-for="item, index in obj.follow_media">
        <img :src="item.imgpath" alt="">
        <div class="text">
          <div class="time">{{ item.time }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="sign">{{ item.publish }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
//import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import { getCurrentInstance, ref } from 'vue'
let obj = ref({})
let that = getCurrentInstance().appContext.config.globalProperties;
//获取数据
that.$http.getall().then(res => {
  obj.value = { ...res }
})
//设置轮播图和小圆点
let swiperindex = ref(0)
let controllerindex = ref(0)
let titleindex = ref(0)
setInterval(() => {
  swiperindex.value++
  controllerindex.value++
  titleindex.value++
  if (swiperindex.value >= obj.value.home_banner.length) {
    swiperindex.value = 0
    controllerindex.value = 0
    titleindex.value = 0
  }
}, 7000)
function changeswiper(index) {
  swiperindex.value = index
  controllerindex.value = index
  titleindex.value = index
}
//设置今日头条轮播
let midswiperindex = ref(1)
let midcontrollerindex = ref(0)
let isnotswiper = ref(false)
let timer = setInterval(() => {
  midswiperindex.value++
  midcontrollerindex.value++
  if (midswiperindex.value == obj.value.headLines.length + 1) {
    midcontrollerindex.value = 0
    setTimeout(() => {
      isnotswiper.value = true
      midswiperindex.value = 1
    }, 1000)
    setTimeout(() => {
      isnotswiper.value = false
    }, 1001)
  }

}, 5000)
function changemidswiper(index) {
  midswiperindex.value = index + 1
  midcontrollerindex.value = index
  window.clearInterval(timer)
  setTimeout(() => {
    timer = setInterval(() => {
      midswiperindex.value++
      midcontrollerindex.value++
      if (midswiperindex.value == obj.value.headLines.length + 1) {
        midcontrollerindex.value = 0
        setTimeout(() => {
          isnotswiper.value = true
          midswiperindex.value = 1
        }, 1000)
        setTimeout(() => {
          isnotswiper.value = false
        }, 1100)
      }
    }, 5000)
  })
}
function pre() {
  window.clearInterval(timer)
  setTimeout(() => {
    timer = setInterval(() => {
      midswiperindex.value++
      midcontrollerindex.value++
      if (midswiperindex.value == obj.value.headLines.length + 1) {
        midcontrollerindex.value = 0
        setTimeout(() => {
          isnotswiper.value = true
          midswiperindex.value = 1
        }, 1000)
        setTimeout(() => {
          isnotswiper.value = false
        }, 1100)
      }
    }, 5000)
  })
  midswiperindex.value--
  midcontrollerindex.value--
  if (midswiperindex.value == 0) {
    midcontrollerindex.value = obj.value.headLines.length - 1
    setTimeout(() => {
      isnotswiper.value = true
      midswiperindex.value = obj.value.headLines.length
    }, 1000)
    setTimeout(() => {
      isnotswiper.value = false
    }, 1100)
  }
}
function next() {
  window.clearInterval(timer)
  setTimeout(() => {
    timer = setInterval(() => {
      midswiperindex.value++
      midcontrollerindex.value++
      if (midswiperindex.value == obj.value.headLines.length + 1) {
        midcontrollerindex.value = 0
        setTimeout(() => {
          isnotswiper.value = true
          midswiperindex.value = 1
        }, 1000)
        setTimeout(() => {
          isnotswiper.value = false
        }, 1100)
      }
    }, 5000)
  })
  midswiperindex.value++
  midcontrollerindex.value++
  if (midswiperindex.value == obj.value.headLines.length + 1) {
    midcontrollerindex.value = 0
    setTimeout(() => {
      isnotswiper.value = true
      midswiperindex.value = 1
    }, 1000)
    setTimeout(() => {
      isnotswiper.value = false
    }, 1100)
  }
}
//设置学术研究
let showresearchimg = ref(0)
let showtip = ref(0)
function choosecard(index) {
  showresearchimg.value = index
  showtip.value = index
}
//入学清华
let shownum = ref(0)
setInterval(() => {
  shownum.value = (shownum.value + 1) % 2
}, 7000)
function choosecard2(index) {
  shownum.value = index
}
import { Swiper, SwiperSlide } from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具

// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//默认滑动效果（这里面注释掉的可以不要）
// const onSwiper = swiper => {
// 	console.log(swiper);
// };
// const onSlideChange = e => {
// 	// swiper切换的时候执行的方法
// 	console.log('slide change', e.activeIndex);
// };
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能

</script>

<style scoped lang="less">
.home-banner {
  width: 100%;
  height: 100vh;
  position: relative;
  cursor: pointer;

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition: all 1s ease;
    }

    .title {
      font-size: 22.32px;
      color: #fff;
      position: absolute;
      top: 80%;
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: all 1s ease;
      font-weight: 700;
    }

    .showtitle {
      opacity: 1;
    }

    .showimg {
      opacity: 1;
    }

    .controller {
      position: absolute;
      bottom: 20%;
      left: 45%;
      display: flex;
      padding: 10px;

      li {
        width: 12px;
        height: 12px;
        border-radius: 10px;
        background: #fff;
        margin-right: 20px;
      }

      .showcontroller {
        background: #9cd24f;
      }

      .swipermore {
        width: 100px;
        font-size: 12px;
        padding: 0 10px;
        margin: 10px 0;
        position: absolute;
        line-height: 12px;
        color: #fff;
        top: 0px;
        left: 100%;
        border-left: 1px solid #fff;
        transition: all .5s ease;
      }

      .swipermore:hover {
        color: #9cd24f;
      }
    }
  }

  .search {
    width: 100%;
    height: 150px;
    position: absolute;
    top: calc(100% - 75px);
    z-index:50;
    .searchbox {
      width: 80%;
      height: 150px;
      margin: 0 auto;

      .input {
        width: 100%;
        height: 75px;
        background: url(https://www.tsinghua.edu.cn/image/index-search.png) no-repeat center top;

        input {
          display: block;
          width: 80%;
          margin: 0 auto;
          height: 100%;
          font-size: 30px;
          border: 0;
          outline: none;
          border-bottom: 2px solid #6510ad;
        }
      }

      .hotword {
        width: 80%;
        margin: 0 auto;
        display: flex;
        padding: 20px 0;
        font-size: 13px;
        color: #A0A0A0;
        font-weight: 600;

        ul {
          display: flex;

          li {
            margin: 0 20px;
            font-size: 13px;
            color: #000;
            font-weight: 400;
          }
        }

      }
    }

  }

}

.hotnew {
  width: 100%;
  height: 100vh;

  main {
    width: 80%;
    height: 110.5%;
    padding: 5% 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    .left {
      width: 20%;
      height: 100%;

      .title {
        padding-top: 50px;
        color: #666;
        font-size: 14.88px;
      }

      img {
        display: block;
        width: 100%;
        padding: 10px 0;
      }

      .item {
        font-size: 15.81px;
        font-weight: 700;
        padding: 20px 0;
        line-height: 22px;
        border-bottom: 1px solid #666;
        letter-spacing: 1px;
        text-align: justify;
      }
    }

    .mid {
      width: 50%;
      height: 100%;
      position: relative;
      overflow: hidden;
      border-left: 1px solid #d6d6d6;
      border-right: 1px solid #d6d6d6;

      .midswiper {
        display: flex;
        position: absolute;
        left: -600px;
        transition: all 1s ease;

        .item {
          img {
            width: 600px;
            height: 55%;
          }

          .down {
            width: 80%;
            height: 35%;
            padding: 10px 0;
            margin: 0 auto;

            .midtitle {
              font-size: 11px;
              color: #6510ad;
              position: relative;
              width: 150px;
              text-align: center;
              margin: 0 auto;
            }

            .midtitle::after {
              content: '';
              display: block;
              width: 15px;
              border-bottom: 1px solid #6510ad;
              position: absolute;
              top: 6px;
              right: -10px;
            }

            .midtitle::before {
              content: '';
              display: block;
              width: 15px;
              border-bottom: 1px solid #6510ad;
              position: absolute;
              top: 6px;
              left: -10px;
            }

            .title {
              width: 100%;
              padding: 20px 0;
              text-align: center;
              font-size: 22.32px;
              color: #555;
            }

            .context {
              width: 100%;
              padding: 20px 0;
              text-align: center;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 1px;
              color: #888;
              text-align: justify;
              text-indent: 2em;
            }

          }

        }
      }

      .midswiperno {
        transition: none !important;
      }

      .midcontroller {
        width: 90%;
        height: 5%;
        left: 5%;
        position: absolute;
        padding: 20px 0;
        bottom: 20px;
        display: flex;
        justify-content: space-between;

        .side {
          display: block;
          width: 55px;
          height: 14px;
        }

        ul {
          display: flex;

          li {
            width: 8px;
            height: 8px;
            border-radius: 12px;
            background: #ccc;
            margin: 8px 5px;
          }

          .nowmid {
            background: #6510ad;
          }
        }
      }
    }

    .right {
      width: 20%;
      height: 100%;
      background: green;
    }
  }
}

.lookingschool {
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .lookingtitle {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 16.74px;
      padding: 0 30px;
      border-right: 5px solid #6510ad;

      span {
        font-size: 31.62px;
      }
    }

    .titlemsg {
      font-size: 13px;
      color: #929292;
      margin: 0 30px;
    }

    .more {
      font-size: 12px;
      color: #6510ad;
      padding: 3px;
      border-bottom: 2px solid #6510ad;
    }

    .controller {
      img {
        margin: 0 20px;
      }

    }
  }

  main {
    width: 100%;
    height: 65%;
    margin: 50px 0;

    .swiper-slide {
      width: 300px;
      height: 400px;
    }

    .card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .sort {
        font-size: 13px;
      }

      img {
        width: 100%;
      }

      .title {
        font-size: 15.81px;
        font-weight: 700;
        text-align: justify;

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .other {
        font-size: 12px;
        color: #6510ad;

        div {
          margin-bottom: 10px;
        }
      }
    }


  }
}

.lookingschool::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 10%;
  background: #F2F3F9;
  z-index: -1;
}

.research {
  height: 100vh;
  width: 90%;
  margin-left: 10%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 28%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 16.7px;
      position: relative;

      span {
        font-size: 31.6px;
      }
    }

    .title::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      border: 2px solid #6510ad;
    }

    .msg {
      width: 90%;
      font-size: 13px;
      text-align: justify;
      line-height: 25px;
      padding: 32.55px 0;
      color: #929292;
    }

    .tips {
      li {
        font-size: 15.88px;
        font-weight: 700;
        padding: 20px;
        padding-right: 50px;
        border-bottom: 1px solid #ccc;
        transition: all .2s linear;
        width: 100%;
        background: url(../assets/img542.png) right center no-repeat;
        background-color: rgba(255, 255, 255, 0);
      }

      .choosetip {
        background-color: transparent;
        padding-left: 30px;
        position: relative;
        border: 0;
        z-index: 22;
        ;
        border-left: 4px solid #6510ad;
        color: #6510ad;
      }
    }
  }

  .right {
    width: 60%;
    height: 100%;
    background: #6510ad;
    position: relative;

    img {
      position: absolute;
      right: 0;
      height: 90%;
      margin-top: 10%;
      width: 115%;
      opacity: 0;
    }

    .showimg {
      opacity: 1;
    }
  }
}

.toqinghua {
  width: 100%;
  height: 90vh;
  background: url(https://www.tsinghua.edu.cn/image/index-admissions.png) no-repeat center bottom;
  background-size: auto 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .title {
    font-size: 16.7px;
    position: relative;
    text-align: center;

    span {
      font-size: 31.6px;
    }
  }

  .title::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: calc(50% - 30px);
    width: 60px;
    border: 2px solid #6510ad;
  }

  .msg {
    width: 35%;
    text-align: center;
    font-size: 13px;
    color: #929292;
    line-height: 25px;
  }

  main {
    width: 90%;
    overflow: hidden;
    position: relative;
    height: 400px;

    .swiper {
      display: flex;
      position: absolute;
      transition: all 1s ease;

      .card {
        min-width: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        img {
          width: 100px;
          height: 100px;
        }

        .num {
          text-align: center;
          font-size: 13px;

          span {
            font-size: 28px;
            color: #6510ad;
            font-weight: 700;
          }
        }

        .info {
          text-align: center;
          font-size: 13px;
          color: #929292;
        }
      }
    }

    .controller {
      display: flex;
      position: absolute;
      bottom: 50%;
      left: 45%;

      li {
        width: 10px;
        height: 10px;
        background: #ccc;
        border-radius: 15px;
        margin-left: 5px;
      }

      .nowcard {
        background: #6510ad;
      }
    }
  }
}

.medium {
  width: 100%;
  height: 130vh;
  background: url(https://www.tsinghua.edu.cn/image/index-flow.jpg) center no-repeat;
  position: relative;
  padding-top: 40vh;

  .video {
    position: absolute;
    top: -200px;
    left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 75%;
    height: 400px;

    .left {
      height: 100%;
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background: url(https://www.tsinghua.edu.cn/image/img319.png) no-repeat center;

      div {
        width: 80%;
        padding: 20px 0;
        border-bottom: 1px solid #333;
        background: url(../assets/123.png) right center no-repeat;
        font-size: 17px;
        font-weight: 700;
        transition: all .3s ease;
      }

      div:hover {
        background: url(../assets/321.png) right center no-repeat;
        color: #6510ad;
      }
    }

    video {
      width: 75%;
      height: 89.5%;
      display: block;
    }
  }

  .title {
    width: 80%;
    margin: 0 auto;
    font-size: 17px;
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .left {
      width: 320px;
      padding-top: 50px;
      border-top: 2px solid #9cd24f;

      span {
        font-size: 32px;
      }
    }

    .more {
      font-size: 12px;
      border-bottom: 2px solid #fff;
      padding-bottom: 5px;
      height: 5%
    }

    .img {
      display: flex;

      img {
        display: block;
        border-radius: 50px;
        background: #6510ad;
        margin-left: 20px;
      }
    }
  }

  main {
    width: 96%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;

    .card {
      width: 350px;
      height: 350px;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
      }

      .text {
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 5%;

        .time {
          font-size: 11px;
          color: #ccc;
        }

        .title {
          font-size: 15px;
          margin: 0;
          padding: 10px 0;
        }

        .sign {
          color: #fff;
          width: 50px;
          padding-bottom: 10px;
          border-bottom: 4px solid #9cd24f;
          text-align: right;
        }
      }
    }

    .card::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: url(https://www.tsinghua.edu.cn/image/bg10.png) center repeat-x;
      background-size: auto 100%;
    }

    .longcard {
      width: 700px;
      height: 350px;
    }
  }
}</style>
