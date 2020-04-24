<template>
    <div id="app">
      <Loading v-if="!isFinished"></Loading>
      <EducationItem title="育儿心得" title_desc="Wonderful Video"
                     :experiences="wonderfulVideo" @goExperienceDetail="goExperienceDetail"></EducationItem>
    </div>
</template>

<script>
  export default {
    name: "WonderfulVideo",
    data() {
      return {
        wonderfulVideo: [],
        isFinished: false
      }
    },
    mounted() {
      this.initData()
    },
    methods:{
      goExperienceDetail(experience){
        this.$router.push({name:'ExperienceDetail',params:{
            experience
          }})
      },
      async initData() {
        let res = await this.$api.getWonderfulVideo()
        if (res.status === 200) {
          this.isFinished = true
          this.wonderfulVideo = res.data
      }
    }
  }
}
</script>

<style scoped>
#app{
  min-height: 756px;
}
</style>
