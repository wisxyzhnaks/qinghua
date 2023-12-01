<template>
  <div class="box">
    <div class="list">
      <el-table :data="tableData" style="width: 100%" height="420">
        <el-table-column fixed prop="id" label="入读序号" width="120" />

        <el-table-column prop="context" label="入读名称" width="350" />
        <el-table-column prop="number" label="入读数量" width="150" />
        <el-table-column prop="unit" label="入读单位" width="150" />

        <el-table-column label="入读图片" width="200">
          <template #default="scope">
            <img :src="scope.row.imgpath" alt="">
          </template>
        </el-table-column>

        <el-table-column label="入读设置" fixed="right" width="150">
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

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
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

import {getCurrentInstance,onMounted,reactive,ref} from 'vue'

let that = getCurrentInstance().appContext.config.globalProperties;
let all = ref(0);
let pages = ref(5);
let allList = reactive([]);

let tableData: User[] = reactive([
  {
    id:1,
    name: "本科专业 88个，开放辅修学位专业 40个",
    num:18,
    unit:"个",
    imgs: "https://www.tsinghua.edu.cn/__local/E/E2/0D/0D9988E43259D7BA8C62387A3B0_944008B4_1CCB.png",
  },
  {
    id:2,
    name: "本科专业 88个，开放辅修学位专业 40个",
    num:18,
    unit:"个",
    imgs: "https://www.tsinghua.edu.cn/__local/E/E2/0D/0D9988E43259D7BA8C62387A3B0_944008B4_1CCB.png",
  },
  {
    id:3,
    name: "本科专业 88个，开放辅修学位专业 40个",
    num:18,
    unit:"个",
    imgs: "https://www.tsinghua.edu.cn/__local/E/E2/0D/0D9988E43259D7BA8C62387A3B0_944008B4_1CCB.png",
  },
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
  that.$http.getEtu().then(res=>{
    allList = res;
    tableData.length = 0;
    all.value = res.length;
    for(let i=res.length-1;i>res.length-pages.value-1;i--){
      tableData.push(res[i])
    }
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
        width: 100px;
        height: 100px;
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