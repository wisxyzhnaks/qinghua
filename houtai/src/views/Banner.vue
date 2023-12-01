<template>
  <div class="box">
    <div class="list">
      <el-table :data="tableData" style="width: 100%" height="420">
        <el-table-column fixed prop="id" label="轮播图序号" width="150" />

        <el-table-column prop="name" label="轮播图名称" width="350" />
        <el-table-column label="轮播图图片" width="250">
          <template #default="scope">
            <img :src="scope.row.imgs" alt="">
          </template>
        </el-table-column>

        <el-table-column label="轮播图设置" fixed="right" width="180">
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
      <el-pagination background layout="prev, pager, next" :total="1000" />
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

const tableData: User[] = [
  {
    id: 1,
    name: "乌拉圭总统拉卡列访问清华大学并演讲",
    imgs: "https://www.tsinghua.edu.cn/__local/6/44/99/67B1EAADCF66B4A128471B1C5D4_73AA1D9A_5BCF7.jpg",
  },
  {
    id: 2,
    name: "乌拉圭总统拉卡列访问清华大学并演讲",
    imgs: "https://www.tsinghua.edu.cn/__local/6/44/99/67B1EAADCF66B4A128471B1C5D4_73AA1D9A_5BCF7.jpg",
  },
  {
    id: 3,
    name: "乌拉圭总统拉卡列访问清华大学并演讲",
    imgs: "https://www.tsinghua.edu.cn/__local/6/44/99/67B1EAADCF66B4A128471B1C5D4_73AA1D9A_5BCF7.jpg",
  },
];
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