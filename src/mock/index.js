import Mock from 'mockjs'
import data from './data'


const basePath = 'http://api.hervie.wang'

Mock.mock(basePath+'/getActivities',{status: 200, data: data.activities})
Mock.mock(basePath+'/getTheses',{status: 200, data: data.theses})
Mock.mock(basePath+'/getCourseWare',{status: 200, data: data.courseWare})
Mock.mock(basePath+'/getParentsView',{status: 200, data: data.parentsView})
Mock.mock(basePath+'/getWonderfulVideo',{status: 200, data: data.wonderfulVideo})
Mock.mock(basePath+'/getWeeklyMenu',{status: 200, data: data.weeklyMenu})
Mock.mock(basePath+'/getHealthCenter',{status: 200, data: data.HealthCenter})
Mock.mock(basePath+'/getScientificDiet',{status: 200, data: data.ScientificDiet})
Mock.mock(basePath+'/getImgList',{status: 200, data: data.imgList})
Mock.mock(basePath+'/getTeachers',{status: 200, data: data.teachers})

