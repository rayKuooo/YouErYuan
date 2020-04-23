import Vue from 'vue'
import ajax from "./axios";


const basePath = 'http://api.hervie.wang'


const sendEmail = (emailObj) => ajax(basePath+'/sendEmail', emailObj, 'POST')
const getActivities = () => ajax(basePath+'/getActivities', {}, 'GET')
const getTheses = () => ajax(basePath+'/getTheses', {}, 'GET')
const getCourseWare = () => ajax(basePath+'/getCourseWare', {}, 'GET')
const getParentsView = () => ajax(basePath+'/getParentsView', {}, 'GET')
const getWonderfulVideo = () => ajax(basePath+'/getWonderfulVideo', {}, 'GET')



export default {
  sendEmail,
  getActivities,
  getTheses,
  getCourseWare,
  getParentsView,
  getWonderfulVideo
}
