<template>
  <div>
    hello vue -{{myname}}
    <input type="text" v-model="mytext"/>
    <button @click="handleClick()">click</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{data}}
      </li>
    </ul>
    <child1 :myword="mytext">
      <div>插槽技术</div>
    </child1>
  </div>
</template>

<script>
// 导入 import from
// 导出 export default
// import Vue from 'vue'
import child1 from '@/components/Child1' // @ src绝对路径
import Axios from 'axios'
// Vue.component('child1', child1)

export default {
  data () {
    return {
      myname: 'app根组件',
      mytext: '',
      datalist: []
    }
  },
  mounted () {
    Axios.get('/ajax/movieOnInfoList?token=').then(res => {
      console.log(res.data)
    })
    // Axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1209510').then(res => {
    //   console.log(res.data)
    // }) $.ajax $.get
    Axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1209510',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15647165941739461757290"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
    })

    // Axios.get("http://localhost:3000/list").then(res=>{
    //   console.log(res.data)
    // })
  },
  computed: {

  },
  components: {
    child1
  },
  methods: {
    handleClick () {
      console.log(this.mytext)
      this.datalist.push(this.mytext)
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
      background: blue;
    }
  }
</style>
