<template>
    <div>
      <div class="middle">
        <BgTitleBar number="ONE" title="真正的教学态度"></BgTitleBar>
        <div class="content">
          <transition name="fadeX" >
            <div class="content_word" v-if="contentWord">
              <h4>我们不是一个运营商！</h4>
              <p>
                <i>我们不会像一个单纯的生意人只会赚钱，脑子里老是想着如何从家长那里获取更多的利益。我们和家长们一样，时时刻刻都在关心和关注于孩子们的成长.</i>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  我们有自己的孩子，自然也知道家长们将孩子托付给我们怀揣多大的希望，所以我们很善于换位思考，我们会像对待自己的孩子一样对待您的孩子，我们会把最好的幼儿知识教给他们，我们会把最好的快乐带给他们，让他收获最愉快的成长。</span>
              </p>
            </div>
          </transition>
            <div class="content_img tran" >
              <transition name="opa">
                <img src="./images/middle_1_big.jpg" v-if="contentImgShow">
              </transition>
            </div>
            <div class="content_img2 tran" >
              <transition name="opa">
                <img src="./images/middle_1_small.jpg" v-if="contentImgShow">
              </transition>
            </div>
        </div>
      </div>
      <div id="middle_two">
        <transition name="fadeX">
        <div class="content" v-show="middleTwoShow">
          <router-link to="/healthPost" class="route-health">健康驿站给家长最直观的园内饮食环境！</router-link>
          <p>我们将会把每周周一至周五的三餐内容公式，同时会向家长普及一些关于食品的常识！数据都是实时更新的，家长们如果有更好的建议也能通过联系告知我们！</p>
          <ul class="healthy_list">
            <li>
              <img src="./images/iconfontzhizuobiaozhun47.png" >
              周一周二菜单详情Monday、Tuesday
            </li>
            <li>
              <img src="./images/iconfontzhizuobiaozhun47.png" >
              周三周四菜单详情Wednesday、Thursday
            </li>
            <li>
              <img src="./images/iconfontzhizuobiaozhun47.png" >
              周五菜单以及点心详情Friday
            </li>
            <li>
              <img src="./images/iconfontzhizuobiaozhun47.png" >
              FAMES AC TURPIS EGESTAS
            </li>
            <li>
              <img src="./images/iconfontzhizuobiaozhun47.png" >
              科学膳食Scientific diet
            </li>
            <li>
              <img src="./images/iconfontzhizuobiaozhun47.png" >
              保健中心Health care center
            </li>
          </ul>
        </div>
        </transition>
      </div>
      <div class="middle middle_three" >
        <BgTitleBar number="THREE" title="我们的教师朋友们"></BgTitleBar>
        <transition name="opa">
          <el-carousel indicator-position="outside" v-show="middleThreeShow">
            <el-carousel-item class="teachers" v-for="(teacher, index) in teachers" :key="index">
              <li class="teacher">
                <img :src="teacher.avatar" >
                <h4>{{teacher.title}}</h4>
                <p>{{teacher.content}}</p>
                <span class="name">--{{teacher.name}}</span>
              </li>
            </el-carousel-item>
          </el-carousel>
        </transition>
      </div>
    </div>
</template>

<script>
  import BgTitleBar from "../../components/BgTitleBar/BgTitleBar";
  export default {
    name: "Index",
    components:{
      BgTitleBar
    },
    data (){
      return {
        teachers:[
          {
            name:'Linda Carl',
            avatar:'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title:'Suspendisse sagittis nibh sit amet nisi imperdiet',
            content:'Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa,eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor a, ullamcorper magna.'
          },
          {
            name:'Michael Paul',
            avatar:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title:'Integer id erat porta convallis tortor',
            content:'Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa,' +
              'eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, ' +
              'convallis tortor a, ullamcorper magna.'
          },
          {
            name:'Mark Henry',
            avatar:'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title:'Suspendisse sagittis nibh sit amet nisi imperdiet',
            content:'Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa,eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor a, ullamcorper magna.'
          },
          {
            name:'Dirk Smith',
            avatar:'https://images.unsplash.com/photo-1484611941511-3628849e90f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM2MTcxfQ&auto=format&fit=crop&w=500&q=60',
            title:'Suspendisse sagittis nibh sit amet nisi imperdiet',
            content:'Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa,eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor a, ullamcorper magna.'
          }
        ],
        contentImgShow: false,
        middleTwoShow: false,
        middleThreeShow: false,
        contentWord: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll() {  //监听滚轮滑动控制页面动画效果
        //滚动位置
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        //
        // console.log(scrollTop)
        if(scrollTop>=600){
          this.contentImgShow = true
          this.contentWord = true
        }
        if(scrollTop>=1150){
          this.middleTwoShow = true
        }
        if(scrollTop>=1600){
          this.middleThreeShow = true
        }
      }
    },
    destroyed() {
      removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .middle{
    padding: 0 50px 40px;
  }
  .middle .bg-title-bar{
    padding-bottom: 30px;
  }
  .middle .content{
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    position: relative;
    height: 422px;
  }

  .middle .content_word{
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .middle .content_word h4{
    font-size: 1.8em;
    line-height: 1.5em;
    margin-bottom: 14px;
  }
  .middle .content_word p{
    word-wrap: break-word;
    line-height: 1.5em;
    text-indent: 2em;

  }
  .middle .content_word p i{
    font-size: 16px;
    display: block;
    margin-bottom: 1em;
    color: #e95b16;
    line-height: 2em;
    text-decoration: underline;
  }
  .middle .content_word span{
    font-size: 18px;
    line-height: 1.5em;
  }
  .middle .content_img{
    width: 50%;
    float: left;
  }

  .middle .content_img img{
    width: 540px;
    height: 360px;
  }
  .middle .content_img2 {
    position: absolute;
    right: 0px;
    top: -90px;
  }

  /* 中间第二版块 */
  #middle_two{
    height: 500px;
    background: url(./images/middle_2_banner.jpg);
    color: white;
  }
  #middle_two .content{
    float: right;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    background: rgba(0,0,0,.7);
    padding: 64px;
  }
  #middle_two .content .route-health{
    color: #FFD900;
    font-size: 1.8em;
  }
  #middle_two .content .route-health:hover{
    text-decoration: underline;
  }
  #middle_two .content p{
    margin: 18px 0 42px;
    line-height: 2em;
    font-size: 14px;
    text-indent: 2em;
  }
  #middle_two .content .healthy_list li{
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
  }
  #middle_two .content .healthy_list li img{
    margin-right: 28px;
  }

  /* 第三板块 */
  .middle_three .teachers{
    width: 80%;
    margin:50px auto 0;
    padding-top: 95px;
  }
  .middle_three .el-carousel--horizontal {
    overflow-x: visible;
  }
  .middle_three .el-carousel__item,.el-carousel__mask {
    top: -29%;
    left: 10%;
  }
  .middle_three .el-carousel--horizontal ul {
     /*指示器*/
    /*bottom: -20px !important;*/
  }
  .middle_three .el-carousel__indicators--outside {
    /*bottom: 15px;*/
    /*text-align: center;*/
    /* position: absolute !important;*/
    /*-webkit-transform: none;*/
    /*transform: none;*/
  }
  .middle_three .teachers .teacher{
    position: relative;
    padding:80px 70px 40px;
    width: 70%;
    margin: 0 auto;
    background: #EDEDED;
  }
  .middle_three .teachers .teacher img{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .middle_three .teachers .teacher h4{
    font-size: 1.3em;
    /* color: #212121; */
    line-height: 1.5em;
  }
  .middle_three .teachers .teacher p{
    color: #999;
    line-height: 2em;
    margin: 1em 0 0;
  }
  .middle_three .teachers .teacher .name{
    float: right;
    position: relative;
    right: 30px;
    font-size: 14px;
    font-weight: bold;
    color: red;
    margin: 1em 0 0;
  }

</style>
