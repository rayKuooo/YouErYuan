<template>
    <div>
      <EducationItem title="家长频道" title_desc="Parents View"
                     :experiences="parentsView" @goExperienceDetail="goExperienceDetail"></EducationItem>

    </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    name: "ParentsView",
    components: {
      EducationItem
    },
    data() {
      return {
        parentsView:[]
      }
    },
    mounted() {
      this.initData()
    },
    methods:{
      goExperienceDetail(experience){
        this.$router.push({name:'ExperienceDetail',params:{
            title: experience.title,
            experience
          }})
      },
      async initData() {
        const res = await this.$api.getParentsView()
        this.parentsView = res.data
      }
    }
  }
</script>

<style scoped>

</style>
