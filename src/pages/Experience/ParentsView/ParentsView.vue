<template>
    <div id="app">
      <Loading v-if="!isFinished"></Loading>
      <EducationItem title="家长频道" title_desc="Parents View"
                     :experiences="parentsView" @goExperienceDetail="goExperienceDetail"></EducationItem>

    </div>
</template>

<script>
  export default {
    name: "ParentsView",
    data() {
      return {
        parentsView: [],
        isFinished: false
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      goExperienceDetail(experience) {
        this.$router.push({
          name: 'ExperienceDetail', params: {
            title: experience.title,
            experience
          }
        })
      },
      async initData() {
        let res = await this.$api.getParentsView()
        if (res.status === 200) {
          this.isFinished = true
          this.parentsView = res.data
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
