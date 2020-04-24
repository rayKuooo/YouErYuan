<template>
  <div>
    <Loading v-if="!isFinished"></Loading>
    <EducationItem title="获奖论文" title_desc="Awardwinning paper" :theses="theses"
    @goThesisDetail="goThesisDetail"  v-if="idDetail"></EducationItem>

    <router-view v-else></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        theses: [],
        isFinished: false
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
        let res = await this.$api.getTheses()
        if (res.status === 200) {
          this.isFinished = true
          this.theses = res.data
        }
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
