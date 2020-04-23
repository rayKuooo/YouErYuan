<template>
    <div>
      <BgTitleBar number="ONE" title="这里是我们的教学资源"></BgTitleBar>
      <div class="check-card">
        <router-link :to="{name:'Activities', params:{activities}}" class="title"
                     :class="{active : this.$route.fullPath.match('activities')}">优秀主题活动</router-link>
        <router-link :to="{name:'Thesis', params:{theses}}" class="title"
                     :class="{active : this.$route.fullPath.match('thesis')}">获奖论文</router-link>
        <router-link :to="{name:'Courseware', params:{coursewares}}" class="title"
                     :class="{active : this.$route.fullPath.match('courseware')}">课件共享</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import BgTitleBar from "../../components/BgTitleBar/BgTitleBar";
  export default {
    name: "Education",
    components: {
      BgTitleBar
    },
    data () {
      return {
        activities:[],
        theses:[],
        coursewares:[]
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      async initData() {
        let res = await this.$api.getActivities()
        this.activities = res.data

        const res2 = await this.$api.getCourseWare()
        this.coursewares = res2.data

        const res3 = await this.$api.getTheses()
        this.theses = res3.data
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/checkCard";
</style>
