<template>
  <div>
    <EducationItem title="优秀主题活动" title_desc="Excellent Thematic Activities"
                   :activities="activities" @goActivitiesDetail="goActivitiesDetail"
    v-if="!isDetail"></EducationItem>

    <router-view v-else></router-view>
  </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    data() {
      return {
        activities : this.$route.params.activities
        // isDetail: false
      }
    },

    components:{
      EducationItem
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
        this.activities = res.data
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
