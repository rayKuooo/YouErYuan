<template>
  <div>
    <Loading v-if="!isFinished"></Loading>
    <HealthPostItem :panelArr="ScientificDiet"></HealthPostItem>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ScientificDiet: [],
        isFinished: false
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      async initData(){
        const res = await this.$api.getScientificDiet()
        this.ScientificDiet = res.data
        this.isFinished = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
