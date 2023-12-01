<template>
  <div class="box">
    <div class="list">
      <el-table :data="tableData" style="width: 100%" height="420">
        <el-table-column fixed prop="id" label="新闻序号" width="120" />

        <el-table-column prop="name" label="新闻名称" width="250" />
        <el-table-column prop="title" label="新闻介绍" width="600" />
        <el-table-column label="新闻图片" width="250">
          <template #default="scope">
            <img :src="scope.row.imgs" alt="">
          </template>
        </el-table-column>

        <el-table-column label="新闻设置" fixed="right" width="150">
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
    title:
      "近日，《北京市人民政府关于2022年度北京市科学技术奖励的决定》公布，清华大学高等研究院教授王小云荣获突出贡献中关村奖；清华大学共获得成果奖28项，其中作为第一完成单位16项，包括一等奖7项，二等奖9项，牵头获一等奖项目数居所有报奖单位首位。",
    imgs: "https://www.tsinghua.edu.cn/__local/2/A5/6C/1FB4D4A4B2770FD54407E2A4ED0_A7DA8286_42C778.jpg",
  },
  {
    id: 2,
    name: "乌拉圭总统拉卡列访问清华大学并演讲",
    title:
      "近日，《北京市人民政府关于2022年度北京市科学技术奖励的决定》公布，清华大学高等研究院教授王小云荣获突出贡献中关村奖；清华大学共获得成果奖28项，其中作为第一完成单位16项，包括一等奖7项，二等奖9项，牵头获一等奖项目数居所有报奖单位首位。",
    imgs: "https://www.tsinghua.edu.cn/__local/2/A5/6C/1FB4D4A4B2770FD54407E2A4ED0_A7DA8286_42C778.jpg",
  },
  {
    id: 3,
    name: "乌拉圭总统拉卡列访问清华大学并演讲",
    title:
      "近日，《北京市人民政府关于2022年度北京市科学技术奖励的决定》公布，清华大学高等研究院教授王小云荣获突出贡献中关村奖；清华大学共获得成果奖28项，其中作为第一完成单位16项，包括一等奖7项，二等奖9项，牵头获一等奖项目数居所有报奖单位首位。",
    imgs: "https://www.tsinghua.edu.cn/__local/2/A5/6C/1FB4D4A4B2770FD54407E2A4ED0_A7DA8286_42C778.jpg",
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