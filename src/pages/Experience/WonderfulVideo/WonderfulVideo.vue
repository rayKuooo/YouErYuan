<template>
    <div id="app">
      <EducationItem title="育儿心得" title_desc="Wonderful Video"
                     :experiences="wonderfulVideo" @goExperienceDetail="goExperienceDetail"></EducationItem>
    </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    name: "WonderfulVideo",
    components: {
      EducationItem
    },
    data() {
      return {
        wonderfulVideo: this.$route.params.wonderfulVideo
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
        const res = await this.$api.getWonderfulVideo()
        this.wonderfulVideo = res.data
      }
    }
  }
</script>

<style scoped>
#app{
  height: 756px;
}
</style>
