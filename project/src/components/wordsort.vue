<template>
    <ul class="push">
        <li v-for="item, index in newobj" @click="smooth(index)">{{ index }}</li>
    </ul>
    <main>
        <div class="outer-item" v-for="title, index in newobj" :id="index">
            <div class="left">{{ index }}</div>
            <div class="right">
                <div class="inner-item" v-for="item, index in title">
                    <div class="item-title">{{ item.department }}</div>
                    <div class="item-box">
                        <div class="item" v-for="per, index in item.profession">{{ per }}</div>

                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { pinyin } from 'pinyin-pro';
let obj = reactive({})
function init() {
    arborescence.forEach(item => {
        let temp = pinyin(item.department, { toneType: 'none' }).slice(0, 1).toUpperCase()
        if (temp != '') {
            if (obj[temp] != undefined) {
                obj[temp].push(item)
            } else if (obj[temp] == undefined) {
                obj[temp] = new Array()
                obj[temp].push(item)
            }
        }

    })
    console.log(obj);
}
init()
function objKeysSort(obj) {
    /**
     * 先用Object内置类的keys方法获取要排序对象的属性名
     * 再利用Array原型上的sort方法对获取的属性名进行排序
     * newKey是一个数组
     */
    var newKey = Object.keys(obj).sort();
    // 创建一个新对象，用于存放排好序的键值对
    var newObj = {};
    // 遍历数组
    for (var i = 0; i < newKey.length; i++) {
        // 向新创建的对象中按照排好的顺序依次增加键值对
        newObj[newKey[i]] = obj[newKey[i]];
    }
    // 返回新对象
    return newObj;
}
console.log(objKeysSort(obj));
let newobj = reactive(objKeysSort(obj))
// Object {ace: 5, age: 8, name: "zhangsan", nbme: "lisi"};// 执行结果
// 字母从大到小
// var newKey = reactive(Object.keys(obj).sort().reverse());
function smooth(index){
    let temp = document.querySelector('#'+ index +'').offsetTop
    window.scrollTo({
        top:temp,
        behavior:'smooth'
    })
}
</script>
<style scoped lang="less">
ul {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    li {
        height: 100%;
        width: 50px;
        background: #f2f3f9;
        margin-right: 10px;
            display: block;
            height: 100%;
            width: 100%;
            line-height: 50px;
            font-size: 22.32px;
            color: #757575;
            text-align: center;
            cursor: pointer;
    }
}

main {
    margin-top: 30px;

    .outer-item {
        display: flex;
        margin: 20px 0;

        .left {
            font-size: 56px;
            color: #791cb5;
            width: 8%;
            border-right: 1px solid #791cb5;
        }

        .right {
            width: 92%;

            .inner-item {
                .item-title {

                    font-size: 25px;
                    color: #791cb5;
                    margin: 20px 30px;
                }

                .item-box {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    .item {
                        width: 150px;
                        height: 30px;
                        margin: 0px 30px 20px 30px;
                        line-height: 30px;
                    }
                }
            }

        }
    }
}</style>