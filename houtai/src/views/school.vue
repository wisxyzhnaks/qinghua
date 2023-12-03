<template>
  <div class="box">
    <div class="list">
      <el-table :data="tableData" style="width: 100%" height="420">
        <el-table-column fixed prop="id" label="看点序号" width="120" />

        <el-table-column prop="class" label="看点类型" width="180" />
        <el-table-column prop="title" label="看点名称" width="350" />
        <el-table-column prop="time" label="看点时间" width="250" />
        <el-table-column prop="address" label="看点地址" width="250" />
        <el-table-column label="看点图片" width="250">
          <template #default="scope">
            <img :src="scope.row.imgpath" alt="">
          </template>
        </el-table-column>

        <el-table-column label="看点设置" fixed="right" width="150">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="handleChange" background :default-page-size="pages" layout="prev, pager, next" :total="all" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive,getCurrentInstance,ref,inject } from "vue";
import {useCounterStore} from '@/stores/counter'
import { ElMessage, ElMessageBox } from 'element-plus'
let counterStore = useCounterStore();
const reload = inject("reload");
let that = getCurrentInstance().appContext.config.globalProperties;
let all = ref(0);
let pages = ref(5);
let allList = reactive([]);

const handleEdit = (index: number, row: User) => {
  counterStore.list = row;
  counterStore.flags = true;
}
const handleDelete = (index: number, row: User) => {
  ElMessageBox.confirm(
    '确定要删除该条新闻?',
    '删除',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      that.$http.deleteNew({number: row.number}).then(res=>{
        ElMessage({
        type: 'success',
        message: '修改成功',
        })
        tableData.splice(index,1)
        reload();
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '修改失败',
      })
    })
}

interface User {
  date: string;
  name: string;
  address: string;
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const tableData: User[] = reactive([
  {
    id: 1,
    class:"展览",
    time:"2023年11月1日–2024年2月29日",
    address:"清华大学艺术博物馆一层展厅",
    title: "乌拉圭总统拉卡列访问清华大学并演讲",
    imgpath: "https://www.tsinghua.edu.cn/__local/6/44/99/67B1EAADCF66B4A128471B1C5D4_73AA1D9A_5BCF7.jpg",
  },
  {
    id: 2,
    class:"展览",
    time:"2023年11月1日–2024年2月29日",
    address:"清华大学艺术博物馆一层展厅",
    title: "乌拉圭总统拉卡列访问清华大学并演讲",
    imgpath: "https://www.tsinghua.edu.cn/__local/6/44/99/67B1EAADCF66B4A128471B1C5D4_73AA1D9A_5BCF7.jpg",
  },
  {
    id: 3,
    class:"展览",
    time:"2023年11月1日–2024年2月29日",
    address:"清华大学艺术博物馆一层展厅",
    title: "乌拉圭总统拉卡列访问清华大学并演讲",
    imgpath: "https://www.tsinghua.edu.cn/__local/6/44/99/67B1EAADCF66B4A128471B1C5D4_73AA1D9A_5BCF7.jpg",
  }
]);

function handleChange(val){
  tableData.length = 0;
  if(Math.ceil(allList.length/pages.value) === val){
    for(let i=allList.length - (pages.value * (val-1)) - 1;i>=0;i--){
      tableData.push(allList[i])
    }
  }else{
    for(let i=allList.length - (pages.value * (val-1)) - 1;i>allList.length - (pages.value * val)-1;i--){
      tableData.push(allList[i])
    }
  }
}

onMounted(()=>{
  that.$http.getAll({typeId:'校园看点'}).then(res=>{
    res.forEach(item=>{
      item.url = item.imgpath;
      item.imgpath = `http://47.109.51.95:3000/${item.imgpath}`
    })
    allList = res;
    all.value = res.length;
    tableData.length = 0;
    if(res.length < pages.value){
      for(let i=res.length-1;i>=0;i--){
      tableData.push(res[i])
      }
    }else{
      for(let i=res.length-1;i>res.length-pages.value-1;i--){
      tableData.push(res[i])
      }
    }
    console.log(res);
  })
})
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  background: #f3dcd4;
  display: flex;
  justify-content: center;
  align-items: center;

  .list {
    width: 75%;
    height: 75%;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);

    .el-table {
      border-radius: 20px;

      img {
        display: block;
        width: 200px;
        height: 100px;
        background: red;
      }
    }

    .el-pagination {
      margin: 10px;
    }
  }
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>