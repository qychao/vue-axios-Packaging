<template>
  <div class="hello">
    <div class="header">
      <div class="header-wrapper">
        <ul class="menu-list">
          <li v-for="(item,index) in headerList" :key="index">{{item}}</li>
        </ul>
        <div class="head-image">
          <img :src="userInfo.headImage" alt="">
        </div>
      </div>
    </div>
    <div class="swiper-wrapper"></div>
    <div class="container">
      <div class="container-wrapper">
        <div>{{userInfo.cityId}}</div>
        <div>{{userInfo.cityId}}</div>
        <div>{{userInfo.cityId}}</div>
        <div>{{userInfo.cityId}}</div>
        <div>{{userInfo.cityId}}</div>
        <div>{{userInfo.cityId}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {demoApi} from '@/service/getData'
  import consoleDemo from '@/common/console'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      userInfo:{},
      headerList:['首页','文章','分类','葡萄产业']
    }
  },
  mounted(){
    this.initData();
  },
  methods:{
    async initData(){
      let res=await demoApi();
      this.userInfo=res.data.user;
    }
  }
}
</script>
<style scoped lang="stylus">
  .header
    height:72px;
    line-height 72px
    box-shadow 0 0 3px #ddd
    margin-bottom 40px;
    .header-wrapper
      width 1200px
      margin 0 auto
      display flex
      justify-content space-between
      .head-image
        width 60px
        height 60px
        border-radius 50%
        overflow hidden
        text-align center
        margin-top 6px
        img
          width 100%
          height 100%
      .menu-list
        display flex
        li
          cursor pointer
          margin-right 22px
          color #333
          font-size 16px
  .swiper-wrapper
    width 1200px
    height 500px
    margin 0 auto
    border 1px solid #999
  .container
    width 1200px
    margin 0 auto
    .container-wrapper
      display grid
      grid-gap 5px
      grid-template-columns repeat(auto-fit,396px)
      grid-template-rows repeat(2,100px)
      div
       border 1px solid #ddd
       text-align center
       line-height 100px
</style>
