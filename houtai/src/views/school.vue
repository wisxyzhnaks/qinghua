<template>
  <div class="box">
    <div class="list">
      <el-table :data="tableData" style="width: 100%" height="420">
        <el-table-column fixed prop="id" label="看点序号" width="120" />

        <el-table-column prop="type" label="看点类型" width="180" />
        <el-table-column prop="name" label="看点名称" width="350" />
        <el-table-column prop="time" label="看点时间" width="250" />
        <el-table-column prop="location" label="看点地址" width="250" />
        <el-table-column label="看点图片" width="250">
          <template #default="scope">
            <img :src="scope.row.imgs" alt="">
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
    type:"读书活动",
    name: "一本“无人读过的书”——吴国盛导读哥白尼著作《天球运行论》",
    time:"2023年12月2日 20:00",
    location:"在线直播",
    imgs: "https://www.tsinghua.edu.cn/__local/7/DD/0E/F5896154F65E20A6DD49ABF60A0_EA006A9A_717A6.jpg",
  },
  {
    id: 2,
    type:"读书活动",
    name: "一本“无人读过的书”——吴国盛导读哥白尼著作《天球运行论》",
    time:"2023年12月2日 20:00",
    location:"在线直播",
    imgs: "https://www.tsinghua.edu.cn/__local/7/DD/0E/F5896154F65E20A6DD49ABF60A0_EA006A9A_717A6.jpg",
  },
  {
    id: 3,
    type:"读书活动",
    name: "一本“无人读过的书”——吴国盛导读哥白尼著作《天球运行论》",
    time:"2023年12月2日 20:00",
    location:"在线直播",
    imgs: "https://www.tsinghua.edu.cn/__local/7/DD/0E/F5896154F65E20A6DD49ABF60A0_EA006A9A_717A6.jpg",
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