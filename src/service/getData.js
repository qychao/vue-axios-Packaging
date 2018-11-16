import fetch from '../config/fetch';
import * as accountData from './fake/account';
let demoApi,
    indexList;
const setPromise = data => {
  return new Promise((resolve, reject)=>{
    resolve(data);
  });
};
if(process.env.NODE_ENV === "mock") {
  demoApi = () => setPromise(accountData.produceNewsData);
  indexList=()=>setPromise(accountData.indexList);
}else{
  // demoApi=(params)=>fetch("/demoApi",params,'POST');
  demoApi = () => setPromise(accountData.produceNewsData);
  indexList=()=>setPromise(accountData.indexList);
}
export {
  demoApi,
  indexList
}
