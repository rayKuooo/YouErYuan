<template>
    <div id="HealthPost">
      <BgTitleBar number="ONE" title="每周菜谱"></BgTitleBar>
      <div class="weekly-menu">
        <ul class="guide-box">
            <li class="guide-item" v-for="(menu, index) in weeklyMenu" :key="index">
              <div class="inner-title">
                <h2>{{menu.data_eg}}</h2>
                <p>{{menu.data}}</p>
              </div>
              <div class="guide-main">
                <ul>
                  <li class="clearfix" v-for="(guide, guideIndex) in menu.guideBd" :key="guideIndex">
                    <p class="guide-title">{{guide.guideTitle}}</p>
                    <p class="guide-content">
                      <span v-for="(content, contentIndex) in guide.guideContent" :key="contentIndex">
                      {{content}}<br>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
        </ul>
      </div>
      <BgTitleBar number="TWO" title="健康驿站"></BgTitleBar>
      <div class="health-post">
        <div class="health-nav">
          <ul>
            <li>
              <router-link to="/healthPost/scientificDiet" class="health-route"
              :class="{active: $route.fullPath.match('/scientificDiet')}">
                科学膳食</router-link>
            </li>
            <li>
              <router-link to="/healthPost/healthCenter" class="health-route"
                           :class="{active: $route.fullPath.match('/healthCenter')}">
                保健中心</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import BgTitleBar from "../../components/BgTitleBar/BgTitleBar";
  export default {
    name: "HealthPost",
    components: {
      BgTitleBar
    },
    data () {
      return {
        weeklyMenu: [
          {
            data:'星期一',
            data_eg:'Monday',
            guideBd:[
              {
                guideTitle:'早餐',
                guideContent: ['老武汉热干面', '牛奶']
              },
              {
                guideTitle:'早点',
                guideContent: ['饼干']
              },
              {
                guideTitle:'中餐',
                guideContent: ['蚝油生菜', '黑芝麻米饭','海鲜蒸蛋','西红柿紫菜汤']
              },
              {
                guideTitle:'午点',
                guideContent: ['香蕉']
              },
              {
                guideTitle:'晚餐',
                guideContent: ['清炒瓠子','酱爆肝香肉','银芽榨菜汤']
              }
            ]
          },
          {
            data:'星期二',
            data_eg:'Tuesday',
            guideBd:[
              {
                guideTitle:'早餐',
                guideContent: ['葱香鸡蛋饼', '牛奶']
              },
              {
                guideTitle:'早点',
                guideContent: ['沙琪玛']
              },
              {
                guideTitle:'中餐',
                guideContent: ['番茄炖牛腩', '燕麦饭','平菇青菜鸡蛋汤','双色花菜']
              },
              {
                guideTitle:'午点',
                guideContent: ['苹果']
              },
              {
                guideTitle:'晚餐',
                guideContent: ['冬瓜虾皮汤','上汤苋菜','土豆烧鸭腿']
              }
            ]
          },
          {
            data:'星期三',
            data_eg:'Wednesday',
            guideBd:[
              {
                guideTitle:'早餐',
                guideContent: ['三鲜混沌', '鹌鹑蛋']
              },
              {
                guideTitle:'早点',
                guideContent: ['牛奶']
              },
              {
                guideTitle:'中餐',
                guideContent: ['糖醋剥皮鱼', '荞麦饭','脆炒土豆丝','西红柿青菜汤']
              },
              {
                guideTitle:'午点',
                guideContent: ['香瓜']
              },
              {
                guideTitle:'晚餐',
                guideContent: ['酱肉包','绿豆百合粥']
              }
            ]
          },
          {
            data:'星期四',
            data_eg:'Thursday',
            guideBd:[
              {
                guideTitle:'早餐',
                guideContent: ['果脯发糕', '红豆薏米粥']
              },
              {
                guideTitle:'早点',
                guideContent: ['牛奶']
              },
              {
                guideTitle:'中餐',
                guideContent: ['黄焖元子', '卤海带丝','小米饭','双菇汤']
              },
              {
                guideTitle:'午点',
                guideContent: ['西瓜']
              },
              {
                guideTitle:'晚餐',
                guideContent: ['红枣山药土鸡汤','三鲜炒粉']
              }
            ]
          },
          {
            data:'星期五',
            data_eg:'Friday',
            guideBd:[
              {
                guideTitle:'早餐',
                guideContent: ['葱香鸡蛋饼', '牛奶']
              },
              {
                guideTitle:'早点',
                guideContent: ['沙琪玛']
              },
              {
                guideTitle:'中餐',
                guideContent: ['番茄炖牛腩', '燕麦饭','平菇青菜鸡蛋汤','双色花菜']
              },
              {
                guideTitle:'午点',
                guideContent: ['苹果']
              },
              {
                guideTitle:'晚餐',
                guideContent: ['冬瓜虾皮汤','上汤苋菜','土豆烧鸭腿']
              }
            ]
          },
        ]
      }
    },
    mounted() {
      this._initScroll()
    },
    methods: {
      //初始化滚动
      _initScroll() {
        new BScroll('.weekly-menu', {
          scrollX: true
        })
      }
    }
  }
</script>

<style lang="scss">
  .weekly-menu{
    position: relative;
    width: 1400px;
    height: 600px;
    background: url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    .guide-box{
      /*width: 1400px;*/
      position: absolute;
      height: 450px;
      top: 10%;
      padding: 0 10px;
      display: flex;
      .guide-item{
        float: left;
        height: 100%;
        width: 330px;
        box-sizing: border-box;
        padding: 20px;
        background: rgba(0,0,0,.4);
        border-radius: 20px;
        margin-right: 20px;
        .inner-title{
          color: #d0cece;
          h2 {
            font-size: 36px;
            font-family: Tahoma;
            margin-bottom: 5px;
            color: rgb(255, 255, 255) !important;
          }
          p{
            font-size: 17px;
            margin-bottom: 10px;
          }
        }
        .guide-main{
          color: #d0cece;
          font-size: 16px;
          line-height: 26px;
          li{
            border-bottom: 1px solid #d0cece;
            padding-bottom: 8px;
            .guide-title{
              float: left;
              padding: 0 40px 0 0;
            }
            .guide-content{
              float: left;
              span{
                display: block;
              }
            }
          }
        }
      }
    }
  }
  .health-post{
    display: flex;
    width: 100%;
    padding: 0 20px;
    .health-nav{
      margin-right: 100px;
      .health-route{
        display: block;
        box-sizing: border-box;
        width: 220px;
        height: 65px;
        color: #7a7a7a;
        background: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
        font-size: 18px;
        line-height: 65px;
        /*text-align: center;*/
        padding-left: 50px;
      }
      .active{
        color: white;
        background: url("https://images.unsplash.com/photo-1477058267562-6f70f44288a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
      }
    }
  }
</style>
