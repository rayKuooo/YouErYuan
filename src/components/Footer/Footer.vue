<template>
    <div>
      <div id="contact" v-show="!($route.fullPath==='/login')">
        <div class="title">
          <h4>想加入我们吗？或者给我们一些优秀的建议 =></h4>
          <p>Want to join us? Or if you have some good advice want to share with us. 	=>	</p>
        </div>
        <div class="log">
            <input type="email" placeholder="Email" v-model="email">
            <input type="button" value=" " @click="goLogin">
        </div>
      </div>
      <div id="foot">
        <div class="foot_list">
          <h4>Teaching</h4>
          <p>Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor a, ullamcorper magna.</p>
        </div>
        <div class="foot_list address">
          <h4>Address</h4>
          <div class="list">
            <ul>
              <li>
                <span class="iconfont icondizhi"></span>
                <span class="list_name ">湖南省湘潭市门前这条街</span>
              </li>
              <li>
                <span class="iconfont iconyoujian"></span>
                <span class="list_name ">1339490555@qq.com</span>
              </li>
              <li>
                <span class="iconfont icondianhua"></span>
                <span class="list_name ">17671662641</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="foot_list navigation">
          <h4>Navigation</h4>
          <div class="list">
            <ul>
              <router-link to="/environment" class="list_item">
                <span class="iconfont iconxiangyoujiantou"></span>
                <span class="list_name">环境介绍</span>
              </router-link>
              <router-link to="/education" class="list_item">
                <span class="iconfont iconxiangyoujiantou"></span>
                <span class="list_name">教育资源</span>
              </router-link>
              <router-link to="/healthPost" class="list_item">
                <span class="iconfont iconxiangyoujiantou"></span>
                <span class="list_name">健康驿站</span>
              </router-link>
              <router-link to="/ecperience" class="list_item">
                <span class="iconfont iconxiangyoujiantou"></span>
                <span class="list_name">家园共育</span>
              </router-link>
              <router-link to="/login" class="list_item">
                <span class="iconfont iconxiangyoujiantou"></span>
                <span class="list_name">联系我们</span>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Footer",
      data() {
        return {
          email:''
        }
      },
      methods: {
        goLogin(){
          this.$router.push({name: 'Login', params:{email: this.email}})
        }
      }
    }
</script>

<style scoped>
/*  登录注册*/
  #contact{
    display: flex;
    justify-content: space-around;
    background: red;
    padding: 30px 80px;
  }
  #contact .title h4{
    color: yellow;
    font-size: 32px;
    margin-bottom: 20px;
  }
  #contact .title p{
    color: white;
  }
  #contact .log{
    width: 445px;
    height: 50px;
    padding: 15px 15px 15px 25px;
    border: 1px solid white;
    box-sizing: border-box;
    vertical-align: middle;
    line-height: 100%;
  }
  #contact .log input{
    outline: none;
    border: none;
    color: #fff;
    font-size: 14px;
    width: 89%;
    background: none;
    font-weight: bold;
  }
  #contact .log input[type=button]{
    width: 9%;
    background: url(./images/img-sp.png) no-repeat -115px -140px;
    padding: 0;
  }

  /* foot */
  #foot{
    display: flex;
    justify-content: space-around;
    padding: 64px 80px;
    background: #000000;
    color: white;
  }
  #foot .foot_list h4{
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  #foot .foot_list span{
    color: #999;
  }
  #foot .foot_list p{
    word-wrap: break-word;
    color: #fff;
    line-height: 2em;
    margin: 2em 0 0;
    font-size: 14px;
    text-indent: 2em;
  }
  #foot .foot_list:first-child{
    width: 400px;
  }
  #foot .foot_list .list .list_item,li{
    display: block;
    margin-bottom: 21px;
  }
  #foot .foot_list .list .list_name:hover{
    text-decoration: underline;
  }
  #foot .navigation .list .iconfont{
    padding-right: 10px;
  }
  #foot .address .list .iconfont{
    padding-right: 5px;
  }
</style>
