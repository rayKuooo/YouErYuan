import Vue from 'vue'
import ajax from "./axios";


const basePath = 'http://api.hervie.wang'


const sendEmail = (emailObj) => ajax(basePath+'/sendEmail', emailObj, 'POST')
const getActivities = () => ajax(basePath+'/getActivities', {}, 'GET')
const getTheses = () => ajax(basePath+'/getTheses', {}, 'GET')
const getCourseWare = () => ajax(basePath+'/getCourseWare', {}, 'GET')
const getParentsView = () => ajax(basePath+'/getParentsView', {}, 'GET')
const getWonderfulVideo = () => ajax(basePath+'/getWonderfulVideo', {}, 'GET')
const getWeeklyMenu = () => ajax(basePath+'/getWeeklyMenu', {}, 'GET')
const getHealthCenter = () => ajax(basePath+'/getHealthCenter', {}, 'GET')
const getScientificDiet = () => ajax(basePath+'/getScientificDiet', {}, 'GET')



export default {
  sendEmail,
  getActivities,
  getTheses,
  getCourseWare,
  getParentsView,
  getWonderfulVideo,
  getWeeklyMenu,
  getHealthCenter,
  getScientificDiet
}
