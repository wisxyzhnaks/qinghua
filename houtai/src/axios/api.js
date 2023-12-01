// 统一管理请求
import requests from './axios.js';

let getall = ()=>{
	return requests.get('/getall')
}
let getnum = ()=>{
	return requests.get('/getStudent')										
}

//入读清华数据
let getEtu = () =>{
	return requests.get('/getAdmission')
}
export default{ getall,getnum,getEtu
}