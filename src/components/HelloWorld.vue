<template>
  <div class="hello">
    <button>1</button>
  </div>
</template>

<script>
  import {demoApi} from '@/service/getData'
  export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted(){
    this.initData();
  },
  methods:{
    async initData(){
      let res=await demoApi();
      console.log(res);
    }
  }
}
</script>
<style scoped>

</style>
