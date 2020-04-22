import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index/Index";
import Environment from "../pages/Environment/Environment";
import Education from "../pages/Education/Education";
import HealthPost from "../pages/HealthPost/HealthPost";
import Experience from "../pages/Experience/Experience";
import Login from "../pages/Login/Login";
import Activities from "../pages/Education/Activities/Activities";
import Courseware from "../pages/Education/Courseware/Courseware";
import Thesis from "../pages/Education/Thesis/Thesis";
import ScientificDiet from "../pages/HealthPost/ScientificDiet/ScientificDiet";
import HealthCenter from "../pages/HealthPost/HealthCenter/HealthCenter";
import WonderfulVideo from "../pages/Experience/WonderfulVideo/WonderfulVideo";
import ParentsView from "../pages/Experience/ParentsView/ParentsView";
import ActivitiesDetail from "../pages/Education/Activities/ActivitiesDetail/ActivitiesDetail";
import CoursewareDetail from "../pages/Education/Courseware/CoursewareDetail/CoursewareDetail";
import ThesisDetail from "../pages/Education/Thesis/ThesisDetail/ThesisDetail";
import ExperienceDetail from "../pages/Experience/ExperienceDetail";

Vue.use(Router)

export default new Router({
  routes: [
    { //首页
      path: '/',
      name: 'Index',
      component: Index,
    },
    { //环境介绍
      path: '/environment',
      name: 'Environment',
      component: Environment
    },
    { //教育资源
      path: '/education',
      name: 'Education',
      component: Education,
      children: [
        {//主题活动
          path:'activities',
          name: 'Activities',
          component:Activities,
          children:[
            {
              path:'activitiesDetail/:id',
              name:'ActivitiesDetail',
              component:ActivitiesDetail
            }
          ]
        },
        {//论文
          path:'thesis',
          name: 'Thesis',
          component:Thesis,
          children:[
            {
              path:'thesisDetail/:id',
              name:'ThesisDetail',
              component: ThesisDetail
            }
          ]
        },
        {//课件
          path:'courseware',
          name: 'Courseware',
          component:Courseware,
          children: [
            {
              path:'coursewareDetail/:id',
              name: 'CoursewareDetail',
              component: CoursewareDetail
            }
          ]
        },
        {//
          path:'/',
          redirect:'/education/activities'
        }
      ]
    },
    { //健康驿站
      path: '/healthPost',
      name: 'HealthPost',
      component: HealthPost,
      children: [
        { //科学膳食
          path: 'scientificDiet',
          name: 'scientificDiet',
          component: ScientificDiet
        },
        { //保健中心
          path: 'healthCenter',
          name: 'HealthCenter',
          component: HealthCenter
        },
        {
          path: '/',
          redirect: '/healthPost/scientificDiet'
        }
      ]
    },
    { //家园共育
      path: '/experience',
      name: 'Experience',
      component: Experience,
      children:[
        {
          path:'wonderfulVideo',
          name: 'WonderfulVideo',
          component:WonderfulVideo
        },
        {
          path:'parentsView',
          name: 'ParentsView',
          component:ParentsView
        },
        {
          path:'esxperienceDetail',
          name: 'ExperienceDetail',
          component:ExperienceDetail
        },
        {
          path:'/',
          redirect:'/experience/wonderfulVideo'
        }
      ]
    },
    { //登录注册
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      redirect: '/'
    }
  ],
  scrollBehavior:function (to , from , savePositon) {
    // console.log(to)
    // console.log(from)

    if (to.fullPath == '/login' ||
      to.fullPath == '/experience' ||
      to.fullPath == '/healthPost' ||
      to.fullPath ==  '/education' ||
      to.fullPath ==  '/environment' ||
      to.fullPath ==  '/') {
      return savePositon || {x : 0, y : 0}
    }
  }
})
