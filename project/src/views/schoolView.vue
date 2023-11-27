<template>
  <!-- 页面标题图片 -->
  <div class="pagetitle">
    <img src="https://www.tsinghua.edu.cn/image/banner06.jpg" alt="">
    <h1>学校概况</h1>
    <section>清华大学（Tsinghua University）是中国著名高等学府，坐落于北京西北郊风景秀<br>丽的清华园，是中国高层次人才培养和科学技术研究的重要基地。</section>
  </div>
  <!-- 校庆献辞 -->
  <div class="anniversary">
    <main>
      <div class="ann-title">校庆献辞</div>
      <div class="msg"><span>自强奋发新时代 团结携手向未来</span> &nbsp;&nbsp;—清华大学112周年校庆献辞</div>
      <section>
        <p>
          飞阁凌芳树，华池落彩云。在最美人间四月天，清华大学即将迎来112岁生日。很多很久没有相见的校友、朋友又将欢聚在春意融融、喜气洋洋的清华园，我们感到十分高兴并代表学校向海内外广大校友和全体师生员工致以亲切的问候和良好的祝愿，向多年来关心支持我校发展的各界人士和朋友表示衷心的感谢！
        </p>
        <p>
          宏伟蓝图鼓舞人心，时代号角催人奋进。2022年是党和国家历史上极为重要、极为关键的一年。党的二十大胜利召开，发出了全面建设社会主义现代化国家、全面推进中华民族伟大复兴的动员令，也为清华大学走好建设中国特色世界一流大学的新路指明了前进方向、确立了行动指南。学习贯彻党的二十大精神的热潮在清华园持续澎湃涌动，广大师生员工坚持不懈用习近平新时代中国特色社会主义思想凝心铸魂，坚决拥护“两个确立”，自觉增强“四个意识”、坚定“四个自信”、做到“两个维护”，努力把发展科技第一生产力、培养人才第一资源、增强创新第一动力更好结合起来，汇聚激扬起奋进新征程、建功新时代的必胜信心和强大力量。
        </p>
      </section>
      <div class="btn">查看详细
        <img src="../assets/rr6.png" alt="">
      </div>
      <img class="background" src="../assets/school/people011.png" alt="">
    </main>

  </div>
  <!-- 改革 -->
  <div class="reform">
    <main>
      <div class="reformtitle">学校沿革</div>
      <div class="reformmsg">
        清华大学的前身清华学堂始建于1911年，1912年更名为清华学校。1928年更名为国立清华大学。1937年抗日战争全面爆发后南迁长沙，与北京大学、南开大学组建国立长沙临时大学，1938年迁至昆明改名为国立西南联合大学。1946年迁回清华园，设有文、法、理、工、农等5个学院、26个系。
      </div>
      <div class="btn">查看详细
        <img src="../assets/rr6.png" alt="">
      </div>
    </main>
    <footer>
      <img src="../assets/school/picyg01.png" alt="">
      <img src="../assets/school/picyg02.png" alt="">
      <img src="../assets/school/picyg03.png" alt="">
    </footer>
  </div>
  <!-- 领导连接 -->
  <div class="twotips">
    <main>
      <div>历任领导
        <div class="btn">查看详细
          <img src="../assets/rr7.png" alt="">
        </div>
      </div>
      <div>现任领导
        <div class="btn">查看详细
          <img src="../assets/rr7.png" alt="">
        </div>
      </div>
    </main>

  </div>
  <!-- 人数统计 -->
  <div class="statistics">
    <main>
      <div class="stat-title">统计资料</div>
      <section>
        <ul>
          <li>
            <div class="num">21</div>
            <div class="info">学院（个）</div>
          </li>
          <li>
            <div class="num">51</div>
            <div class="info">系（个）</div>
          </li>
          <li>
            <div class="num">88</div>
            <div class="info">本科专业（个）</div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="num">16485</div>
            <div class="info">教职工（人）</div>
          </li>
          <li>
            <div class="num">59270</div>
            <div class="info">在学学生（人）</div>
          </li>
          <li>
            <div class="num">578.61</div>
            <div class="info">图书馆馆藏（万册/件）</div>
          </li>
          <li>
            <div class="num">460.19</div>
            <div class="info">校园面积（公顷）</div>
          </li>
        </ul>
      </section>
      <div class="btn">查看更多统计资料
        
      </div>
    </main>
  </div>
</template>
  
<script setup>

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
    top: 70%;
    left: 12%;
  }

  section {
    display: block;
    font-size: 16.74px;
    color: white;
    line-height: 30px;
    position: absolute;
    top: 82%;
    left: 12%;
  }
}

.anniversary {
  width: 100%;
  height: 75vh;

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 76%;
    height: 100%;
    margin: 0 auto;

    .ann-title {
      font-size: 31.62px;
      position: relative;
      margin-bottom: 19px;
    }

    .ann-title::after {
      content: '';
      display: block;
      width: 63px;
      position: absolute;
      bottom: -18px;
      left: 0;
      border: 2px solid #791cb5;
    }

    .msg {
      font-size: 14px;
      letter-spacing: 1px;
      margin: 28px 0 0 0;

      span {
        font-size: 18px;
        font-weight: 700;
      }
    }

    section {
      width: 68%;
      color: #929292;
      font-size: 13px;
      text-align: justify;

      p {
        display: block;
        margin: 25px 0;
        line-height: 25px;
      }
    }

    .btn {
      color: #862480;
      font-size: 13px;
      padding: 12px 0;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #862480;
    }

    .background {
      display: block;
      height: 75%;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
}

.reform {
  width: 100%;
  height: 75vh;
  background: #f2f3f9;
  position: relative;

  main {
    height: 70%;
    width: 76%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .reformtitle {
      font-size: 32px;
      position: relative;
    }

    .reformtitle::after {
      content: '';
      display: block;
      width: 63px;
      position: absolute;
      bottom: -18px;
      left: 25%;
      border: 2px solid #791cb5;
    }

    .reformmsg {
      width: 68%;
      color: #929292;
      font-size: 13px;
      text-align: center;
      display: block;
      margin: 25px 0;
      line-height: 25px;
    }

    .btn {
      color: #862480;
      font-size: 13px;
      padding: 12px 0;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #862480;
    }
  }

  footer {
    width: 85%;
    margin: 0 auto;
    display: flex;

    img {
      display: block;
      width: 33.3%
    }
  }
}

.twotips {
  width: 100%;
  height: 75vh;
  position: relative;

  main {
    height: 100%;
    width: 76%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    div {
      font-size: 32px;
      position: relative;
      background: #f2f3f9;
      width: 45%;
      height: 150px;
      line-height: 100px;
      text-indent: 1em;

      .btn {
        cursor: pointer;
        background: url(https://www.tsinghua.edu.cn/image/linejb.png);
        width: 80%;
        height: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #fff;

        img {
          position: relative;
          left: -20px;
          transition: all .3s ease;
        }
      }

      .btn:hover img {
        left: -10px
      }

      .btn::after {
        display: none;
      }
    }

    div::after {
      content: '';
      display: block;
      width: 63px;
      position: absolute;
      top: 80px;
      left: 32px;
      border: 2px solid #791cb5;
    }

  }
}

.statistics {
  height: 94vh;
  width: 100%;
  background: url(https://www.tsinghua.edu.cn/image/zlBg.jpg) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    height: 80%;
    width: 76%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .stat-title {
      font-size: 32px;
      color: #fff;
    }

    section {
      width: 100%;
      height: 60%;
      overflow: hidden;
      ul {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 2px;
        li{
          margin: 0 auto;
          width:33%;
          position: relative;
        }
        li::after{
          content: '';
          display: block;
          position: absolute;
          right:-5px;
          top:0;
          height:100%;
          border-right: 1px solid #fff;
        }
        .num {
          text-align: center;
          font-size: 66px;
          color: #fff;
          font-weight: 600;
        }

        .info {
          font-size: 17px;
          color: #fff;
          text-align: center;
        }
      }
      
    }
    .btn{
      width:170px;
      color:#fff;
      border-bottom:1px solid #f2f3f9;
      font-size: 14px;
      height:30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all .3s ease;
      cursor: pointer;
      background: url(../assets/rr7.png)  no-repeat right center;;
      img{
        height:14px;
      }
    }
    .btn:hover{
      color:#791cb5;
      border-color:#791cb5;
      background: url(../assets/rr6.png)  no-repeat right center;;
    }
  }

}
</style>
  