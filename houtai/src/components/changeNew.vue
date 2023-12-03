<template>
    <div class="changeNew">
        <div class="closed" @click="counterStore.flags = false">x</div>
        <div class="input">
            <label><span>类型</span><el-input v-model="msg.class" placeholder="请输入文章类型" /></label>
            <label><span>标题</span><el-input v-model="msg.title" placeholder="请输入标题" /></label>
            <label><span>内容</span><el-input v-model="msg.context" placeholder="请输入内容" /></label>
            <label><span>地点</span><el-input v-model="msg.address" placeholder="请输入活动地点" /></label>
            <label><span>分类</span>
                <el-select v-model="msg.typeId" placeholder="Select" >
                    <el-option :label="item.class" disabled :value="item.class" v-for="item in sort" />
                </el-select>
            </label>
            <label class="uploadfile">
                <img :src="msg.imgpath">
                <div v-if="msg.imgpath == ''">图片</div>
                <input style="display: none;" @change="uploadfile" type="file"/>
            </label>
            <button @click="confirm">确定修改</button>
        </div>
    </div>
</template>

<script setup>
import {reactive,onMounted,ref,getCurrentInstance,inject} from 'vue';
import {useCounterStore} from '@/stores/counter'
import { ElMessage, ElMessageBox } from 'element-plus'
let reload = inject("reload");
let that = getCurrentInstance().appContext.config.globalProperties;
let counterStore = useCounterStore();
let msg = ref({
    class:'',
    title:'',
    imgpath:'',
    context:'',
    time:'',
    address:'',
    typeid:'',
    number:'',
})

let sort = ref([])
that.$http.getsort().then(res=>{
    sort.value = [...res]
    console.log(sort);
    
})

function uploadfile(e){
    let formdata = new FormData()
    formdata.append("file",e.target.files[0]);
    that.$http.uploadimg(formdata).then(res=>{
        msg.url = `/images/pic/${res}`;
        msg.imgpath = 'http://47.109.51.95:3000/images/pic/' + res;
    })
}

function confirm(){

    ElMessageBox.confirm(
    '确定要修改该条新闻?',
    '修改',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
       
      that.$http.changeNew(msg.value).then(res=>{
        ElMessage({
        type: 'success',
        message: '修改成功',
        })
        counterStore.flags = false
        reload();
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

onMounted(()=>{
    msg.value = counterStore.list;
})
</script>

<style scoped lang="less">
.changeNew {
    margin: 20vh auto;
    width: 60%;
    height: 60vh;
    background: #666;
    z-index: 20;
    border-radius:20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    .closed{
        width: auto;
        height: auto;
        border-radius: 30px;
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 40px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
    }
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