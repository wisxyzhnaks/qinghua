// 统一管理请求
import requests from './axios.js';

let getall = (parms)=>{
	return requests.post('/selectHome',parms)
}
let getnum = ()=>{
	return requests.get('/getStudent')										
}
let getAdmission = ()=>{
	return requests.get('/getAdmission')										
}
let getFollowMedia = ()=>{
	return requests.get('/getFollowMedia')										
}
export default{ getall,getnum,getAdmission,getFollowMedia
}