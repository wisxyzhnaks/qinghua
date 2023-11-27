<template>
  <div class="new">
    <div class="wal">
      <div class="logo"></div>
      <div class="btns">
        <div class="inputs">
          <input type="text" />
          <button></button>
        </div>
        <div class="wb">
          <img src="https://www.tsinghua.edu.cn/new/image/btn44_1.png" alt="" />
        </div>
        <div class="wb">
          <img src="https://www.tsinghua.edu.cn/new/image/btn44_2.png" alt="" />
        </div>
        <div class="wb">
          <img
            src="https://www.tsinghua.edu.cn/new/image/db_dy_tb.png"
            alt=""
          />
        </div>
        <div class="list">
          <img src="https://www.tsinghua.edu.cn/new/image/navA.png" alt="" />
        </div>
      </div>
    </div>
    <div class="wal2">
      <div class="swipers">
        <div class="imgs" ref="imgs">
          <div class="one" v-for="(item, index) in tableDate" :key="index">
            <img :src="item.img" alt="" />
            <div class="names">{{ item.name }}</div>
            <div class="titles">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <ul class="right">
        <li
          v-for="(item, index) in tableDate"
          :key="index"
          @mouseover="change(index)"
          :class="{ swiperChange: swiperIndex === index }"
        >
          <div class="name">{{ item.name }}</div>
          <img :src="item.img" alt="" />
        </li>
      </ul>
    </div>
    <div class="wal3">
      <h3>
        专题推荐
        <p>|</p>
        <span>更多></span>
      </h3>
      <el-carousel indicator-position="none">
        <el-carousel-item v-for="item in twoDate" :key="item">
          <div class="imgs" v-for="(items, indexs) in item.list" :key="indexs">
            <img :src="items.img" alt="" />
            <div class="name">{{ items.name }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="wal4">
      <div class="lefts">
        <ul class="left">
          <li
            v-for="(item, index) in threeDate"
            :key="index"
            :class="{ borderChange: borderIndex === index }"
            @mouseover="checks(index)"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul class="right">
          <li v-for="(item, index) in fourDate" :key="index">
            <img :src="item.img" alt="" />
            <div class="names">
              <span>{{ item.name }}</span>
              <p>{{ item.title }}</p>
            </div>
            <div class="times">
              <div>{{ item.day }}</div>
              <span>{{ item.time }}</span>
            </div>
          </li>
          <div class="more">更多 ></div>
        </ul>
      </div>
      <div class="rights">
        <ul class="top">
          <li
            v-for="(item, index) in fiveDate"
            :key="index"
            :style="{
              background: colorIndex === index ? '#791CB5' : 'transparent',
              color: colorIndex === index ? 'white' : 'black',
            }"
            @mouseover="changeColor(index)"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul class="main">
          <li v-for="(item, index) in sixDate" :key="index">
            <div class="times">
              <div class="day">{{ item.day }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="name">{{ item.name }}</div>
          </li>
          <div class="more">更多 ></div>
        </ul>
      </div>
    </div>
    <ul class="wal5">
      <li v-for="(item, index) in sevenDate" :key="index">
        <img :src="item.img" alt="" />
        <div class="names">
          <div class="name">{{ item.name }}</div>
          <div class="title">{{ item.title }}</div>
        </div>
      </li>
    </ul>
    <div class="wal6">
      <ul>
        <li v-for="(item, index) in eightDate" :key="index">
          <div class="title">
            <span>{{ item.name }}</span>
            <p>更多 ></p>
          </div>
          <ul>
            <li v-for="(items, indexs) in item.list" :key="indexs">
              <div class="time">{{ items.time }}</div>
              <div class="name">{{ items.title }}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="wal7">
      <img src="https://www.tsinghua.edu.cn/new/image/logo218.png" alt="" />
      <div class="swiper">
        <el-carousel :interval="2000" type="card" :autoplay="true" height="120px" indicator-position="none">
          <el-carousel-item v-for="item in nineDate" :key="item">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="container">
        <div class="link">关于我们 <span>|</span> 友情链接 <span>|</span> 清华地图 <span>|</span> 意见反馈</div>
        <div class="content">
          <div>清华大学新闻中心版权所有，清华大学新闻网编辑部维护，电子信箱: news@tsinghua.edu.cn</div>
          <div>Copyright 2001-2020 news.tsinghua.edu.cn. All rights reserved.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

let tableDate = reactive([
  {
    img: "https://www.tsinghua.edu.cn/__local/1/0A/31/592C179D9BB49BAA9519E252554_3F942B4D_44CA64.jpg",
    name: "清华大学6位教师5位校友当选中国科学院、中国工程院院士，2位校友当选中国工程院外籍院士",
    title:
      "11月22日，中国科学院、中国工程院公布了2023年院士增选结果。清华大学航天航空学院教授李路明、生命科学学院教授时松海、计算机科学与技术系教授胡事民、交叉信息研究院教授段路明、生命科学学院教授颜宁共5位教师当选为中国科学院院士。清华大学能源与动力工程系教授吕俊复当选为中国工程院院士。此外，还有5位校友当选中国科学院、中国工程院院士，2位校友当选中国工程院外籍院士。",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/1/D8/28/88203B6675F4E9BF48874F3B8B0_613CA067_305D4.jpeg",
    name: "乌拉圭总统拉卡列访问清华大学并演讲",
    title:
      "11月21日下午，乌拉圭总统路易斯·拉卡列·波乌（Luis Lacalle Pou）访问清华大学。清华大学校长王希勤与拉卡列总统进行了会谈。拉卡列总统在清华大学主楼发表了主题演讲。",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/F/75/62/BE5762FD21A90EEC22D65C66C2D_70AB9EA1_36F3A7.jpg",
    name: "2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项，二等奖9项",
    title:
      "近日，《北京市人民政府关于2022年度北京市科学技术奖励的决定》公布，清华大学高等研究院教授王小云荣获突出贡献中关村奖；清华大学共获得成果奖28项，其中作为第一完成单位16项，包括一等奖7项，二等奖9项，牵头获一等奖项目数居所有报奖单位首位。",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/F/5A/F8/56B2100EC09D5E2676957C99088_7C01BC31_379D5.jpeg",
    name: "纪念蒋南翔同志诞辰110周年座谈会在清华大学举行",
    title:
      "11月10日上午，清华大学在主楼接待厅举行纪念蒋南翔同志诞辰110周年座谈会，缅怀他为党和国家、为清华大学事业发展作出的卓越贡献，学习和继承他为祖国、为人民永久奋斗、赤诚奉献的崇高风范，激励全校师生员工踔厉奋发、勇毅前行，努力开拓中国特色世界一流大学高质量发展新局面。",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/1/D8/28/88203B6675F4E9BF48874F3B8B0_613CA067_305D4.jpeg",
    name: "清华大学召开2023年文科工作会议",
    title:
      "11月7日，清华大学以“建构中国自主的知识体系中的清华使命与担当”为主题召开2023年文科工作会议。校党委书记、文科工作领导小组组长邱勇，校长王希勤，副校长、文科工作领导小组副组长李路明，校务委员会副主任谢维和，以及刘巨德、吴潜涛、阎学通、胡鞍钢、崔建远、张国刚、陈国青、薛澜、张明楷等文科资深教授出席会议。副校长、文科工作领导小组副组长彭刚主持会议。",
  },
]);

let twoDate = reactive([
  {
    id: 0,
    list: [
      {
        name: "清华大学学习贯彻习近平新时代中国特色社会主义思想主题教育",
        img: "https://www.tsinghua.edu.cn/__local/3/89/6B/3FF3D87AB0389BBA1995A818133_E4B04CBE_2038D.jpg",
      },
      {
        name: "深入学习贯彻党的二十大精神",
        img: "	https://www.tsinghua.edu.cn/__local/E/C9/10/0731547FCC8BFD911978DE60D5A_E548DF2E_26159.jpg",
      },
      {
        name: "深入学习贯彻习近平总书记重要讲话精神",
        img: "https://www.tsinghua.edu.cn/__local/4/4C/3D/FA56A99D6D60D3F731579BDF7D7_9CB46D6C_F93F.jpg",
      },
      {
        name: "纪念蒋南翔同志诞辰110周年",
        img: "https://www.tsinghua.edu.cn/__local/1/8E/DF/50AB9B24A23A89249A844F811E3_47271F27_40A36.jpg",
      },
    ],
  },
  {
    id: 1,
    list: [
      {
        name: "你好，新同学！——2023开学季",
        img: "https://www.tsinghua.edu.cn/__local/0/99/3D/F677635F664C2261BD87EA9A37B_4307E342_31347.jpg",
      },
      {
        name: "难忘2023毕业季",
        img: "https://www.tsinghua.edu.cn/__local/E/A7/9F/77072D41483BAAEF0D089FFDEFC_59DFFED5_23F54.jpg",
      },
      {
        name: "清华大学“双肩挑”政治辅导员制度建立70周年",
        img: "	https://www.tsinghua.edu.cn/__local/4/1F/47/A01C5F976B087726D939C82D0D4_3A4E4EFD_18B3E.jpg",
      },
      {
        name: "庆祝清华大学建校112周年",
        img: "https://www.tsinghua.edu.cn/__local/A/CB/45/FF4E44D6222B6F01B995E5479F5_2979EDCC_45C28.jpg",
      },
    ],
  },
  {
    id: 2,
    list: [
      {
        name: "清华五道口全球金融论坛",
        img: "https://www.tsinghua.edu.cn/__local/0/A0/B2/2ABF4FEE8C7F34B10A935478802_4A175E75_26310.jpg",
      },
      {
        name: "中国共产党清华大学第十五次党员代表大会",
        img: "	https://www.tsinghua.edu.cn/__local/E/EE/8F/AB609D2DDC2A85793AE20681A89_B194A09F_17CB8.jpg",
      },
      {
        name: "聚焦2023全国两会",
        img: "	https://www.tsinghua.edu.cn/__local/0/87/4A/22D7ABB8CF02D7E77AFC30DFA4B_AFB45586_2810E.jpg",
      },
      {
        name: "第26次教育工作讨论会",
        img: "https://www.tsinghua.edu.cn/__local/6/B1/C9/F0D8205A8087E32DDFA4E6A2F6E_2261B911_857F7.jpg",
      },
    ],
  },
]);

let threeDate = reactive([
  {
    name: "综合时讯",
    list: [
      {
        img: "https://www.tsinghua.edu.cn/__local/F/64/67/6C061A6F8320B7AC20ED3FB9E17_190B7876_4C38F.jpeg",
        name: "清华大学第二十五次校友工作会议暨清华校友总会成立110周年纪念大会举行",
        title:
          "11月18日至19日，校长、校友总会会长王希勤在广州出席清华大学第二十五次校友工作会议暨清华校友总会成立110周年纪念大会、清华校友科创发展大会，并与当地校友代表座谈。广州市委副书记、代市长孙志洋出席清华校...",
        time: "2023.11",
        day: "21",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/A/2B/3A/61256CBEE980FE2A5180DE3D04D_ABB04D4E_3D002.jpeg",
        name: "第六届“清华会讲”在京举办 中外学者共论“文明互鉴与和平发展”",
        title:
          "11月18日至19日，第六届“清华会讲”举行，来自海内外的数十位知名专家学者齐聚一堂，围绕“文明互鉴与和平发展”主题开展多领域交叉的发言与研讨，为践行全球发展倡议与全球文明倡议贡献学术智慧和力量。清华大...",
        time: "2023.11",
        day: "20",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/6/6E/72/D1C126C661838BE4F2A1C3D6368_B78D4FAB_2F819.jpeg",
        name: "清华大学人文学院人文先贤群雕落成典礼举行",
        title:
          "11月14日下午，清华大学人文学院人文先贤群雕落成典礼在蒙民伟人文楼举行。校长王希勤出席典礼并致辞。副校长彭刚，学校老领导胡显章、谢维和，先贤亲属代表和捐赠人代表等出席典礼。人文学院党委书记马银琴主持...",
        time: "2023.11",
        day: "16",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/5/54/B2/50C8F952DED84AA1BEAAB015807_5DCAFEA6_24E3E.png",
        name: "亚洲大学联盟2023年执行委员会会议举行",
        title:
          "11月8日至9日，亚洲大学联盟2023年执行委员会会议在中国香港举行。会议由本年度联盟执行主席单位香港科技大学主办。清华大学副校长王宏伟率团出席会议并主持讨论环节。来自联盟15所成员大学及联盟秘书处的37位代...",
        time: "2023.11",
        day: "15",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/4/C0/61/E56EB66D16FA0A011169B76CE2D_7FC462C6_42284.jpeg",
        name: "清华大学物理人才培养“攀登计划”启动仪式举行",
        title:
          "11月12日下午，清华大学物理人才培养“攀登计划”启动仪式在西阶教室举行。清华大学党委书记邱勇、副校长彭刚，“攀登计划”首席教授、中国科学院院士朱邦芬，“攀登计划”指导委员会主任钱颖一和部分委员等出席...",
        time: "2023.11",
        day: "15",
      },
    ],
  },
  {
    name: "人才培养",
    list: [
      {
        img: "https://www.tsinghua.edu.cn/__local/3/56/32/BE3AD703DDAC7ADBA050406F10A_3DF842CA_28368.png",
        name: "清华大学三位教师在第五届全国高校混合式教学设计创新大赛中获得佳绩",
        title:
          "近日，“第五届全国高校混合式教学设计创新大赛”落下帷幕，清华大学推选的三位教师入围复赛并取得优异成绩。体育部副教授李波以“二年级轮滑课”课程参赛并获得大赛一等奖，车辆学院副教授王波以“汽车造型二维...",
        time: "2023.11",
        day: "21",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/F/75/62/BE5762FD21A90EEC22D65C66C2D_70AB9EA1_36F3A7.jpg",
        name: "2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等...",
        title:
          "近日，《北京市人民政府关于2022年度北京市科学技术奖励的决定》公布，清华大学高等研究院教授王小云荣获突出贡献中关村奖；清华大学共获得成果奖28项，其中作为第一完成单位16项，包括一等奖7项，二等奖9项，牵...",
        time: "2023.11",
        day: "16",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/4/C0/61/E56EB66D16FA0A011169B76CE2D_7FC462C6_42284.jpeg",
        name: "清华大学物理人才培养“攀登计划”启动仪式举行",
        title:
          "11月12日下午，清华大学物理人才培养“攀登计划”启动仪式在西阶教室举行。清华大学党委书记邱勇、副校长彭刚，“攀登计划”首席教授、中国科学院院士朱邦芬，“攀登计划”指导委员会主任钱颖一和部分委员等出席...",
        time: "2023.11",
        day: "15",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/3/DC/8C/E99BB1D1DAB96B970E6ACAE1212_C036A381_29634.png",
        name: "2023年清华大学本科生特等奖学金答辩会举行",
        title:
          "11月9日下午，2023年清华大学本科生特等奖学金答辩会在主楼后厅举行，来自不同院系的15位候选人参加了现场答辩。校党委副书记过勇出席答辩会。答辩环节结束后，主持人宣布了2023年清华大学本科生特等奖学金答辩现...",
        time: "2023.11",
        day: "13",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/2/15/AA/371E85870E39421E07BD1DE6038_D0B9AF0C_337AE.png",
        name: "第一届“王玉明科技强基奖”颁奖典礼举行",
        title:
          "11月7日上午，第一届“王玉明科技强基奖”颁奖典礼在清华大学李兆基科技大楼举行。清华大学副校长、中国科学院院士姜培学出席典礼并致辞。",
        time: "2023.11",
        day: "09",
      },
    ],
  },
  {
    name: "科学研究",
    list: [
      {
        img: "https://www.tsinghua.edu.cn/__local/4/B8/42/AA99A2188D9C4FBC66C8D4376C5_9B905E0B_27D83.jpg",
        name: "材料学院刘锴课题组在二维可重构器件方面取得进展",
        title:
          "近日，清华大学材料学院刘锴课题组以双极性的二碲化钼（MoTe2）作为沟道材料，基于“有效栅压”调控的沟道梯度掺杂机制，在结构简单的单栅极晶体管器件中实现了迄今报道的最为丰富的可重构功能，为高性能、多功能...",
        time: "2023.11",
        day: "15",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/8/51/3C/85AFCAA7119EF2BB91BF2A2D10D_93E33996_1EEEB.jpg",
        name: "生命学院颉伟课题组揭示哺乳动物基因组激活到第一次细胞命运决定转换的分...",
        title:
          "清华大学生命学院颉伟课题组于11月7日在《细胞研究》（Cell Research）期刊上以长文形式报道了题为“NR5A2在全能性胚胎中连接合子基因组激活与第一次谱系分化”（NR5A2 connects zygotic genome activation to th...",
        time: "2023.11",
        day: "15",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/0/56/15/5500A4CBBD0E3DD354AA2DB3938_9CE3DF27_1C215.jpg",
        name: "自动化系谢震团队提出环状RNA的可编程翻译调控策略实现目标细胞类型的精准...",
        title:
          "近日，清华大学自动化系、北京信息科学与技术国家研究中心谢震课题组在一项最新研究中，开发了一种核糖体内部进入位点的工程改造技术，实现了仅用单个环状RNA分子即可感应多种细胞内源微小RNA（miRNA）信号，控制...",
        time: "2023.11",
        day: "10",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/A/9A/AB/109897D5F6E242DA7411A52D979_853CB888_29748.jpg",
        name: "电子系方璐团队在大规模光电智能计算方向取得进展",
        title:
          "近日，清华大学电子工程系方璐副教授课题组提出了面向大规模光电智能计算的“光学-人工双神经元学习架构（DuAl-Neuron opTical-artificial lEarning,DANTE）”，突破了大规模光电神经网络物理建模复杂、参数优化...",
        time: "2023.11",
        day: "10",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/2/27/71/5F012ACC091192183D515E9C1EA_535F91C7_D1698.png",
        name: "化工系生物育种技术与装备团队报道高精度对蛋白表达特征进行大规模并行表...",
        title:
          "近日，清华大学化工系生物育种技术与装备团队报道了一种高精度的对蛋白表达特征进行大规模并行表征的方法，该方法可应用于对混合文库中各个基因型对应的蛋白表达均值和异质性的高通量表征。",
        time: "2023.11",
        day: "09",
      },
    ],
  },
  {
    name: "交流合作",
    list: [
      {
        img: "https://www.tsinghua.edu.cn/__local/0/0D/A0/B356C2307B691BF49884A74CA1C_658C4CB2_2B61B.jpeg",
        name: "校长王希勤会见新加坡卫生部部长王乙康",
        title:
          "11月20日上午，新加坡卫生部部长王乙康一行访问清华大学，校长王希勤在工字厅东厅会见来宾，双方就拓展未来合作进行交流会谈。",
        time: "2023.11",
        day: "22",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/A/53/0D/2E353E78C6D59767D87C2015DEB_DA35FE4A_679CD5.jpg",
        name: "校长王希勤赴广州调研 深化市校合作",
        title:
          "11月17日至19日，校长王希勤率队赴广州访问调研。广东省委常委、广州市委书记郭永航，市委副书记、代市长孙志洋分别会见王希勤一行，并围绕进一步深化市校合作、共同建好用好粤港澳大湾区国家技术创新中心和全国...",
        time: "2023.11",
        day: "21",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/8/C1/78/8D2878B4A77EA54733CDF7DB74E_2A67E8B2_1CD6E.png",
        name: "校党委副书记过勇带队赴烟台、青岛访问并看望慰问校友",
        title:
          "11月13日至14日，清华大学党委副书记过勇带队赴烟台、青岛访问，走访海军航空大学，出席海军招飞工作会，并与青岛校友代表座谈。海军政治工作部相关领导，海军航空大学少将政委王军东，山东省委常委、烟台市委书...",
        time: "2023.11",
        day: "20",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/F/4D/91/DD614E02AE8AA5366229ECD6D90_676DECBF_3332D.jpeg",
        name: "石家庄市与清华大学座谈会暨全面合作框架协议签署仪式举行",
        title:
          "11月15日上午，石家庄市与清华大学座谈会暨合作协议签署仪式在清华大学工字厅东厅举行。校长王希勤会见来访的河北省委常委、石家庄市委书记张超超一行，双方围绕深化市校合作进行座谈交流并签署全面合作框架协议...",
        time: "2023.11",
        day: "15",
      },
      {
        img: "	https://www.tsinghua.edu.cn/__local/9/45/14/DEC3950BE668B900889844B6DCE_52E2623E_3CEBA.jpeg",
        name: "校长王希勤会见意大利驻华大使安博思一行",
        title:
          "11月9日上午，意大利驻华大使安博思（Massimo Ambrosetti）一行访问清华大学。校长王希勤在工字厅会见来宾，双方就未来进一步拓展合作进行会谈。",
        time: "2023.11",
        day: "11",
      },
    ],
  },
  {
    name: "清华人物",
    list: [
      {
        img: "https://www.tsinghua.edu.cn/__local/F/F3/8D/1E6930B739F2D9F24E62921F0EE_220C781D_23F3D.jpeg",
        name: "【新百年教学成就奖】崔建莲：永远都充满期待的课堂 源于最初的梦想与热爱",
        title:
          "在她的课堂上，有同学解开了更多的难题，有同学锻炼了表达的能力，有同学在互助间收获了友谊，有同学在挫折中鼓起勇气重新塑造了自己。二十余年的执教生涯中，她教过的本科生数以千计，微积分总能被她讲述得饱含...",
        time: "2023.11",
        day: "17",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/2/12/62/ED168127C757BF0387F2EC55BE5_8F352309_25316B.jpeg",
        name: "化工系魏飞团队：在分子世界里寻找绿色密钥",
        title:
          "在清华大学化学工程系教授魏飞的日常工作中，与工业界频繁的互动占据了他几乎一半的时间，这是一个窗口，魏飞由此体会到现代化工企业的痛点和难点。为此，他带领团队聚力攻关，突破了一批“卡脖子”难题，自觉承...",
        time: "2023.11",
        day: "14",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/3/EC/68/9962149299F4BE2548B22685306_8AD22DD5_29D6BF.jpg",
        name: "清华大学教授薛其坤荣获2024年度美国物理学会巴克利奖",
        title:
          "北京时间2023年10月24日，美国物理学会（American Physical Society）宣布，中国科学院院士、清华大学教授、南方科技大学校长薛其坤获得本年度的巴克利奖（2024 Oliver E. Buckley Condensed Matter Physics Priz...",
        time: "2023.10",
        day: "24",
      },
      {
        img: "	https://www.tsinghua.edu.cn/__local/9/6F/4A/853E73D1B0111A74BC01F6A267C_2383C1BE_9AA76.png",
        name: "【新百年教学成就奖】张雄：讲台不止三尺，更有广阔天地",
        title:
          "作为全村第一个考上大学的人，他用自身努力撼动命运的齿轮，以平凡的出身书写不凡的人生。他将力学理论从生活里带到课堂上，再引领学生将课堂所学投射到更广阔的天地。一心耕耘，几番桃李，学生眼中的他是“严肃...",
        time: "2023.10",
        day: "16",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/7/C9/95/3AE786DBF2226C0CD07526A57D9_831514DD_2F782.jpg",
        name: "刘光廷：一颗报国心，一世筑坝人",
        title:
          "清华大学水利水电工程系教授刘光廷，凭一腔朴素的知识报国情怀，几十年在水工结构科学技术施工工程研究方面探索创新，先后参加了国内32座水利水电工程科研和设计工作，解决了大量工程关键问题和理论依据。",
        time: "2023.10",
        day: "08",
      },
    ],
  },
  {
    name: "箐箐校园",
    list: [
      {
        img: "	https://www.tsinghua.edu.cn/__local/0/4D/BF/F686D91227BD8A28012EB5F73A2_121646E2_62A0AB.jpg",
        name: "清华大学举办“导学热线”专家茶话会",
        title:
          "11月16日，清华大学举行“导学热线”专家茶话会。校关心下一代工作委员会副主任韩景阳出席活动并讲话。",
        time: "2023.11",
        day: "22",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/6/B8/1B/91106CFC2DC4523039E7FD30DB4_2D1C9FA9_3770B7.jpg",
        name: "“胜利号角”武警部队交响合唱音乐会走进清华大学",
        title:
          "11月18日晚，“胜利号角”武警部队交响合唱音乐会——清华大学专场在新清华学堂举行。本次演出旨在创新国防主题教育形式，引导师生深入学习贯彻习近平文化思想，推进爱国主义教育，丰富校园文化生活。",
        time: "2023.11",
        day: "21",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/4/08/1D/92DBEE7EBEA9F754377A4DF081D_30EE8606_2DF93.png",
        name: "清华大学举行第二十届消防技能运动会",
        title:
          "11月9日是第32个全国消防日，主题为“预防为主，生命至上”。为持续提升学校各单位基层消防应急能力，11月9日下午，清华大学第二十届消防技能运动会在紫荆操场举行。副校长郑力出席。",
        time: "2023.11",
        day: "14",
      },
      {
        img: "	https://www.tsinghua.edu.cn/__local/7/62/2D/34B18F0E1C7606DB59D2313CCD0_077289F9_40F2B1.jpg",
        name: "清华大学举行离退休教职工八十寿辰祝寿会",
        title:
          "10月23日重阳节上午，清华大学离退休教职工八十寿辰祝寿会在熊知行楼老年活动中心二层多功能厅举行，78位年满80周岁的离退休教职工齐聚一堂。校党委副书记许庆红，学校老领导胡显章、岑章志出席。祝寿会由离退休...",
        time: "2023.11",
        day: "09",
      },
      {
        img: "https://www.tsinghua.edu.cn/__local/5/16/4F/1763684D1145939A98DE356EEFA_0A7E9F9E_253F8.png",
        name: "副校长王宏伟通过“开放交流时间”与中外学生座谈交流",
        title:
          "近日，副校长王宏伟通过“开放交流时间”（Open Office Hour）与21名中外学生在国际交流活动中心开展座谈交流。",
        time: "2023.11",
        day: "03",
      },
    ],
  },
]);

let imgs = ref();

let colorIndex = ref(0);

let borderIndex = ref(0);

let swiperIndex = ref(0);

let fourDate = reactive([
  {
    img: "https://www.tsinghua.edu.cn/__local/F/64/67/6C061A6F8320B7AC20ED3FB9E17_190B7876_4C38F.jpeg",
    name: "清华大学第二十五次校友工作会议暨清华校友总会成立110周年纪念大会举行",
    title:
      "11月18日至19日，校长、校友总会会长王希勤在广州出席清华大学第二十五次校友工作会议暨清华校友总会成立110周年纪念大会、清华校友科创发展大会，并与当地校友代表座谈。广州市委副书记、代市长孙志洋出席清华校...",
    time: "2023.11",
    day: "21",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/A/2B/3A/61256CBEE980FE2A5180DE3D04D_ABB04D4E_3D002.jpeg",
    name: "第六届“清华会讲”在京举办 中外学者共论“文明互鉴与和平发展”",
    title:
      "11月18日至19日，第六届“清华会讲”举行，来自海内外的数十位知名专家学者齐聚一堂，围绕“文明互鉴与和平发展”主题开展多领域交叉的发言与研讨，为践行全球发展倡议与全球文明倡议贡献学术智慧和力量。清华大...",
    time: "2023.11",
    day: "20",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/6/6E/72/D1C126C661838BE4F2A1C3D6368_B78D4FAB_2F819.jpeg",
    name: "清华大学人文学院人文先贤群雕落成典礼举行",
    title:
      "11月14日下午，清华大学人文学院人文先贤群雕落成典礼在蒙民伟人文楼举行。校长王希勤出席典礼并致辞。副校长彭刚，学校老领导胡显章、谢维和，先贤亲属代表和捐赠人代表等出席典礼。人文学院党委书记马银琴主持...",
    time: "2023.11",
    day: "16",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/5/54/B2/50C8F952DED84AA1BEAAB015807_5DCAFEA6_24E3E.png",
    name: "亚洲大学联盟2023年执行委员会会议举行",
    title:
      "11月8日至9日，亚洲大学联盟2023年执行委员会会议在中国香港举行。会议由本年度联盟执行主席单位香港科技大学主办。清华大学副校长王宏伟率团出席会议并主持讨论环节。来自联盟15所成员大学及联盟秘书处的37位代...",
    time: "2023.11",
    day: "15",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/4/C0/61/E56EB66D16FA0A011169B76CE2D_7FC462C6_42284.jpeg",
    name: "清华大学物理人才培养“攀登计划”启动仪式举行",
    title:
      "11月12日下午，清华大学物理人才培养“攀登计划”启动仪式在西阶教室举行。清华大学党委书记邱勇、副校长彭刚，“攀登计划”首席教授、中国科学院院士朱邦芬，“攀登计划”指导委员会主任钱颖一和部分委员等出席...",
    time: "2023.11",
    day: "15",
  },
]);

let fiveDate = reactive([
  {
    name: "最新动态",
    info: "one",
    list: [
      {
        name: "原版音乐诗画剧《我愿以身许国》在清华大学首演",
        time: "2023.11",
        day: "24",
      },
      {
        name: "2023年度《柳叶刀人群健康与气候变化倒计时报告》发布",
        time: "2023.11",
        day: "24",
      },
      {
        name: "第二届全球青年气候周启动仪式暨第三届全球青年零碳未来峰会在清华大学举行",
        time: "2023.11",
        day: "24",
      },
      {
        name: "校党委副书记许庆红率清华大学青年教师骨干领航工作站成员赴江苏开展调研学习",
        time: "2023.11",
        day: "24",
      },
      {
        name: "2023年全校各单位统战工作会暨铸牢中华民族共同体意识专题讲座举行",
        time: "2023.11",
        day: "24",
      },
      {
        name: "中国法学会副会长甘藏春做客“国是大讲坛” 阐释当代中国法治政府建设",
        time: "2023.11",
        day: "24",
      },
      {
        name: "清华大学第二十例在校造血干细胞捐献者顺利完成捐献",
        time: "2023.11",
        day: "24",
      },
      {
        name: "北京市第二届暨清华大学第四届平安校园实验室安全知识大赛举行",
        time: "2023.11",
        day: "24",
      },
      {
        name: "危爆物品探测技术国家工程研究中心理事会、科技委换届聘任大会暨工作会议（2021-2023）举行",
        time: "2023.11",
        day: "24",
      },
      {
        name: "第六届清华大学世界法治论坛举行",
        time: "2023.11",
        day: "24",
      },
    ],
  },
  {
    name: "媒体清华",
    info: "two",
    list: [
      {
        name: "专访清华大学吴烨教授：深化减污降碳，机动车排放控制不可松懈",
        time: "2023.11",
        day: "24",
      },
      {
        name: "投身昌平建设，四名“清北”博士有话说",
        time: "2023.11",
        day: "24",
      },
      {
        name: "中国石油和清华大学打造卓越工程师培养“样板间”",
        time: "2023.11",
        day: "24",
      },
      {
        name: "《柳叶刀》系列期刊“西太平洋地区气候变化与健康适应专辑”在京发布",
        time: "2023.11",
        day: "24",
      },
      {
        name: "2023年度《柳叶刀人群健康与气候变化倒计时报告》发布",
        time: "2023.11",
        day: "24",
      },
      {
        name: "报告：北京蝉联全球第一科研城市",
        time: "2023.11",
        day: "24",
      },
      {
        name: "两份指数报告发布 中国城市创新生态仍有上升空间",
        time: "2023.11",
        day: "24",
      },
      {
        name: "133人新当选两院院士，清华6人当选，居高校之首",
        time: "2023.11",
        day: "24",
      },
      {
        name: "专访清华大学吴烨教授：深化减污降碳，机动车排放控制不可松懈",
        time: "2023.11",
        day: "24",
      },
      {
        name: "柳叶刀报告：去年热浪死亡人数增加两倍多，气候变化从你的健康里偷走了什么?",
        time: "2023.11",
        day: "24",
      },
    ],
  },
]);

let sixDate = reactive([
  {
    name: "原版音乐诗画剧《我愿以身许国》在清华大学首演",
    time: "2023.11",
    day: "24",
  },
  {
    name: "2023年度《柳叶刀人群健康与气候变化倒计时报告》发布",
    time: "2023.11",
    day: "24",
  },
  {
    name: "第二届全球青年气候周启动仪式暨第三届全球青年零碳未来峰会在清华大学举行",
    time: "2023.11",
    day: "24",
  },
  {
    name: "校党委副书记许庆红率清华大学青年教师骨干领航工作站成员赴江苏开展调研学习",
    time: "2023.11",
    day: "24",
  },
  {
    name: "2023年全校各单位统战工作会暨铸牢中华民族共同体意识专题讲座举行",
    time: "2023.11",
    day: "24",
  },
  {
    name: "中国法学会副会长甘藏春做客“国是大讲坛” 阐释当代中国法治政府建设",
    time: "2023.11",
    day: "24",
  },
  {
    name: "清华大学第二十例在校造血干细胞捐献者顺利完成捐献",
    time: "2023.11",
    day: "24",
  },
  {
    name: "北京市第二届暨清华大学第四届平安校园实验室安全知识大赛举行",
    time: "2023.11",
    day: "24",
  },
  {
    name: "危爆物品探测技术国家工程研究中心理事会、科技委换届聘任大会暨工作会议（2021-2023）举行",
    time: "2023.11",
    day: "24",
  },
  {
    name: "第六届清华大学世界法治论坛举行",
    time: "2023.11",
    day: "24",
  },
]);

let sevenDate = reactive([
  {
    img: "https://www.tsinghua.edu.cn/__local/B/BD/66/F352108D072624D1F53F0CB83F7_184BB12B_42048.jpg",
    name: "视频清华",
    title: "【大国重器中的清华人】清华“试飞人”",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/9/46/00/E074ACE21EE388D1C02371A3FE2_5AFB319F_93858.jpg",
    name: "视频清华",
    title: "霜降至！清华与你共赏绚烂与收获",
  },
  {
    img: "	https://www.tsinghua.edu.cn/__local/5/57/6C/F5FA075DBFA260DF658942CF6D0_C82FF46A_3CFAD.jpg",
    name: "视频清华",
    title: "首位来自中国的获奖者！清华教授薛其坤获国际凝聚态物理最高奖",
  },
  {
    img: "https://www.tsinghua.edu.cn/__local/0/5F/7B/8EA7455CCF631286CF27CF139DE_D691D5AA_3FC4B.jpg",
    name: "视频清华",
    title: " 清华大学原创话剧《马兰花开》国庆绽放香江",
  },
  {
    img: "	https://www.tsinghua.edu.cn/__local/D/37/5B/9B5674E920E3A4DDB1E4A759571_A35B5731_2A69E.jpg",
    name: "视频清华",
    title: "这支清华团队，专为空气“把脉问诊开良方”",
  },
  {
    img: "	https://www.tsinghua.edu.cn/__local/A/BA/47/017E13FC829DEC1B41C1DD51A6C_48BBBD81_55DC4.jpg",
    name: "视频清华",
    title: "【新生故事】自强少年程紫陌",
  },
]);

let eightDate = reactive([
  {
    name: "清华广角",
    list: [
      {
        time: "2023.11.24",
        title: "第五届国际药物分析前沿学术研讨会在清华大学举行",
      },
      {
        time: "2023.11.24",
        title: "2023年全校各单位统战工作会暨铸牢中华民族共同体意识专题讲座举行",
      },
      {
        time: "2023.11.24",
        title:
          "中国法学会副会长甘藏春做客“国是大讲坛” 阐释当代中国法治政府建设",
      },
    ],
  },
  {
    name: "清华史苑",
    list: [
      {
        time: "2023.10.16",
        title: "275封书信里的钱三强",
      },
      {
        time: "2023.10.13",
        title: "教育家影像：只为一张平静的书桌",
      },
      {
        time: "2023.05.22",
        title: "梁启超与中国图书馆事业",
      },
    ],
  },
  {
    name: "清华思客",
    list: [
      {
        time: "2023.11.24",
        title: "邹广文：肩负起建设中华民族现代文明的文化使命",
      },
      {
        time: "2023.11.23",
        title: "张国刚：关于唐代藩镇研究的几点新认识",
      },
      {
        time: "2023.11.23",
        title: "艾四林：从人民群众的创造中汲取理论创新智慧",
      },
    ],
  },
]);

let nineDate = reactive([
  'https://www.tsinghua.edu.cn/new/script/xqh2209.jpg',
  'https://www.tsinghua.edu.cn/new/img4.jpg',
  'https://www.tsinghua.edu.cn/ditu/4051253.png',
  'https://www.tsinghua.edu.cn/newspdf/571ef8812e021c2433ecdbf01e3e9f7.jpg'
])

function changeColor(index) {
  colorIndex.value = index;
  sixDate.length = 0;
  fiveDate[index].list.forEach((item) => {
    sixDate.push(item);
  });
}

function change(index) {
  swiperIndex.value = index;
  imgs.value.style.transform = `translateX(${-20 * index}%)`;
}

function checks(index) {
  borderIndex.value = index;
  fourDate.length = 0;
  threeDate[index].list.forEach((item) => {
    fourDate.push(item);
  });
}
</script>


<style lang="less" scoped>
.new {
  width: 100%;
  height: auto;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  .wal {
    width: 80%;
    height: 127px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 213px;
      height: 47px;
      background: url("https://www.tsinghua.edu.cn/new/image/logo308.png")
        center center / 100% 100%;
    }

    .btns {
      width: 40%;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .inputs {
        width: 217px;
        height: 33px;
        display: flex;
        border-radius: 33px;
        background: rgb(242, 242, 242);

        input {
          width: 178px;
          height: 33px;
          outline: none;
          border: 0;
          padding-left: 10px;
          box-sizing: border-box;
          background: transparent;
        }

        button {
          width: 39px;
          height: 33px;
          background: url("https://www.tsinghua.edu.cn/new/image/search.png")
            center center / 50% 50% no-repeat;
          border: 0;
        }
      }

      .wb {
        width: 33px;
        height: 33px;
        border-radius: 33px;
        background: rgb(242, 242, 242);

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .list {
        width: 33px;
        height: 33px;
        border-radius: 33px;
        background: black;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .wal2 {
    width: 90%;
    height: 504px;
    margin-top: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .swipers {
      width: 70%;
      height: 100%;
      background: blue;
      overflow: hidden;

      .imgs {
        width: 500%;
        height: 100%;
        transition: all 1s ease;

        .one {
          float: left;
          width: 20%;
          height: 100%;
          position: relative;

          img {
            display: block;
            width: 100%;
            height: 100%;
          }

          .titles {
            color: #fff;
            font-size: 12px;
            position: absolute;
            width: 90%;
            height: auto;
            bottom: 40px;
            left: 10px;
          }

          .names {
            color: white;
            font-size: 18px;
            position: absolute;
            width: 90%;
            height: auto;
            bottom: 110px;
            left: 10px;
          }
        }
      }
    }

    .right {
      width: 30%;
      height: 100%;

      li {
        width: 100%;
        height: 20%;
        list-style: none;
        display: flex;
        background: white;
        font-size: 13px;
        color: #524a64;
        justify-content: space-between;
        transition: all 1s ease;
        cursor: pointer;

        img {
          display: block;
          width: auto;
          height: 100%;
        }

        .name {
          padding: 10px;
          box-sizing: border-box;
          border-top: 1px solid #d2cfdb;
          border-bottom: 1px solid #d2cfdb;
        }
      }

      .swiperChange {
        color: white;
        background: #ba9a05;
        transform: scale(1.1);
      }
    }

    &::before {
      content: "";
      width: 90%;
      height: 504px;
      position: absolute;
      top: -40px;
      right: -100px;
      background: url("https://www.tsinghua.edu.cn/new/image/img1705.jpg")
        center center / 100% 100% no-repeat;
      z-index: -1;
    }
  }

  .wal3 {
    width: 95%;
    height: auto;
    margin: 50px auto;

    h3 {
      font-size: 19.5px;
      display: flex;
      align-items: center;

      p {
        color: #adadad;
        margin: 0 10px;
      }

      span {
        font-size: 12px;
        font-weight: 500;
        color: #adadad;
      }
    }

    .el-carousel__item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .imgs {
        width: 281px;
        height: auto;
        position: relative;

        img {
          display: block;
          width: 100%;
          height: 173px;
        }

        .name {
          font-size: 12px;
          padding: 16px 0;
          color: #524a64;
        }

        &::before {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #791cb5;
        }
      }
    }
  }

  .wal4 {
    width: 88%;
    height: auto;
    margin: 0 auto 50px;
    display: flex;
    justify-content: space-between;

    .lefts {
      width: 60%;
      height: auto;
      display: flex;
      justify-content: space-between;

      .left {
        width: 17%;
        height: auto;

        li {
          width: 100%;
          height: 45px;
          list-style: none;
          text-align: center;
          line-height: 45px;
          border-left: 10px solid #791cb5;
          border-right: 1px solid #adadad;
          font-size: 12px;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .borderChange {
          border-right: 0;
          border-left: 5px solid #791cb5;
          border-top: 1px solid #adadad;
          border-bottom: 1px solid #adadad;
        }
      }

      .right {
        width: 75%;
        height: auto;

        .more {
          width: 100%;
          height: auto;
          padding-top: 11px;
          border-top: 1px solid #ededed;
          box-sizing: border-box;
          text-align: right;
          color: #adadad;
          font-size: 12px;
        }

        li {
          list-style: none;
          width: 100%;
          height: 174px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;

          .times {
            width: 60px;
            height: 60px;
            position: absolute;
            bottom: 60px;
            left: -30px;
            background: url("	https://www.tsinghua.edu.cn/new/image/img60.png")
              no-repeat center center / 100% 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

            div {
              color: white;
              font-size: 18px;
            }

            span {
              color: white;
              font-size: 12px;
            }
          }

          img {
            display: block;
            width: 40%;
            height: auto;
          }

          .names {
            width: 55%;
            height: 80%;

            span {
              display: block;
              margin: 7px 0 9px;
              font-size: 13px;
            }

            p {
              font-size: 12px;
              color: #767676;
            }
          }
        }
      }
    }

    .rights {
      width: 35%;
      height: auto;
      position: relative;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: -30px;
        right: -60px;
        background: #f2f3f9;
        z-index: -1;
      }

      .top {
        width: 100%;
        height: 54px;
        display: flex;

        li {
          width: 50%;
          height: 100%;
          text-align: center;
          line-height: 54px;
          list-style: none;
          cursor: pointer;
        }
      }

      .main {
        width: 100%;
        height: auto;
        background: url("https://www.tsinghua.edu.cn/new/image/img449.jpg")
          center center / 100% 100% no-repeat;

        .more {
          width: 100%;
          height: auto;
          padding: 15px 34px;
          box-sizing: border-box;
          text-align: right;
          color: white;
          font-size: 12px;
        }

        li {
          list-style: none;
          width: 100%;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .times {
            width: 20%;
            height: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .time {
              font-size: 12px;
              color: white;
            }

            .day {
              font-size: 18px;
              color: white;
            }
          }

          .name {
            width: 75%;
            height: 100%;
            margin-right: 20px;
            box-sizing: border-box;
            display: flex;
            font-weight: 800;
            flex-direction: column;
            justify-content: center;
            font-size: 13px;
            color: white;
            position: relative;

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              background: rgba(255, 255, 255, 0.18);
              bottom: 0;
              left: 0;
            }
          }
        }
      }
    }
  }

  .wal5 {
    width: 80%;
    height: auto;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      list-style: none;
      width: 33%;
      height: auto;
      position: relative;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url("https://www.tsinghua.edu.cn/new/image/bg20.png") center
          center / 100% 100% no-repeat;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }

      .names {
        width: 90%;
        height: auto;
        position: absolute;
        left: 10px;
        bottom: 20px;

        .name {
          display: inline-block;
          font-size: 12px;
          padding: 0 7.5px;
          background: #791cb5;
          color: white;
        }

        .title {
          font-size: 13px;
          color: white;
        }
      }
    }
  }

  .wal6 {
    width: 100%;
    height: auto;
    margin: 50px auto 0;
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 657px;
      background: #f2f3f9;
      z-index: -1;
    }

    ul {
      width: 80%;
      height: auto;
      display: flex;
      margin: 0 auto;
      justify-content: center;

      li {
        width: 33%;
        height: auto;
        list-style: none;
        margin: 20px;
        box-sizing: border-box;

        .title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 13px;

          span {
            font-size: 18px;
            font-weight: 700;
          }

          p {
            font-size: 12px;
            color: #adadad;
          }
        }

        ul {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;

          li {
            list-style: none;
            width: 100%;
            height: auto;
            padding: 11px 0;
            margin: 0;
            box-sizing: border-box;
            border-top: #d5d5d5 solid 1px;

            .time {
              font-size: 12px;
              color: #791cb5;
            }

            .name {
              font-size: 12px;
              color: #232323;
              padding-top: 9px;
            }
          }
        }
      }
    }
  }

  .wal7 {
    width: 90%;
    height: 247px;
    margin: 0 auto;
    padding: 0 0 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &::before{
      content: '';
      width: 102%;
      height: 105px;
      background: #4b0b77;
      position: absolute;
      bottom: -20px;
      right: -5%;
      z-index: -1;
    }

    &::after{
      content: "";
      width: 90%;
      height: 90px;
      background: #c6cfb7;
      position: absolute;
      bottom: -20px;
      left: 0;
      z-index: -2;
    }

    .container{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 94%;
      height: auto;

      .link{
        font-size: 12px;
        color: #8b66a4;
        margin-bottom: 15px;

        span{
          margin: 0 5px;
        }
      }

      .content{
        font-size: 12px;
        color: #8b66a4;
      }
    }

    img {
      display: block;
      width: 163px;
      height: 33px;
    }

    .swiper{ 
      width: 200px;
      height: 100px;
      margin: 0;
      .el-carousel__item img {
        display: block;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 10px black;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }
}
</style>
