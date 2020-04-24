<template>
  <div>
    <Loading v-if="!isFinished"></Loading>
    <HealthPostItem :panelArr="HealthCenter"></HealthPostItem>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        HealthCenter: [],
        isFinished: false
      }
    },
    created() {
      this.initData()
    },
    methods: {
      async initData() {
        const res = await this.$api.getHealthCenter()
        this.HealthCenter = res.data
        this.isFinished = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
