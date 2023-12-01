// 统一管理请求
import requests from './axios.js';

let getall = ()=>{
	return requests.get('/getall')
}
let getnum = ()=>{
	return requests.get('/getStudent')										
}
let uploadimg = (parms)=>{
	return requests.post('/upLoad',parms)										
}
let getsort = ()=>{
	return requests.get('/getType')										
}
//入读清华数据
let getEtu = () =>{
	return requests.get('/getAdmission')
}
//不同页面获取不同数据
let getAll = (params)=>{
	return requests.post('/selectHome',params)
}
//删除功能
let deleteNew = (params) =>{
	return requests.post('/deleteData',params)
}
//修改功能
let changeNew = (params) =>{
	return requests.post('/changeData',params)
}
//修改入读清华数据
let changeNums = (params) =>{
	return requests.post('/setAdmission',params)
}
export default{ getall,getnum,uploadimg,getsort,getEtu,getAll,deleteNew,changeNew,changeNums
}