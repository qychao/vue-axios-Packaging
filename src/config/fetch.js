import axios from 'axios';
import qs from 'qs';
import {baseUrl}from './fetch';

//设置axios的一些基本配置
axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default async (url='',data={},type='GET')=>{
  type=type.toLowerCase();
  const config={
    method:type,
    url:url
  };
  switch (type){
    case "get":
      config.params=data;
      break;
    case "post":
      config.data=qs.stringify(data);
      break;
    case "put":
      config.data=qs.stringify(data);
      break;
    case "delete":
      config.data=qs.stringify(data);
      break;
    case "option":
      config.data=qs.stringify(data);
      break;
  }
  let response=await axios(config);
  if(response.status===200){
    return response.data;
    switch (response.data.status){
      case -1:
        break;
      case 0:
        break;
      case 1:
        break;
      default:
        break;
    }
  }
  else{
    return null;
  }
}
