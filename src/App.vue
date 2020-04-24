<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  @import "../static/css/reset.css";
  @import "../static/icon/iconfont.css";

  #top,body{
    width: 100%;
    overflow: auto;
  }
  /* 隐藏页面滚动条 */
  body::-webkit-scrollbar {
    display: none;
  }

</style>
