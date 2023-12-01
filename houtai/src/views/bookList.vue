<template>
    <el-table :data="filterTableData" style="width: 100% height:100%">
        <el-table-column fixed prop="bookid" label="编号" width="150" />
        <el-table-column prop="bookname" label="名称" width="400" />
        <el-table-column prop="sort" label="分类" width="120" />
        <el-table-column prop="auther" label="作者" width="120" />
        <el-table-column prop="price" label="价格" width="120" />
        <el-table-column prop="publish" label="出版社" width="200" />
        <el-table-column prop="publishDate" label="出版日期" width="120" />
        <el-table-column prop="language" label="语言" width="120" />
        <el-table-column fixed="right" label="Operations" width="150">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
                <el-button link type="primary" size="small" @click="handleClick(scope.$index, scope.row)">Detail</el-button>
                <el-button type="primary" size="small" @click="delrow(scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination :page-size="6" :pager-count="5" background layout="prev, pager, next" :total="booklength"
        @current-change="handleCurrentChange" v-model:current-page="nowpage" />
        <RouterView></RouterView>
</template>
<script setup>
import{ ElMessage } from 'element-plus'
import { getCurrentInstance, reactive, ref, computed } from 'vue'
let that = getCurrentInstance().appContext.config.globalProperties;
let booklength = ref(0)
let nowpage = ref(1)
function handleCurrentChange(val) {
    reqbooks((val - 1) * 6, 6)
}
function reqbooks(start, num, key = '') {
    that.$http.getbooks({ start: start, num: num, key: key }).then(res => {
        console.log(res);
        tableData.length = 0
        res.forEach(item => {
            tableData.push({
                bookname: item.bookname,
                auther: item.auther,
                price: `￥${item.price}`,
                language: item.language,
                publish: item.publish,
                publishDate: item.publishDate,
                bookid: item.bookid,
                sort: item.sort
            })

        })
        that.$http.getbooklength().then(res => {
            booklength.value = Number(res)
        })
    })
}
reqbooks(0, 6)

const search = ref('')
const filterTableData = computed(function () {
    reqbooks(0, 6, search.value)
    nowpage.value = 1
    return tableData
})

const tableData = reactive([

])
const handleClick = (a,b)=>{
    that.$router.push(`/main/Detail/${b.bookid}`)
}
const delrow = (row) => {
    that.$http.delbook(row).then(res => {
        tableData.forEach((item, index) => {
            if (item.bookid == row.bookid) {
                tableData.splice(index, 1)
            }
        })
        return ElMessage({
            message: '已删除',
            type: 'waring',
        })
    })
}
</script>
<style scoped>
.box {
    height: 50%;
    overflow: auto;
}

.main {
    width: 90%;
    height: 100%;
    background: red
}
</style>