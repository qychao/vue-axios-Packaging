//引入mock.js
import fake_result from "./fake_result";

const Mock = require("mockjs");
//获取mock.Random;
const Random = Mock.Random;
//mock一组数据
export const produceNewsData = fake_result({
    user:{
      uid: 1,
      account: "15827131940",
      password: "585822",
      mobile: "12121",
      nickname: Mock.Random.cname(),
      headImage: Mock.Random.dataImage(),
      sex: false,
      info: '',
      cityId: 0,
      status: 1,
      userType: 0,
      createAt: 1498595868000,
      updateAt: 1498595870000,
      userVisitors: null
    },
    token:"6d497db44eec413f9955d51e7ffc801a"
  }
);

