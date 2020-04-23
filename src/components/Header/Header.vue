<template>
  <div id="top"
       :style="{height: $route.fullPath==='/'|| $route.fullPath==='/index'?'':'300px'}">
    <div id="header">
      <ul class="nav">
        <router-link class="nav-item" :class="{active: $route.fullPath==='/'|| $route.fullPath==='/index' }" to="/index">首页</router-link>
        <router-link class="nav-item" :class="{active: $route.fullPath==='/environment' }" to="/environment">环境介绍</router-link>
        <router-link class="nav-item" :class="{active: $route.fullPath.match('/education') }" to="/education">教育资源</router-link>
        <router-link class="nav-item" :class="{active: $route.fullPath.match('/healthPost') }" to="/healthPost">健康驿站</router-link>
        <router-link class="nav-item" :class="{active: $route.fullPath.match('/experience') }" to="/experience">家园共育</router-link>
        <router-link class="nav-item" :class="{active: $route.fullPath==='/login' }" to="/login">联系我们</router-link>
      </ul>
      <div class="logo">
        这是一个大LOGO
      </div>
    </div>
    <div v-if="$route.fullPath==='/'|| $route.fullPath==='/index'">
      <div class="container">
        <h3>孩子们的第二个家</h3>
        <span>Children's second home</span>
      </div>
      <transition name="fadeY">
        <div class="banner_pos" v-show="posShow">
            <img src="./images/girl.png" >
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          posShow: false      //用来实现transition动画
        }
      },

      mounted() {
        this.posShow = true   //用来实现transition动画
      },

      methods:{

      }

    }
</script>

<style>
  #top{
    height: 700px;
    background: url(images/banner.jpg);
    position: relative;
  }
  #header{
    height: 68px;
    background: rgba(0,0,0,.7);
  }
  #header .logo{
    width: 200px;
    height: 100%;
    background: #2C3E50;
    margin-left: 140px;
    color: #a59c9c;
    font-size: 20px;
    text-align: center;
    line-height: 68px;
  }
  #header .nav{
    float: right;
    margin-right: 120px;
    /* font-family: "agency fb"; */
  }
  #header .nav .nav-item{
    display: inline-block;
    width: 80px;
    float: left;
    text-align: center;
    line-height: 68px;
    color: white;
    padding: 0 10px;
  }
  #header .nav .active{
    color: #000000;
    background-color: rgb(255,217,0);
  }
  #header .nav .nav-item:hover{
    color: #000000;
    background-color: rgb(255,217,0);
  }
  #top .container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    text-align: center;
    font-weight: bold;
    color: white;
    letter-spacing: 2px;
    font-size: 60px;
  }
  #top .container h3{
    margin-bottom: -20px;
  }
  #top .container span{
    color: yellow;
    font-size: 20px;
  }

  .banner_pos{
    position: absolute;
    right: 12%;
    bottom: 0;
  }

</style>
