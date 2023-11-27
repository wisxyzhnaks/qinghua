<template>
    <img src="https://www.tsinghua.edu.cn/image/logo2.png" alt="">
    <main>
        <ul class="left"  >
            <li class="item" v-for="item,index in left" >
                <ul class="department">
                    <li v-for="depart in item.profession">{{depart}}</li>
                </ul>
                <div class="college" v-if="item.department">{{item.department}}</div>
                
            </li>
        </ul>
        <ul class="right" >
            <li class="item" v-for="item,index in right">
                <div class="college" v-if="item.department">{{item.department}}</div>
                <ul class="department">
                    <li v-for="depart in item.profession">{{depart}}</li>
                </ul>
            </li>
        </ul>
        <footer></footer>
    </main>
    
</template>
<script setup>
import { reactive } from 'vue'
let left = reactive([])
let right = reactive([])
arborescence.forEach((item,index)=>{
    if(index%2 == 0){
        left.push(item)
    }else{
        right.push(item)
    }
})

</script>

<style lang="less" scoped>

    img{
        display: block;
        margin: 0 auto;
    }
    main{
        width:100%;
        display: flex;
        overflow: hidden;
        position: relative;
        .left{
            padding-top:50px;
            border-right:1px solid #824da6;
            height:100%;
            width:50%;
            .item{
                border-top:1px solid #791cb5;
                padding: 30px;
                padding-left: 0;
                display: flex;
                justify-content: space-between;
                position: relative;
                .department{
                    font-size: 15px;
                    line-height: 35px;
                }
                .college{
                    height:100%;
                    font-size: 22.32px;
                    padding:15px;
                    color:#791cb5;
                    background: url(https://www.tsinghua.edu.cn/image/lj.png) no-repeat right;
                    background-position-y: 15px;
                }
            }
            .item::after{
                content: '';
                display:block;
                background-color: #791cb5;
                width:8px;
                height:8px;
                position:absolute;
                right:-4px;
                top:-4px;
                border-radius: 8px;
            }
        }
        .right{
            margin-top:100px;
            height:100%;
            width:50%;
            .item{
                border-top:1px solid #791cb5;
                padding: 30px;
                padding-left: 0;
                display: flex;
                justify-content: space-between;
                position: relative;
                .department{
                    font-size: 15px;
                    line-height: 35px;
                }
                .college{
                    height:100%;
                    font-size: 22.32px;
                    padding:15px;
                    color:#791cb5;
                    background: url(https://www.tsinghua.edu.cn/image/lj.png) no-repeat right;
                    background-position-y: 15px;
                }
            }
            .item::after{
                content: '';
                display:block;
                background-color: #791cb5;
                width:8px;
                height:8px;
                position:absolute;
                left:-4px;
                top:-4px;
                border-radius: 8px;
            }
            
        }
        footer{
            width:20px;
            height:20px;
            border-radius: 20px;
            background-color: #791cb5;
            position: absolute;
            left:calc(50% - 10px);
            bottom:0px
        }
    }
</style>