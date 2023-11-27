// 统一管理请求
import requests from './axios.js';

let getall = ()=>{
	return requests.get('/getall')
}

export default{ getall
}