// 统一管理请求
import requests from './axios.js';

let getall = ()=>{
	return requests.get('/getall')
}
let getnum = ()=>{
	return requests.get('/getStudent')										
}
export default{ getall,getnum
}