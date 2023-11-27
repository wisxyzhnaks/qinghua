<template>
    <div class="research">
      <img src="https://www.tsinghua.edu.cn/image/banner03.jpg" alt="">
      <div class="NyTopinfCon">
        <p>科学研究</p>
        <span>清华始终坚持面向世界科技前沿和国家重大战略需要，坚定地走中国特色自主创新之路。百年创新，硕果累累，清华师生在科技进步和学术发展中填补了一个又一个空白，刷新着一项又一项纪录，作出了重要的思想、理论和知识贡献。</span>
      </div>
    </div>
    <ul class="box">
      <li v-for="item,index in tableDate" :key="index">
        <div class="text">
          <h4>{{item.name}}</h4>
          <span>{{item.title}}</span>
          <p v-for="items,indexs in item.list" :key="indexs">{{items}}</p>
        </div>
        <img :src="item.img" alt="">
      </li>
    </ul>
    <div class="w14">
      <div class="title">
        <h5>学术科研在清华</h5>
        <span>查看更多</span>
      </div>
      <ul>
        <li v-for="item,index in twoDate" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
import { reactive } from "vue";

    let tableDate= reactive([
      {
        name:'科研项目',
        title:'科研项目是开展高水平科学研究和支撑高质量人才培养的重要依托，也是引领学科发展的重要力量。国家科技计划（专项、基金等）是我校科研项目和经费的重要来源。',
        img:'https://www.tsinghua.edu.cn/image/kyxm001.jpg',
        list:['科研项目概括','新立重大项目','重点推广项目']
      },
      {
        name:'科研机构',
        title:'清华大学科研机构根据其批准设立的主体不同，分为三类，包括政府批准机构、学校自主设立机构和学校与校外独立法人单位联合共建机构。',
        img:'https://www.tsinghua.edu.cn/image/kyxm002.jpg',
        list:['政府批建机构','自主设立机构','联合共建机构']
      },
      {
        name:'科研合作',
        title:'清华大学面向国民经济主战场，同国家战略发展地区、行业龙头企业等开展深度产学研合作，推进重大项目和平台建设，为创建创新型国家做出重要贡献。清华大学与世界一流大学、研究机构和海外知名跨国企业积极开展前瞻性、高水平的科研合作与交流，提升科研水平，促进学科建设，提升学校学术科研的国际影响力和知名度。',
        img:'https://www.tsinghua.edu.cn/image/kyxm003.jpg',
        list:['地方合作','企业合作','海外合作']
      },
      {
        name:'科研成果',
        title:'围绕建设世界一流大学，清华大学瞄准世界科技前沿和国家重大需求，在重大基础研究、战略高技术、服务经济发展等方面，取得了一批重要科研成果。',
        img:'https://www.tsinghua.edu.cn/image/kyxm004.jpg',
        list:['获奖成果','论文著作']
      },
      {
        name:'技术转移',
        title:'将现有的科技成果通过技术许可、技术转让、技术作价投资等方式转移到企业实施运用',
        img:'https://www.tsinghua.edu.cn/image/kyxm005.jpg',
        list:[]
      },
      {
        name:'学术交流',
        title:'随着学校世界一流大学建设和全球战略的全面推进，学校积极开展多渠道、高层次、实质性的科研合作与学术交流活动，高水平论坛、国际学术会议、学术期刊日益成为学校人才培养、科学研究、合作交流的重要平台。',
        img:'https://www.tsinghua.edu.cn/image/kyxm006.jpg',
        list:['清华论坛','国际会议','学术刊期']
      }
    ])

    let twoDate = reactive([
      {
        img: "https://www.tsinghua.edu.cn/__local/4/B8/42/AA99A2188D9C4FBC66C8D4376C5_9B905E0B_27D83.jpg",
        title:"材料学院刘锴课题组在二维可重构器件方面取得进展"
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/8/51/3C/85AFCAA7119EF2BB91BF2A2D10D_93E33996_1EEEB.jpg",
        title:"生命学院颉伟课题组揭示哺乳动物基因组激活到第一次细胞命运决定转换的..."
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/0/56/15/5500A4CBBD0E3DD354AA2DB3938_9CE3DF27_1C215.jpg",
        title:"自动化系谢震团队提出环状RNA的可编程翻译调控策略实现目标细胞类型的精..."
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/A/9A/AB/109897D5F6E242DA7411A52D979_853CB888_29748.jpg",
        title:"电子系方璐团队在大规模光电智能计算方向取得进展"
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/2/27/71/5F012ACC091192183D515E9C1EA_535F91C7_D1698.png",
        title:"化工系生物育种技术与装备团队报道高精度对蛋白表达特征进行大规模并行..."
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/A/A7/46/69F57FE915E2BEC393FECDC147D_AD1EB99A_1C9EA.jpg",
        title:"机械系温鹏团队合作提出机器学习超材料设计方法用于3D打印多孔骨植入物"
      }
    ])
  </script>
  
  <style lang="less">
    .research{
      width: 100%;
      height: auto;
      position: relative;

      img{
        display: block;
        width: 100%;
        height: auto;
      }

      .NyTopinfCon{
        width: 490px;
        height: 130px;
        position: absolute;
        bottom: 50px;
        left: 150px;

        p{
          font-size: 36.96px;
          margin-bottom: 11px;
          color: white;
        }
        span{
          font-size: 13px;
          color: white;
        }
      }
    }
    .box{
      width: 80%;
      height: auto;
      margin: 0 auto;
      padding: 60px;
      background: white;

      li{
        width: 100%;
        height: auto;
        list-style: none;
        margin: 60px 0;
        overflow: hidden;
        border-left: 4px solid #791cb5;
        display: flex;
        justify-content: space-between;


        &:nth-child(1){
          margin-top: 0;
        }
        &:nth-child(6){
          margin-bottom: 0;
        }

        .text{
          width: 40%;
          height: 100%;
          margin-left: 30px;

          h4{
            margin : 10px 0 11px;
            font-size: 26px;
          }

          span{
            display: block;
            line-height: 20px;
            margin-bottom: 23px;
            font-size: 10px;
            color: #929292;
          }

          p{
            font-size: 13px;
            color: #791cb5;
            margin: 5px 0;
          }
        }

        img{
          display: block;
          width: 323px;
          height: auto;
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

      &::before{
        content: "";
        position: absolute;
        top: -160px;
        left: 0; 
        width: 100%;
        z-index: -1;
        height: 511px;
        background: url('	https://www.tsinghua.edu.cn/image/bg4.jpg') center center / 100% 100% no-repeat;
      }

      .title{
        width: 90%;
        height: 30px;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5{
          padding-left: 15px;
          color: white;
          font-size: 18px;
          border-left: 2px solid white;
        }

        span{
          font-size: 10px;
          padding: 6px;
          color: white;
          border-bottom: 1px solid white;
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
  