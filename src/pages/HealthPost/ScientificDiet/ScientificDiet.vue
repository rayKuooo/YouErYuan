<template>
  <div>
    <HealthPostItem :panelArr="ScientificDiet"></HealthPostItem>
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
        ScientificDiet: this.$route.params.ScientificDiet
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      async initData(){
        const res = await this.$api.getScientificDiet()
        this.ScientificDiet = res.data
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
