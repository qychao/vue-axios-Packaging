/*
* 配置开发环境和线上环境的切换
* baseUrl:域名地址
* routeNode:路由模式
* */
let baseUrl,routerNode;
switch (process.env.NODE_ENV){
  case 'development':
    baseUrl='';
    routerNode='hash';
    break;
  case 'production':
    baseUrl='';
    routerNode='hash';
    break;
  case 'mock':
    baseUrl='';
    routerNode='hash';
    break;
  default
    baseUrl='';
    routerNode='';
}
export {
  baseUrl,
  routerNode
}
