<template>
  <div>
    <EducationItem title="获奖论文" title_desc="Awardwinning paper" :theses="theses"
    @goThesisDetail="goThesisDetail"  v-if="idDetail"></EducationItem>

    <router-view v-else></router-view>
  </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    components: {
      EducationItem
    },
    data(){
      return {
        theses: [
          {
            img:'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            theses_title: '批判性思维在提问中的重要性——读《学会提问》有感',
            theses_desc: '《学会提问》这本书的英文名为ASKING THE RIGHT QUESTIONS，是美国经济学教授尼尔˙布朗和心理学...',
            time:'2009-10-19',
            id:1,
            author: '郭睿'
          },{
            img:'https://images.unsplash.com/photo-1578194475681-ba5fc5dd17e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            theses_title: '有效的教学评价 为数学活动注入新的活力',
            theses_desc: '教师在数学活动中评价幼儿时要正确地认识幼儿的个体差异，采用不同的评价方法促进幼儿的...',
            time:'2009-4-19',
            id:2,
            author: '郭睿'
          },{
            img:'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            theses_title: '以游戏形式促进幼儿良好生活习惯的养成',
            theses_desc: '幼儿时期良好的生活习惯的培养特别重要，它是幼儿走向独立生活的关健。',
            time:'2009-4-17',
            id:3,
            author: '郭睿'
          },{
            img:'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            theses_title: '在体育活动中激发幼儿的学习自主性',
            theses_desc: '《纲要》指出：应该支持幼儿富有个性和创造性的表达。',
            time:'2009-10-19',
            id:4,
            author: '郭睿'
          },{
            img:'https://images.unsplash.com/photo-1555704997-bb93376ce574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            theses_title: '以游戏形式培养小班幼儿良好进餐习惯',
            theses_desc: '幼儿期是习惯养成的关键期，这一时期良好习惯的养成，将影响着孩子今后一生的发展，才能促进幼儿...',
            time:'2009-10-19',
            id:5,
            author: '郭睿'
          }
        ]
      }
    },
    methods:{
      goThesisDetail(thesisObj){
        this.$router.push({name: 'ThesisDetail', params:{id:thesisObj.id, thesisObj:thesisObj}})
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
