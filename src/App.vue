<template>
  <div>
    <ul>
      <router-link to="/film" tag="li" activeClass="kerwinactive">电影</router-link>
      <router-link to="/cinema" tag="li" activeClass="kerwinactive">影院</router-link>
      <router-link to="/center" tag="li" activeClass="kerwinactive">我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// 导入 import from
// 导出 export default
// import Vue from 'vue'
export default {
  data () {
    return {

    }
  }

}
</script>
<style lang="scss">
  *{
    margin:0;
    padding:0;
  }

  html,body{
    height: 100%;
  }

  ul {
    li{
      list-style:none;
    }
  }
  .kerwinactive{
    color:red;
  }
</style>
