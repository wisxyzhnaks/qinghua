<template>
  <div class="exchange">
    <img src="https://www.tsinghua.edu.cn/images/444.png" alt="" />
    <div class="NyTopinfCon">
      <p>合作交流</p>
      <span>清华大学深度参与国家创新驱动发展战略实施，与多个部委、省市、企业等深入开展科技、人才、教育、咨询等全方位的合作。清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动，加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系，在面向全球性重大问题进行学术研究、科技研发和决策咨询方面发挥了重要作用。</span>
    </div>
  </div>
  <div class="hzjlBox">
    <h4>国内合作</h4>
    <p>清华大学坚持服务国家，深度参与创新驱动发展战略实施，建设校地合作研究院，与各级地方政府、企业、高校、中央部委、事业单位等国内合作对象，在科学研究、人才培养、终身教育、战略咨询等方面开展全面合作。</p>
    <ul>
      <li v-for="item,index in tableDate" :key="index">
        {{item.name}}
        <p v-for="items,indexs in item.list" :key="indexs">{{items}}</p>
      </li>
    </ul>
  </div>
  <div class="box">
    <div class="hzjlBox2">
    <h4>国际合作</h4>
    <p>清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动，加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系，在面向全球性重大问题进行学术研究、科技研发和决策咨询方面发挥了重要作用。通过联合培养、学生交换、开设海外名师讲堂和主办国际会议等多种形式，培养具有全球视野、能够适应国际竞争的拔尖创新人才；通过策划推进重大国际文化和学术交流活动，提升学校国际声誉和学术影响力。</p>
    <ul>
      <li v-for="item,index in twoDate" :key="index">
        {{item.name}}
        <p v-for="items,indexs in item.list" :key="indexs">{{items}}</p>
      </li>
    </ul>
    </div>
  </div>
  <div class="w14">
      <div class="title">
        <h5>合作交流最新动态</h5>
        <span>查看更多</span>
      </div>
      <ul>
        <li v-for="item,index in threeDate  " :key="index">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>

</template>
  
<script setup>

import { reactive } from "vue";

  let tableDate = reactive([
    {
      name:'全面合作',
    },
    {
      name:"科研合作",
      list:['科学研究','技术转移']
    },
    {
      name:"人才培养与交流",
      list:['学生就业','学生社会实践']
    },
    {
      name:"终生教育",
    },
    {
      name:"战略咨询与智库",
    },
    {
      name:"校地合作研究院",
    },
    {
      name:"对口支援与定点帮扶",
    }
  ])

  let twoDate = reactive([
    {
      name:'全球战略',
      list:['海外基地','世界大学联盟']
    },
    {
      name:'全球胜任力'
    },
    {
      name:'国际学生学者'
    },
    {
      name:'国际校园'
    },
    {
      name:'海外科研合作'
    },
    {
      name:'暑期学校',
      list:['云上全球暑期学校GSS','院系暑期学校']
    },
    {
      name:'清华共识'
    }
  ])

  let threeDate = reactive([
      {
        img: "https://www.tsinghua.edu.cn/__local/0/0D/A0/B356C2307B691BF49884A74CA1C_658C4CB2_2B61B.jpeg",
        title:"校长王希勤会见新加坡卫生部部长王乙康"
      },
      {
        img: "	https://www.tsinghua.edu.cn/__local/A/53/0D/2E353E78C6D59767D87C2015DEB_DA35FE4A_679CD5.jpg",
        title:"校长王希勤赴广州调研 深化市校合作"
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/8/C1/78/8D2878B4A77EA54733CDF7DB74E_2A67E8B2_1CD6E.png",
        title:"校党委副书记过勇带队赴烟台、青岛访问并看望慰问校友"
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/F/4D/91/DD614E02AE8AA5366229ECD6D90_676DECBF_3332D.jpeg",
        title:"石家庄市与清华大学座谈会暨全面合作框架协议签署仪式举行"
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/9/45/14/DEC3950BE668B900889844B6DCE_52E2623E_3CEBA.jpeg",
        title:"校长王希勤会见意大利驻华大使安博思一行"
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/7/EC/99/0E221845456575053DFB77CC328_4F971F88_2D3F8.png",
        title:"校党委副书记过勇会见国际原子能机构人力资源司司长彼得·福洛..."
      }
    ])

</script>
  
  <style lang="less" scoped>
.exchange {
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
.hzjlBox{
  width: 80%;
  height: auto;
  margin: 60px auto 0;

  h4{
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    padding-bottom: 11px;
    margin-bottom: 23px;
    position: relative;

    &::after{
      content: "";
      width: 59px;
      height: 4px;
      background: #791cb5;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -29.5px;
    }
  }

  p{
    display: block;
    font-size: 13px;
    color: #919191;
    width: 70%;
    text-align: center;
    margin: 9.3px auto 40px;
  }

  ul{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;

    li{
      list-style: none;
      width: 25%;
      height: auto;
      font-size: 27px;
      margin-bottom: 65px;
      padding-left: 27px;
      border-left: 1px solid #791cb3;

      p{
        margin: 0;
        text-align: left;
        font-size: 16px;
        color: #791cb3;
        margin: 15px 0;
      }
    }
  }
}

.box{
  width: 100%;
  height: auto;
 background: url('https://www.tsinghua.edu.cn/image/gjheBG.jpg') center center / 100% 100% no-repeat;

  .hzjlBox2{
  width: 80%;
  height: auto;
  padding-top: 69px;
  margin: 60px auto 0;

  h4{
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    padding-bottom: 11px;
    margin-bottom: 23px;
    position: relative;
    color: white;

    &::after{
      content: "";
      width: 59px;
      height: 4px;
      background: white;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -29.5px;
    }
  }

  p{
    display: block;
    font-size: 13px;
    color: white;
    width: 70%;
    text-align: center;
    margin: 9.3px auto 40px;
  }

  ul{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    background: white;
    padding: 0 93px;

    li{
      list-style: none;
      width: 33%;
      height: auto;
      font-size: 27px;
      margin-top: 65px;
      padding-left: 27px;
      border-left: 1px solid #791cb3;

      p{
        margin: 0;
        text-align: left;
        font-size: 16px;
        color: #791cb3;
        margin: 15px 0;
      }
    }
  }
}
}

.w14{
      width: 100%;
      height: auto;
      padding: 0 5%;
      margin: 100px 0 66px;
      box-sizing: border-box;
      position: relative;

      .title{
        width: 90%;
        height: 30px;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5{
          padding-left: 15px;
          color: black;
          font-size: 22px;
          font-weight: 500;
          border-left: 2px solid #791cb3;
        }

        span{
          font-size: 10px;
          padding: 6px;
          color: #791cb3;
          border-bottom: 1px solid #791cb3;
        }
      }

      ul{
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li{
          width: 33%;
          height: 237px;
          list-style: none;
          background: blue;
          position: relative;

          img{
            display: block;
            width: 100%;
            height: 100%;
          }
          
          p{
            width: 90%;
            position: absolute;
            left: 5%;
            bottom: 20px;
            font-size: 13px;
            font-weight: 800;
            color: white;
          }
        }
      }
    }
</style>
  