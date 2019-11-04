<template>
  <div>
    hello child1---{{myword}}
    <slot></slot>
    <ul>
      <li>child-11111</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['myword']
}
</script>
<style lang="scss" scoped>
  ul {
    li{
      list-style:none;
      background: red;
    }
  }
</style>
