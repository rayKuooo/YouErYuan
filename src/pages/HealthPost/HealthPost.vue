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
              <router-link :to="{name:'scientificDiet', params:{ScientificDiet}}" class="health-route"
              :class="{active: $route.fullPath.match('/scientificDiet')}">
                科学膳食</router-link>
            </li>
            <li>
              <router-link :to="{name:'HealthCenter', params:{HealthCenter}}" class="health-route"
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
        weeklyMenu: [],
        HealthCenter:[],
        ScientificDiet:[]
      }
    },
    async mounted() {
      await this.initData()
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      //初始化滚动
      _initScroll() {
        let BS = new BScroll('.weekly-menu', {
          scrollX: true
        })
      },
      async initData() {
        const res = await this.$api.getWeeklyMenu()
        this.weeklyMenu = res.data

        const res2 = await this.$api.getHealthCenter()
        this.HealthCenter = res2.data

        const res3 = await this.$api.getScientificDiet()
        this.ScientificDiet = res3.data
      }
    }
  }
</script>

<style lang="scss">
  .weekly-menu{
    position: relative;
    width: 100%;
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
