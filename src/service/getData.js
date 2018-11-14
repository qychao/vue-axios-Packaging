import fetch from '../config/fetch';
import * as accountData from './fake/account';
let demoApi;
const setPromise = data => {
  return new Promise((resolve, reject)=>{
    resolve(data);
  });
};
if(process.env.NODE_ENV === "mock") {
  demoApi = () => setPromise(accountData.produceNewsData)
}else{
  // demoApi=(params)=>fetch("/demoApi",params,'POST');
  demoApi = () => setPromise(accountData.produceNewsData)
}
export {
  demoApi
}
