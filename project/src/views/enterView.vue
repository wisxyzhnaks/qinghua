<template>
  <div class="enter">
    <img src="https://www.tsinghua.edu.cn/images/20210605.jpg" alt="" />
    <div class="NyTopinfCon">
      <p>走进清华</p>
      <span
        >清华是一所有理想的大学，也是清华人实现自己梦想的殿堂。来到这里，你将获得学术大师对你人生梦想的指点，你将触碰到科技和学术梦想的最前沿，你将沐浴在共同追寻梦想的良好氛围中。</span
      >
    </div>
  </div>
  <div class="w14">
    <div class="title">
      <h5>校园看点</h5>
      <span>查看更多</span>
    </div>
    <ul>
      <li v-for="(item, index) in oneDate" :key="index">
        <img :src="'http://47.109.51.95:3000/' + item.imgpath" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
  <div class="swiper">
    <el-carousel
      arrow="never"
      height="690px"
      :autoplay="false"
      @change="handleChange"
    >
      <el-carousel-item v-for="(item, index) in twoDate" :key="index">
        <img :src="item.img" alt="" />
        <div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.title }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="w15">
    <div class="title">
      <h5>校园生活</h5>
      <span>查看更多</span>
    </div>
    <ul>
      <li v-for="(item, index) in threeDate" :key="index">
        <img :src="item.img" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
  <div class="peopleBox">
    <div class="swipers">
      <el-carousel height="178px;" arrow="never">
        <el-carousel-item v-for="item in fourDate" :key="item">
          <div class="text">
            <p>{{item.title}}</p>
            <span>{{item.name}}</span>
            <h2>{{item.user}}</h2>
          </div>
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div class="infos">
    <h3>实用信息</h3>
    <ul>
      <Li v-for="item,index in fiveDate" :key="index">{{item}}</Li>
    </ul>
  </div>
</template>
  
<script setup>
import { getCurrentInstance, ref,reactive,onMounted } from 'vue'
let that = getCurrentInstance().appContext.config.globalProperties;
let oneDate = ref([]);
that.$http.getall({typeId:'校园看点'}).then(res=>{
  oneDate.value = [...res]
  oneDate.value.reverse()
  oneDate.value.splice(6,oneDate.value.length)
})
let twoDate = reactive([
  {
    img: "https://www.tsinghua.edu.cn/__local/8/17/A4/2492FB474A7906383B460BAEFB5_0C124750_107365.jpg",
    name: "李兆基科技大楼",
    title:
      "李兆基科技大楼位于清华大学校园东南区域，总建筑面积约11万平米，地下4层，地上6-10层，是截至目前清华大学单体建筑面积最大、基坑最深的工程。大楼工程于2012年12月正...",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/1/95/79/BE6722693B3BC46415290CC514C_60689166_C4100.jpg",
    name: "法律图书馆",
    title:
      "新法律图书馆位于廖凯原楼内，由香港知名资深律师胡宝星先生捐资建设，建筑面积1万平方米，设计藏书量100万册，阅览座位651个，并配有自助借还书、单人研读间等设施，漫...",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/4/E4/FE/7A1B27F0E935153244D5CD631BE_0C1A44E7_D1083.jpg",
    name: "人文社科图书馆",
    title:
      "清华大学人文社科图书馆（又称文科图书馆）是清华大学重要的研究型专业化图书馆之一，于2011年4月百年校庆期间正式落成并投入服务运行。它由凯风公益基金会捐资，瑞士著...",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/0/E9/B5/123588172AED93BD0193C0D83FA_DED4F3EB_901C6.jpg",
    name: "艺术博物馆",
    title:
      "艺术博物馆位于清华大学校园东区，整座博物馆占地1.5公顷，总建筑面积3万平方米，展厅总面积达9000平方米，目前藏品有1.3万余（组）件，绝大多数来自清华大学美术学院自...",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/F/88/B7/BD2CF43BDEABF3E8770B3597E82_3C826603_DF822.jpg",
    name: "美术学院",
    title:
      "2004年3月奠基动工，2005年8月投入使用的美术学院新教学楼位于主校区东区，中央主楼东南方向，建筑总面积62,000平方米，占地15,000平方米，由美国帕金斯威尔公司设计。...",
  },
]);

let threeDate = reactive([
  {
    img: "https://www.tsinghua.edu.cn/images/21/04/16/1hmf3qttr7/001tyhd.jpg.png",
    title: "体育活动",
  },
  {
    img: "https://www.tsinghua.edu.cn/images/21/04/16/1hmf3qttr7/002shsj.png",
    title: "社会实践",
  },
  {
    img: "https://www.tsinghua.edu.cn/images/21/04/16/1hmf3qttr7/xysh03.png",
    title: "讲座论坛",
  },
  {
    img: "	https://www.tsinghua.edu.cn/images/21/04/16/1hmf3qttr7/004xsst.png",
    title: "学生社团",
  },
  {
    img: "	https://www.tsinghua.edu.cn/images/21/04/16/1hmf3qttr7/005gyhd.png",
    title: "公益活动",
  },
  {
    img: "https://www.tsinghua.edu.cn/images/21/04/16/1hmf3qttr7/xysh06.png",
    title: "文艺活动",
  },
]);

let fourDate = reactive([
  {
    title:'2020，我在清华实验室研究新冠疫苗和抗体。',
    name:'医学院 2015级博士生',
    user:'单思思',
    img:'https://www.tsinghua.edu.cn/__local/4/39/CB/C8434002540AAF2F338BA69F6A5_68454C22_1EE3.png'
  },
  {
    title:'哪里缺人？请让我上。2020紫荆志愿者，战“疫”在行动。',
    name:'精密仪器系   2018级',
    user:'李金峰',
    img:'https://www.tsinghua.edu.cn/__local/9/18/B7/5B323494252C26272C3F2B16421_40E02702_285F.png'
  },
  {
    title:'“为天地立心，为生民立命，为往圣继绝学，为万世开太平”。我的初心就是用行动和意志守护香港，推动“一国两制”行稳致远。',
    name:'公共管理学院  2019级博士生',
    user:'谢晓虹',
    img:'	https://www.tsinghua.edu.cn/__local/9/5E/33/03CDBAA9C9EF400EB6D36A4A142_7B76D4C6_28F9.png'
  }
])

let fiveDate = reactive(['校园交通','周边交通','校园参观','服务信息','宣传资源','清华经历'])

function handleChange(val) {
  console.log(val);
}
</script>
  
<style scoped lang="less">
.enter {
  width: 100%;
  height: auto;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .NyTopinfCon {
    width: 490px;
    height: 130px;
    position: absolute;
    bottom: 50px;
    left: 150px;

    p {
      font-size: 36.96px;
      margin-bottom: 11px;
      color: white;
    }
    span {
      font-size: 13px;
      color: white;
    }
  }
}

.w14 {
  width: 100%;
  height: auto;
  padding: 0 5%;
  margin: 100px 0 66px;
  box-sizing: border-box;
  position: relative;

  .title {
    width: 90%;
    height: 30px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      padding-left: 15px;
      color: black;
      font-size: 22px;
      font-weight: 500;
      border-left: 2px solid #791cb3;
    }

    span {
      font-size: 10px;
      padding: 6px;
      color: #791cb3;
      border-bottom: 1px solid #791cb3;
    }
  }

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 33%;
      height: 237px;
      list-style: none;
      background: blue;
      position: relative;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      &::before {
        content: "";
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          to top,
          rgba(51, 14, 71, 0.85),
          rgba(0, 0, 0, 0)
        );
      }

      p {
        width: 90%;
        height: 30%;
        position: absolute;
        left: 5%;
        bottom: 0;
        font-size: 16px;
        font-weight: 800;
        color: white;
      }
    }
  }
}

.w15 {
  width: 90%;
  height: auto;
  padding: 0 5%;
  margin: 100px auto 66px;
  box-sizing: border-box;
  position: relative;

  .title {
    width: 90%;
    height: 30px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      padding-left: 15px;
      color: black;
      font-size: 22px;
      font-weight: 500;
      border-left: 2px solid #791cb3;
    }

    span {
      font-size: 10px;
      padding: 6px;
      color: #791cb3;
      border-bottom: 1px solid #791cb3;
    }
  }

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 25%;
      height: 237px;
      list-style: none;
      background: blue;
      position: relative;

      &:nth-child(3) {
        width: 50%;
      }

      &:nth-child(4) {
        width: 50%;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      &::before {
        content: "";
        width: 100%;
        height: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          to top,
          rgba(51, 14, 71, 0.85),
          rgba(0, 0, 0, 0)
        );
      }

      p {
        width: 90%;
        height: 30%;
        position: absolute;
        left: 5%;
        bottom: 0;
        font-size: 16px;
        font-weight: 800;
        color: white;
      }
    }
  }
}

.el-carousel__item img {
  display: block;
  width: 100%;
  height: 100%;
}

.el-carousel__item div {
  width: 300px;
  height: auto;
  padding: 23px;
  background: white;
  position: absolute;
  bottom: 10px;
  right: 10px;

  h3 {
    display: inline-block;
    font-size: 18px;
    padding-bottom: 7px;
    color: #6510ad;
    border-bottom: 1px solid #6510ad;
  }

  p {
    color: #636363;
    font-size: 10px;
    margin-top: 11px;
  }
}

.swiper {
  width: 100%;
  height: auto;
  position: relative;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.peopleBox {
  width: 100%;
  height: 178px;
  margin: 100px auto 95px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 363px;
    background: url("	https://www.tsinghua.edu.cn/image/bg6.jpg") center center /
      100% 100%;
    position: absolute;
    top: -130px;
    left: 0;
    z-index: -1;
  }

  .swipers{
    width: 60%;
    height: 100%;
    margin: 0 auto;

    .el-carousel__container{
      width: 100%;
      height: 178px;
      position: relative;

      .el-carousel__item:nth-child(2n){
        background: transparent;
      }

      .el-carousel__item:nth-child(2n+1){
        background: transparent;
      }
      
      .text{
        width: 80%;
        height: 100px;
        padding: 0 0 0 80px;
        box-sizing: border-box;
        background: transparent;
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &::before{
          content: "";
          width: 56px;
          height: 45px;
          position: absolute;
          top: 10px;
          left: 10px;
          background: url('https://www.tsinghua.edu.cn/image/qd.png') center center / 100% 100%;
        }

        p{
          color: white;
          font-size: 11px;
        }

        span{
          color: #ffffff99;
          font-size: 8.8px;
          position: relative;

          &::before{
            content: "";
            width: 50px;
            border-top: 1px solid rgba(255,255,255, 0.36);
            position: absolute;
            top: -10px;
            left: 0;
          }
        }

        h2{
          font-size: 14px;
          color: white;
        }
      }

      img{
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
}

.infos{
  width: 50%;
  height: 123px;
  margin: 0 10% 60px;
  border-left: 1px solid #6510ad;
  padding-left: 22px;

  h3{
    font-size: 25px;
    margin-bottom: 14px;
    font-weight: 500;
  }
  ul{
    width: 60%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li{
      width: 48%;
      height: 25px;
      list-style: none;
      font-size: 13px;
      color: #791cb3;
      line-height: 25px;
    }
  }
}
</style>
  