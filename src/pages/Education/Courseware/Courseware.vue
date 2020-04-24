<template>
  <div>
    <Loading v-if="!isFinished"></Loading>
    <EducationItem title="课件共享" title_desc="courseware sharing"
                   :coursewares="coursewares" @goCoursewareDetail="goCoursewareDetail"></EducationItem>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        coursewares: [],
        isFinished: false
      }
    },
    mounted() {
      this.initData()
    },
    methods:{
      goCoursewareDetail(coursewareObj) {
        this.$router.push({name: 'CoursewareDetail', params:{id:coursewareObj.id, coursewareObj:coursewareObj}})
      },
      async initData() {
        let res = await this.$api.getCourseWare()
        if (res.status === 200) {
          this.isFinished = true
          this.coursewares = res.data
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
