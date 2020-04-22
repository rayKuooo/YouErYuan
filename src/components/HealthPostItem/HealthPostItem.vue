<template>
  <div>
    <div class="panel-container">
      <div class="panel-item" v-for="(panel, index) in panelArr" :key="index">
        <img :src="panel.img" alt="">
        <div class="panel-content">
          <p class="date">{{panel.data}}</p>
          <a href="#">{{panel.title}}</a>
          <p class="panel-desc">{{panel.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      panelArr:Array
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .panel-container{
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    .panel-item{
      width: 460px;
      margin: 0 75px 30px 0;
      img{
        width: 460px;
        height: 265px;
      }
      .panel-content{

        .date{
          font-size: 24px;
          color: #008c99;
          font-family: "Franklin Gothic Medium Cond";
          margin: 15px 0 8px 0;
        }
        a{
          font-size: 18px;
          color: #5b5b5b;
        }
        .panel-desc{
          font-size: 14px;
          color: #a3a3a3;
          height: 38px;
          margin-top: 10px;
          line-height: 18px;
        }
      }
    }
  }
</style>
