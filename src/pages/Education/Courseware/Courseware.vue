<template>
  <div>
    <EducationItem title="课件共享" title_desc="courseware sharing"
                   :coursewares="coursewares" @goCoursewareDetail="goCoursewareDetail"></EducationItem>
  </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  import CoursewareDetail from "./CoursewareDetail/CoursewareDetail";
  export default {
    data() {
      return {
        coursewares: []
      }
    },
    mounted() {
      this.initData()
    },
    components: {
      EducationItem
    },
    methods:{
      goCoursewareDetail(coursewareObj) {
        this.$router.push({name: 'CoursewareDetail', params:{id:coursewareObj.id, coursewareObj:coursewareObj}})
      },
      async initData() {
        const res = await this.$api.getCourseWare()
        this.coursewares = res.data
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
