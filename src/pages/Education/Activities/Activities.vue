<template>
  <div>
    <EducationItem title="优秀主题活动" title_desc="Excellent Thematic Activities"
                   :activities="activities" @goActivitiesDetail="goActivitiesDetail"
    v-if="!isDetail"></EducationItem>

    <router-view v-else></router-view>
  </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    data() {
      return {
        activities: [
          {
            img:'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '大班科学活动',
            activities_target: ['体验玩夹子的乐趣','体验被夹子夹的乐趣'],
            time:'2009-10-19',
            Design_intent: [],
            id:1,
            author: '王慧'
          },
          {
            img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '小班音乐"身体乐器"',
            activities_target: ['体验用身体部位做乐器的乐趣','体验真正乐器的美妙旋律'],
            time:'2009-4-19',
            Design_intent: [],
            id:2,
            author: '王和玮'
          },
          {
            img:'https://images.unsplash.com/photo-1558443957-d056622df610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '语言“甜蜜蜜的葡萄”',
            activities_target: ['感受故事中小松鼠对妈妈深深的爱意'],
            time:'2009-4-17',
            Design_intent: [],
            id:3,
            author: '颜晓峰'
          },
          {
            img:'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '小班语言"伞"',
            activities_target: ['感受诗歌《伞》中丰富优美的语境，并体验诗歌中神奇想象的乐趣'],
            time:'2009-10-19',
            Design_intent: [],
            id:4,
            author: '张权'
          },
          {
            img:'https://images.unsplash.com/photo-1557486097-4a64551d9b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '托班"大苹果"',
            activities_target: [],
            time:'2009-10-19',
            Design_intent: ['设计意图：\n' +
            '苹果是幼儿最熟悉、最常见的水果，以此作为教学内容，是在幼儿有一定直接经验的基础上，促使...'],
            id:5,
            author: '杨瑞'
          },
          {
            img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '大班社会“魔法一分钟”',
            activities_target: [],
            time:'2009-10-19',
            Design_intent: ['设计意图：\n' +
            '赠人玫瑰，手留余香，给别人带去快乐是一件很容易的事，只要你稍稍用心，一分钟就能做到：一...'],
            id:6,
            author: '叶向阳'
          },
          {
            img:'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '大班科学活动',
            activities_target: ['体验玩夹子的乐趣','体验被夹子夹的乐趣'],
            time:'2009-10-19',
            Design_intent: [],
            id:1,
            author: '王慧'
          },
          {
            img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '小班音乐"身体乐器"',
            activities_target: ['体验用身体部位做乐器的乐趣','体验真正乐器的美妙旋律'],
            time:'2009-4-19',
            Design_intent: [],
            id:2,
            author: '王和玮'
          },
          {
            img:'https://images.unsplash.com/photo-1558443957-d056622df610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '语言“甜蜜蜜的葡萄”',
            activities_target: ['感受故事中小松鼠对妈妈深深的爱意'],
            time:'2009-4-17',
            Design_intent: [],
            id:3,
            author: '颜晓峰'
          },
          {
            img:'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '小班语言"伞"',
            activities_target: ['感受诗歌《伞》中丰富优美的语境，并体验诗歌中神奇想象的乐趣'],
            time:'2009-10-19',
            Design_intent: [],
            id:4,
            author: '张权'
          },
          {
            img:'https://images.unsplash.com/photo-1557486097-4a64551d9b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '托班"大苹果"',
            activities_target: [],
            time:'2009-10-19',
            Design_intent: ['设计意图：\n' +
            '苹果是幼儿最熟悉、最常见的水果，以此作为教学内容，是在幼儿有一定直接经验的基础上，促使...'],
            id:5,
            author: '杨瑞'
          },
          {
            img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '大班社会“魔法一分钟”',
            activities_target: [],
            time:'2009-10-19',
            Design_intent: ['设计意图：\n' +
            '赠人玫瑰，手留余香，给别人带去快乐是一件很容易的事，只要你稍稍用心，一分钟就能做到：一...'],
            id:6,
            author: '叶向阳'
          },
          {
            img:'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '大班科学活动',
            activities_target: ['体验玩夹子的乐趣','体验被夹子夹的乐趣'],
            time:'2009-10-19',
            Design_intent: [],
            id:1,
            author: '王慧'
          },
          {
            img:'https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '小班音乐"身体乐器"',
            activities_target: ['体验用身体部位做乐器的乐趣','体验真正乐器的美妙旋律'],
            time:'2009-4-19',
            Design_intent: [],
            id:2,
            author: '王和玮'
          },
          {
            img:'https://images.unsplash.com/photo-1558443957-d056622df610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '语言“甜蜜蜜的葡萄”',
            activities_target: ['感受故事中小松鼠对妈妈深深的爱意'],
            time:'2009-4-17',
            Design_intent: [],
            id:3,
            author: '颜晓峰'
          },
          {
            img:'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '小班语言"伞"',
            activities_target: ['感受诗歌《伞》中丰富优美的语境，并体验诗歌中神奇想象的乐趣'],
            time:'2009-10-19',
            Design_intent: [],
            id:4,
            author: '张权'
          },
          {
            img:'https://images.unsplash.com/photo-1557486097-4a64551d9b63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '托班"大苹果"',
            activities_target: [],
            time:'2009-10-19',
            Design_intent: ['设计意图：\n' +
            '苹果是幼儿最熟悉、最常见的水果，以此作为教学内容，是在幼儿有一定直接经验的基础上，促使...'],
            id:5,
            author: '杨瑞'
          },
          {
            img:'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            activities_title: '大班社会“魔法一分钟”',
            activities_target: [],
            time:'2009-10-19',
            Design_intent: ['设计意图：\n' +
            '赠人玫瑰，手留余香，给别人带去快乐是一件很容易的事，只要你稍稍用心，一分钟就能做到：一...'],
            id:6,
            author: '叶向阳'
          }
        ],
        // isDetail: false
      }
    },
    components:{
      EducationItem
    },
    methods: {
      goActivitiesDetail(activitieObj){
        this.$router.push({name: 'ActivitiesDetail', params:{id: activitieObj.id, activitieObj:activitieObj}})
        // this.isDetail = true
      }
    },
    computed: {
      isDetail() {
        if (/activities$/.test(this.$route.fullPath)){
          return false
        }else{
          return true;
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
