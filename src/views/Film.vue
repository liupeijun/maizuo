<template>
  <div>
    <div>大轮播</div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
    </ul>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
  .active{
    color:red;
    border-bottom: 2px solid red;
  }
</style>
