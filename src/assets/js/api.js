import Vue from 'vue'
import ajax from "./axios";

Vue.prototype.$ajax = ajax

//测试git
console.log('gitTest');

export const sendEmail = ({emailObj}) => ajax('http://api.hervie.wang/sendEmail', {emailObj}, 'POST')


