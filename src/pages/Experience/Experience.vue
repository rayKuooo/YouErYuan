<template>
  <div>
    <BgTitleBar number="ONE" title="家园共育"></BgTitleBar>
    <div class="check-card">
      <router-link to="/experience/wonderfulVideo" class="title"
                   :class="{active : this.$route.fullPath.match('wonderfulVideo')}">育儿心得</router-link>
      <router-link to="/experience/parentsView" class="title"
                   :class="{active : this.$route.fullPath.match('parentsView')}">家长频道</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BgTitleBar from "../../components/BgTitleBar/BgTitleBar";
  export default {
    name: "Experience",
    components: {
      BgTitleBar
    }
  }
</script>

<style lang="scss">
  @import "../../style/checkCard.scss";
</style>
