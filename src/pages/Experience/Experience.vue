<template>
  <div>
    <BgTitleBar number="ONE" title="家园共育"></BgTitleBar>
    <div class="check-card">
      <router-link :to="{name:'WonderfulVideo'}" class="title"
                   :class="{active : this.$route.fullPath.match('wonderfulVideo')}">育儿心得</router-link>
      <router-link :to="{name:'ParentsView'}" class="title"
                   :class="{active : this.$route.fullPath.match('parentsView')}">家长频道</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Experience",
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/checkCard.scss";
</style>
