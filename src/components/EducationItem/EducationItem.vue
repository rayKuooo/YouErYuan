<template>
  <div>
    <div class="second-title">
      <h2>{{title}}</h2>
      <span>{{title_desc}}</span>
    </div>
    <div class="projects">
      <div class="projects-item" v-if="$route.fullPath === '/education/activities'"
           v-for="(activitie, index) in data" :key="index">
        <img :src="activitie.img" @click="goActivitiesDetail(activitie)">
        <h3 class="title" @click="goActivitiesDetail(activitie)">主题活动：{{activitie.activities_title}}</h3>
        <div v-if="activitie.activities_target.length">
          <span>活动目标：</span>
          <p v-for="(item, index) in activitie.activities_target">
            {{index + 1}}、{{item}}。
          </p>
        </div>
        <div v-if="activitie.Design_intent.length">
          <span>设计意图：</span>
          <p v-for="(item, index) in activitie.Design_intent">
            {{item}}
          </p>
        </div>
        <p>{{activitie.time}}</p>
      </div>
      <div class="projects-item" v-if="$route.fullPath === '/education/thesis'"
      v-for="(thesis, index) in data" :key="index">
        <img :src="thesis.img" @click="goThesisDetail(thesis)">
        <h3 @click="goThesisDetail(thesis)">{{thesis.theses_title}}</h3>
        <div>
          <span>[摘要]：</span>
          <p>
            {{thesis.theses_desc}}
          </p>
        </div>
        <p>{{thesis.time}}</p>
      </div>
      <div class="projects-item" v-if="$route.fullPath === '/education/courseware'"
           v-for="(courseware, index) in coursewares">
          <img :src="courseware.img" @click="goCoursewareDetail(courseware)">
          <h3 @click="goCoursewareDetail(courseware)">{{courseware.courseware_title}}</h3>
          <div>
            <span>[摘要]：</span>
            <p>
              {{courseware.courseware_desc}}
            </p>
          </div>
          <p>{{thesis.time}}</p>
      </div>
      <div class="projects-item" v-if="$route.fullPath.match('/experience')"
           v-for="(experience, index) in experiences">
        <img :src="experience.img" @click="goExperienceDetail(experience)">
        <h4 class="experience-title" @click="goExperienceDetail(experience)">{{experience.title}}</h4>
      </div>
      <div v-show="(activities&&!activities.length) || (theses&&!theses.length) || (coursewares&&!coursewares.length)"
           class="no-more">
        <h2>抱歉，暂无更多数据</h2>
      </div>
    </div>
    <div class="project-page">
      <el-pagination
        hide-on-single-page
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :page-count="4"
        @current-change="pageChange"
        :current-page.sync="currentPage">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import ExperienceDetail from "../../pages/Experience/ExperienceDetail";

  export default {
    name: "EducationItem",
    props:{
      title: String,
      title_desc: String,
      activities:Array,
      theses:Array,
      coursewares: Array,
      experiences: Array
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 6,

        allData: [],
        data: []
      }
    },
    mounted() {
      this.handleDatas()
    },
    watch: {
      activities(val) {
        this.handleDatas(val)
      },
      theses(val) {
        this.handleDatas(val)
      },
      coursewares(val) {
        this.handleDatas(val)
      },
      experiences(val) {
        this.handleDatas(val)
      }
    },
    computed:{
      total () {
        let activitiesLength = this.activities?this.activities.length:0
        let thesesLength = this.theses?this.theses.length:0
        let coursewaresLength = this.coursewares?this.coursewares.length:0
        let experiencesLength = this.experiences?this.experiences.length:0
        return activitiesLength || thesesLength || coursewaresLength || experiencesLength
      }
    },
    methods: {
      pageChange(val){
        this.currentPage = val
        this.data = this.allData[val-1]
      },
      goActivitiesDetail(activitieObj){
        this.$emit('goActivitiesDetail', activitieObj)
      },
      goCoursewareDetail(thesisObj){
        this.$emit('goCoursewareDetail', thesisObj)
      },
      goThesisDetail(coursewareObj){
        this.$emit('goThesisDetail', coursewareObj)
      },
      goExperienceDetail(ExperienceDetail){
        this.$emit('goExperienceDetail', ExperienceDetail)
      },

      //  前端处理数据，让一页只有六个项目
      handleDatas (data) {
        if (!data) {
          data = this.activities || this.theses || this.coursewares || this.experiences
          if (!data){
            return
          }
        }
        // let data = this.activities || this.theses || this.coursewares || this.experiences
        // console.log(data);
        let arr = []
        let new_data = []
        data.forEach((item , index) => {
          if ((index+1)%this.pageSize !== 0) {
            arr.push(item)
            if ((index+1) === data.length) {
              new_data.push(arr)
            }
          }else {
            index !== 0 ? arr.push(item) : null
            arr.length ? new_data.push(arr) : null
            arr = []
          }
        })
        this.allData = new_data
        this.data = new_data[this.currentPage - 1]
      }
    }
  }
</script>

<style lang="scss">
  .second-title{
    text-align: center;
    padding: 50px 0;
    h2{
      font-size: 36px;
      margin-bottom: 7px;
    }
    span{
      font-size: 14px;
      color: #999;
    }
  }
  .projects{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 800px;
    .projects-item{
      width: 410px;
      padding: 0 10px 55px;
      img{
        display: inline-block;
        width: 400px;
        height: 200px;
        cursor: pointer;
      }
      h3{
        font-size: 18px;
        padding: 15px 0;
        word-wrap: break-word;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
      .title{
        display: block;
        color: black;
        font-size: 18px;
        padding: 15px 0;
        word-wrap: break-word;
        &:hover{
          text-decoration: underline;
        }
      }
      .experience-title{
        font-size: 18px;
        color: #5b5b5b;
        text-align: center;
        margin-top: 16px;
        cursor: pointer;
      }
      p{
        color: #999999;
      }
      div{
        color: #999999;
        padding: 0 0 10px;
        span{
          display: block;
          margin-bottom: 10px;
        }
        p{
          text-indent: 2em;
          padding: 0 10px 5px;
          width: 400px;
          box-sizing: border-box;
          line-height: 25px;
        }
      }


    }
    .no-more{
      height: 400px;
      width: 100%;
      position: relative;
      h2{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 50px;
        color: #999999;
      }
    }
  }
  .project-page{
    width: 200px;
    margin: 0 auto;
    padding-bottom: 50px;
  }
</style>

