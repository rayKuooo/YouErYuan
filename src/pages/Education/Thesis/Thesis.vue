<template>
  <div>
    <EducationItem title="获奖论文" title_desc="Awardwinning paper" :theses="theses"
    @goThesisDetail="goThesisDetail"  v-if="idDetail"></EducationItem>

    <router-view v-else></router-view>
  </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    components: {
      EducationItem
    },
    data(){
      return {
        theses: []
      }
    },
    mounted() {
      this.initData()
    },
    methods:{
      goThesisDetail(thesisObj){
        this.$router.push({name: 'ThesisDetail', params:{id:thesisObj.id, thesisObj:thesisObj}})
      },
      async initData() {
        const res = await this.$api.getTheses()
        this.theses = res.data
      }
    },
    computed: {
      idDetail(){
        if(/thesis$/.test(this.$route.fullPath)){
          return true
        }else {
          return false
        }
      }
    }
  }
</script>

<style>

</style>
