<template>
  <div>
    <HealthPostItem :panelArr="HealthCenter"></HealthPostItem>
  </div>
</template>

<script>
  import HealthPostItem from "../../../components/HealthPostItem/HealthPostItem";
  export default {
    components: {
      HealthPostItem
    },
    data() {
      return {
        HealthCenter: this.$route.params.HealthCenter
      }
    },
    created() {
      this.initData()
    },
    methods: {
      async initData() {
        const res = await this.$api.getHealthCenter()
        this.HealthCenter = res.data
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
