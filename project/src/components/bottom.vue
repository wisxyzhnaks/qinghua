<template>
  <div class="footer-link">
    <div class="title">常用链接</div>
    <ul class="list">
      <li>校园参观</li>
      <li>校园公交车</li>
      <li>清华校历</li>
      <li>校园地图</li>
      <li>实用信息</li>
      <li>教育基金会</li>
      <li>校友总会</li>
      <li>清华标志</li>
      <li>宣传资源</li>
    </ul>
    <div class="ewm">
      <img src="https://www.tsinghua.edu.cn/image/guanweierweima.jpg" alt="" />
      <p>欢迎关注清华大学公众号</p>
    </div>
  </div>
  <div class="g-footer">
    <div class="wal">
      <div class="logo">
        <img src="https://www.tsinghua.edu.cn/image/logo180.png" alt="" />
      </div>
      <ul class="list">
        <li><img src="../assets/bottom/tel.png" alt="" /> 010-62793001</li>
        <li>
          <img src="../assets/bottom/email.png" alt="" />
          webmaster@tsinghua.edu.cn
        </li>
        <li>
          <img src="../assets/bottom/local.png" alt="" />
          <p>北京市海淀区清华大学</p>
          <img src="https://www.tsinghua.edu.cn/images/img-yj.png" alt="" />
          <p>意见反馈</p>
        </li>
      </ul>
      <div class="info">
        <div>
          <p>版权所有 © 清华大学</p>
          <p>京ICP备15006448号</p>
          <p>京公网安备 110402430053 号</p>
        </div>
        <div>
            <img src="../assets/bottom/look.png" alt="">
            231105688
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less">
.footer-link {
  width: 85%;
  height: 240px;
  margin: 0 auto;
  position: relative;

  .title {
    padding: 40px 0 10px;
    font-size: 23.46px;
    font-family: "SourceSansPro-Regular", "微软雅黑";
  }

  .list {
    width: 50%;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;

    li {
      width: 27%;
      height: 33%;
      list-style: none;
      line-height: 35px;
      color: #616161;
      font-size: 12px;
      border-bottom: 2px solid #ddd;
      box-sizing: border-box;
    }
  }

  .ewm {
    position: absolute;
    bottom: -40px;
    right: 0;
    z-index: 100;

    img {
      display: block;
      width: 151px;
      height: 151px;
    }

    p {
      text-align: center;
      font-size: 12px;
      color: #fff;
      margin: 0;
      padding-top: 0.14rem;
    }
  }
}

.g-footer {
  width: 100%;
  height: 178px;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 97%;
    height: 145px;
    background: #c6cfd7;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -2;
  }

  &::after {
    content: "";
    display: block;
    width: 95%;
    height: 100%;
    background: #4b0477;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .wal {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .logo {
      width: 136px;
      height: 44px;
      position: absolute;
      top: 40px;
      left: 20px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .list {
      width: 266px;
      height: 50px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      font-size: 12px;
      color: white;
      position: absolute;
      top: 40px;
      left: 200px;

      li {
        list-style: none;
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        p {
          padding: 0;
          margin: 0;
        }

        img {
          display: block;
          width: 12px;
          height: 12px;
          margin: 0 5px;
        }
      }
    }

    .info {
      width: 100%;
      height: 52px;
      border-top: 2px solid #ddd;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 0;

      div{
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #ddd;

        img{
          display: block;
          width: 12px;
          height: 12px;
          margin: 0 5px;
        }
        p{
          margin: 0 5px;
        }
      }
    }
  }
}
</style>