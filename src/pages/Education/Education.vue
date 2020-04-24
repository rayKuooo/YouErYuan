<template>
    <div>
      <BgTitleBar number="ONE" title="这里是我们的教学资源"></BgTitleBar>
      <div class="check-card">
        <router-link to="/education/activities" class="title"
                     :class="{active : this.$route.fullPath.match('activities')}">优秀主题活动</router-link>
        <router-link to="/education/thesis" class="title"
                     :class="{active : this.$route.fullPath.match('thesis')}">获奖论文</router-link>
        <router-link to="/education/courseware" class="title"
                     :class="{active : this.$route.fullPath.match('courseware')}">课件共享</router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
  export default {
    name: "Education",
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/checkCard";
</style>
