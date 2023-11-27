<template>
  <div class="pagetitle">
    <img src="https://www.tsinghua.edu.cn/image/banner05.jpg" alt="">
    <h1>招生就业</h1>
    <section>32年前，我怀着人生梦想来到清华，从此就一直浸润在这个美丽而充满生机的园子里。今天，你们像当年的我一样，怀揣梦想、憧憬未来。如果你们要问我:“大学有多大？”我会告诉你们，“清华足够大，就看你的梦想有多大。”
      <br><span style="text-align:right;display:block">——清华大学党委书记 邱勇</span>
    </section>
  </div>
  <div class="student">
    <div class="top">
      <div class="title">
        <span>在学学生人数</span>
      </div>
      <ul>
        <li>
          <div class="num">16320</div>
          <div class="info">本科生</div>
        </li>
        <li>
          <div class="num">22423</div>
          <div class="info">硕士生</div>
        </li>
        <li>
          <div class="num">20527</div>
          <div class="info">博士生</div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="card">
        <img class="bg" src="https://www.tsinghua.edu.cn/image/pic11.png" alt="">
        <div class="title">本科生招生</div>
        <img class="jt" src="../assets/rr7.png" alt="">
        <div class="item">
          <div class="item-title">你希望直接找哪些内容
            <img src="../assets/education/xl.png" alt="">
          </div>
          <div class="tip">国内学生</div>
          <div class="tip">国际学生</div>
          <div class="tip">招生专业类</div>
        </div>
      </div>
      <div class="card">
        <img class="bg" src="https://www.tsinghua.edu.cn/image/pic22.png" alt="">
        <div class="title">研究生招生</div>
        <img class="jt" src="../assets/rr7.png" alt="">
        <div class="item">
          <div class="item-title">你希望直接找哪些内容
            <img src="../assets/education/xl.png" alt="">
          </div>
          <div class="tip">博士招生</div>
          <div class="tip">硕士招生</div>
          <div class="tip">港澳台招生</div>
        </div>
      </div>
      <div class="card">
        <img class="bg" src="https://www.tsinghua.edu.cn/image/pic33.png" alt="">
        <div class="title">国际学生招生</div>
        <img class="jt" src="../assets/rr7.png" alt="">
        <div class="item">
          <div class="item-title">你希望直接找哪些内容
            <img src="../assets/education/xl.png" alt="">
          </div>
          <div class="tip">本科生招生</div>
          <div class="tip">研究生招生</div>
          <div class="tip">国际学生学者中心</div>
        </div>
      </div>
    </div>
  </div>
  <div class="develop">
    <main>
      <div class="title">学生职业发展</div>
      <p>清华大学平均每年毕业学生（档案在校）约8000人，就业率长期保持高位，毕业生去向以工作就业、国内升学和出国（境）留学为主。</p>
      <p>2022年，清华大学毕业生就业人数较多的行业主要包括信息传输、软件和信息技术服务业，教育，公共管理、社会保障和社会组织，科学研究和技术服务业等。</p>
      <p>2022年，QS发布《全球大学毕业生就业力排名》，清华大学被评为全球第六，亚洲第一；2016-2022年，清华大学持续位列全球前十，亚洲第一。</p>
      <div class="btn">查看详情
        <img src="../assets/rr6.png" alt="">
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
    top: 58%;
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
    top: 70%;
    left: 12%;
  }
}

.student {
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom:30px;
  .top {
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      width: 100%;
      position: relative;

      span {
        font-size: 17px;
        position: relative;
        display: block;
        background: #fff;
        padding: 20px 0;
        z-index: 1;
        width: 170px;
        text-align: center;
        margin: 0 auto;
      }
    }

    .title::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 0;
      border-bottom: 1px solid #efe9e8;
    }

    ul {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: space-evenly;

      li {
        width: 33%;
        height: 100%;
        text-align: center;

        .num {
          font-size: 67px;
          color: #791cb5;
          font-weight: 700;
        }

        .info {
          color: #909090;
          font-size: 17px;
        }
      }
    }
  }

  .bottom {
    width: 90%;
    height: 48%;
    display: flex;
    justify-content: space-between;

    .card {
      width: 30%;
      height: 100%;
      position:relative;
      padding:0 30px;
      .jt{
        display: block;
        padding:20px;
        position: absolute;
        top:calc(50%);
        right:30px;
        transition: all .5s ease;
      }
      img:hover{
        right:20px
      }
      .bg{
        padding:0;
        position: absolute;
        top:0;
        left:0;
        display: block;
        z-index: -1;
        width:100%;
        height:100%;
      }
      .title{
        position: absolute;
        font-size: 31.62px;
        top:50%;
        color:#fff;
        padding:10px 0;
        border-top:2px solid #ee9640;
      }
      .item{
        width:calc(100% - 60px);
        position: absolute;
        padding-bottom: 10px;
        top:75%;
        left:30px;
        height:50px;
        overflow: hidden;
        background: #fff;
        .item-title{
          width:100%;
          font-size: 15px;
          padding:15px 20px;
          position: relative;
          img{
            position: absolute;
            top: 45%;
            right:15%;
          }
        }
        .tip{
          width:85%;
          margin: 0 auto;
          padding:7px;
          border-left:1px solid #791cb5;
          font-size: 13px;
          color:#791cb5;
        }
      }
      .item:hover{
        height:auto
      }
    }

    .card::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
      z-index: -1;
      width: 100%;
    }
  }
}
.develop{
  width:100%;
  height:70vh;
  background: url(https://www.tsinghua.edu.cn/image/zyfz.jpg) no-repeat center;
  main{
    width:37%;
    height:100%;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 13%;
    .title{
      font-size: 31.62px;
      color:#fff;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;
    }
    .title::after{
      content: '';
      display: block;
      position: absolute;
      bottom:-5px;
      left:0;
      width:60px;
      border:2px solid #ee9640
    }
    p{
      font-size:13px;
      color:#fff;
      display: block;
      margin: 15px 0;
      line-height: 24px;
    }
    .btn {
      cursor: pointer;
      color: #791cb5;
      background: #fff;
      font-size: 13px;
      padding: 12px 10px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
  