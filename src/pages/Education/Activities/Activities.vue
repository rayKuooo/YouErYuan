<template>
  <div>
    <Loading v-if="!isFinished"></Loading>
    <EducationItem title="优秀主题活动" title_desc="Excellent Thematic Activities"
                   :activities="activities" @goActivitiesDetail="goActivitiesDetail"
                   v-if="!isDetail"></EducationItem>

    <router-view v-else></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activities : [],
        isFinished: false
        // isDetail: false
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      goActivitiesDetail(activitieObj){
        this.$router.push({name: 'ActivitiesDetail', params:{id: activitieObj.id, activitieObj:activitieObj}})
        // this.isDetail = true
      },
      async initData() {
        let res = await this.$api.getActivities()
        if (res.status === 200) {
          this.isFinished = true
          this.activities = res.data
        }
      }
    },
    computed: {
      isDetail() {
        if (/activities$/.test(this.$route.fullPath)){
          return false
        }else{
          return true;
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
