<template>
    <div>
      <BgTitleBar title="联系我们" number="ONE"></BgTitleBar>
      <div class="contact">
        <div class="contact-left">
          <div class="thanks">
            <p>您好，</p>
            <p>感谢您来到这所牛批的幼儿园！</p>
            <p>若您有合作意向，请留言或联系我们，</p>
            <p>我们将尽快回复，为您提供最真诚的服务！</p>
          </div>
          <div class="address">
            <h3>全国免费合作咨询热线 400-888-8888</h3>
            <p>湖南省湘潭市门前这条街</p>
            <p>公司邮箱：1339490555@qq.com</p>
            <p>公司传真：86-010-62582351</p>
            <p>邮政编码：411103</p>
          </div>
        </div>
        <div class="form">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="建议投递" name="first">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1"
                       label-width="80px" class="demo-ruleForm" label-position="left">
                <el-form-item label="尊姓大名" prop="name">
                  <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="常用电话" prop="telephone">
                  <el-input v-model="ruleForm.telephone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="常用邮箱" prop="email">
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="您的建议" prop="advice">
                  <el-input type="textarea" v-model="ruleForm.advice"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
                  <el-button @click="resetForm('ruleForm1')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="心得投稿" name="second">
              <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm2"
                       label-width="80px" class="demo-ruleForm" label-position="left">
                <el-form-item label="尊姓大名" prop="name">
                  <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="常用电话" prop="telephone">
                  <el-input v-model="ruleForm.telephone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="常用邮箱" prop="email">
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="亮眼标题" prop="title">
                  <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="唯美配图" prop="img">
                  <el-input v-model="ruleForm.img"></el-input>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                  <el-input type="textarea" v-model="ruleForm.content"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
</template>

<script>
  import BgTitleBar from "../../components/BgTitleBar/BgTitleBar";
  import {sendEmail} from '../../assets/js/api'
  export default {
    name: "Login",
    components: {
      BgTitleBar
    },
    mounted() {
      if (this.$route.params.email){
        this.ruleForm.email = this.$route.params.email
      }

    },
    data() {
      let validatePhone = (rule, value, callback) => {
          const phoneReg = /^1[3456789]\d{9}$/
          if (!value){
            callback(new Error('电话号码不能为空'))
          }
          setTimeout(() => {
            if (!Number.isInteger(value*1)){
              callback(new Error('请输入数字值'))
            }else if (phoneReg.test(value)){
              callback()
            }else {
              callback(new Error('请输入正确格式的电话号码'))
            }
          })
        }
      return {
        activeName: 'first',
        ruleForm:{
          name:'',
          telephone: '',
          email:'',
          advice:'',
          title:'',
          img:'',
          content:''
        },
        rules: {
          name: [
            {required: true, message: '请输入您那好听的名字！', trigger: 'change'},
            {min: 2, message: '您的名字不会两个字都没有吧！', trigger: 'blur'}
          ],
          telephone: [
            {validator: validatePhone, trigger: 'blur', required: true}
          ],
          email: [
            {required: true, message: '请输入您的邮箱地址！', trigger: 'change'},
            {type: 'email', message: '请输入正确的格式的邮箱！', trigger: 'blur'}
          ],
          advice: [
            {required: true, message: '请大胆提出您的建议！', trigger: 'change'}
          ],
        },
        rules2:{
          name:[
            {required: true, message:'请输入您那好听的名字！',trigger:'change'},
            { min: 2,message: '您的名字不会两个字都没有吧！', trigger: 'blur' }
          ],
          telephone:[
            { validator: validatePhone, trigger: 'blur' ,required: true}
          ],
          email:[
            {required: true, message:'请输入您的邮箱地址！',trigger:'change'},
            { type: 'email',message: '请输入正确的格式的邮箱！', trigger: 'blur' }
          ],
          title:[
            {required: true, message:'请输入您投稿的心得标题！',trigger:'change'}
          ],
          img:[
            {required: true, message:'请输入图片url！',trigger:'change'}
          ],
          content:[
            {required: true, message:'请输入图片url！',trigger:'change'},
            {min:3, message:'发表的心得得超过300字符哦！',trigger:'change'}
          ],
        }
      }
    },
    methods: {
      handleClick(){

      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // let email = {
          //   name : this.ruleForm.name,
          //   telephone: this.ruleForm.telephone,
          //   email: this.ruleForm.email,
          //   advice: this.ruleForm.advice,
          //   title: this.ruleForm.title,
          //   img: this.ruleForm.img,
          //   content: this.ruleForm.content
          // }
          let email = this.ruleForm
          this.$ajax('http://api.hervie.wang/sendEmail', {email}, 'POST')

          if (formName==='ruleForm1' && valid) {
            alert('您的建议已经提交成功，我们会在认真查看后听取的!');
          }else if (formName==='ruleForm2' && valid){
            alert('您的心得投稿成功，我们会在7个工作日内给您答复!');
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }
</script>

<style lang="scss">
  .contact{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 60px 70px;
    .contact-left{

      .thanks{
        font-size: 18px;
        line-height: 2em;
        margin-bottom: 50px;
      }
      .address{
        h3{
          font-size: 24px;
          padding-bottom: 20px;
        }
        p{
          margin-bottom: 14px;
        }
      }
    }
    .form{
      width: 450px;
    }
  }
</style>
