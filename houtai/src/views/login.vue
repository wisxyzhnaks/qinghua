<template>
    <div class="login">
        <header>
            <img src="https://id.tsinghua.edu.cn/ui/activation/images/logo2.png" alt="">
        </header>
        <main>
            <div class="title">清华大学官网后台管理系统</div>
            <div class="msg">你即将进入清华大学官网后台管理系统</div>
            <div class="input">
                <input type="text" placeholder="请输入用户名">
                <input type="password" placeholder="请输入密码">
                <button>登陆</button>
            </div>

        </main>
        <footer>
            <div class="tips"> 010-62784859 / 010-62771940</div>
            <div class="tips"> its@tsinghua.edu.cn</div>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100vh;
    background: url(https://id.tsinghua.edu.cn/ui/activation/images/bg2.jpg) no-repeat center top !important;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    main {
        width: 55%;
        height: 65%;
        background: #F3DCD4;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .title {
            font-size: 30px;
            width: 90%;
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid #333;
        }
        .msg{
            font-size: 24px;
            width: 90%;
            text-align: center;
            padding-bottom:10px;
        }
        .input {
            width: 50%;
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-size: 16px;
            input {
                display: block;
                width: 100%;
                height: 30px;
                padding: 10px 0;
                border: 0;
                border-radius: 5px;
                
                outline: none;
                text-indent: 5px;
            }

            button {
                width: 100%;
                height: 50px;
                background: #337ab7;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 18px;
                cursor: pointer;
            }

            button:hover {
                background: #286090;
            }
        }
    }
    footer{
        width:35%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 50px;
        color:#fff;
        font-size: 12px;
    }
}</style>