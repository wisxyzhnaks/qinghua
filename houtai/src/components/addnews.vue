
<template>
    <div class="add">
        <div class="input">
            <label><span>类型</span><el-input v-model="msg.class" placeholder="请输入文章类型" /></label>
            <label><span>标题</span><el-input v-model="msg.title" placeholder="请输入标题" /></label>
            <label><span>内容</span><el-input v-model="msg.context" placeholder="请输入内容" /></label>
            <label><span>地点</span><el-input v-model="msg.address" placeholder="请输入活动地点" /></label>
            <label><span>分类</span>
                <el-select v-model="msg.typeid" placeholder="Select" >
                    <el-option :label="item.class" :value="item.class" v-for="item in sort" />
                </el-select>
            </label>
            <label class="uploadfile">
                <img :src="msg.imgpath">
                <div v-if="msg.imgpath == ''">图片</div>
                <input style="display: none;" @change="uploadfile" type="file"/>
            </label>
            <button @click="confirm">上传</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, reactive,ref } from 'vue'
let that = getCurrentInstance().appContext.config.globalProperties;
let msg = reactive({
    class:'',
    title:'',
    imgpath:'',
    context:'',
    time:'',
    address:'',
    typeid:'',
    number:''
})
let sort = ref([])
that.$http.getsort().then(res=>{
    sort.value = [...res]
    console.log(sort);
    
})
// function chooseimg(e){
//     formdata = ''
//     console.log(e.target.files[0]);
    
//     formdata = new FormData()
//     img.value = e.target.files[0].path
//     formdata.append("file",e.target.files[0]);
// }
function confirm(){
    let time = new Date()
    msg.time = time.getFullYear() + '年' + (time.getMonth()+1) + '月' + time.getDate() + '日'
    console.log(msg);
    
    // that.$http.uploadnew(msg).then(res=>{
    //     console.log(res);
        
    // })
}

function uploadfile(e){
    let formdata = new FormData()
    formdata.append("file",e.target.files[0]);
    that.$http.uploadimg(formdata).then(res=>{
        console.log(res);
        msg.imgpath = 'http://47.109.51.95:3000/images/pic/' + res
    })
    // http://localhost:3001/images/bccbcc0224d019b9258cf001ddaaf5af.jpg
}
</script>
<style lang="less" scoped>
.add {
    position: fixed;
    top: 35%;
    left: 20%;
    width: 60%;
    height: 60vh;
    background: #666;
    z-index: 20;
    border-radius:20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .input{
        width:80%;
        height:80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        label{
            display: block;
            width:40%;
            
        }
        span{
            display: block;
            padding:10px 0;
            color:#efefef;
        }
        button{
            width:40%;
            height:30px;
            display: block;
            margin-top: 40px;
            border-radius: 5px;
            border: 0;
            background-color: skyblue;
            color:#fff;
            transition: all .3s ease
        }
        button:hover{
            background-color: #337ab7;
        }
        .uploadfile{
            position: absolute;
            top:5%;
            left:2%;
            width:150px;
            height:100px;
            z-index: 21;
            border:1px solid #fff;
            img{
                display:block;
                width:100%;
                height:100%;
            }
            div{
                height:20px;
                width:30px;
                font-size: 12px;
                line-height: 30px;
                position: absolute;
                top:calc(50% - 10px);
                left:calc(50% - 15px);
            }
        }
    }
   
}
</style>