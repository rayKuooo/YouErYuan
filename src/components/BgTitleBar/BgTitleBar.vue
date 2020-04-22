<template>
  <div class="bg-title-bar">
    <div class="title">
      {{number}}
      <span class="desc">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BgTitleBar",
    props: {
      number: String,
      title: String
    }
  }
</script>

<style scoped>
  .bg-title-bar{
    padding: 80px ;
  }

  /* 中间第一板块 */
  .bg-title-bar .title{
    position: relative;
    text-align: center;
    font-size: 120px;
    color: #E1E1E1;
  }
  .bg-title-bar .title .desc{
    position: absolute;
    top:44px;
    color: #000000;
    font-size: 36px;
    left: 50%;
    transform: translateX(-50%)
  }
</style>
