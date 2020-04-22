<template>
  <div>
    <HealthPostItem :panelArr="HeallthCenter"></HealthPostItem>
  </div>
</template>

<script>
  import HealthPostItem from "../../../components/HealthPostItem/HealthPostItem";
  export default {
    components: {
      HealthPostItem
    },
    data() {
      return {
        HeallthCenter: [
          {
            img:'http://img0.imgtn.bdimg.com/it/u=1349750138,2888497564&fm=26&gp=0.jpg',
            date:'2018/11/08',
            title:'冬季幼儿饮食',
            desc:'冬季幼儿饮食'
          },
          {
            img:'https://images.unsplash.com/photo-1473348164936-13be821e561c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/04/15',
            title:'平衡膳食原则',
            desc:'平衡膳食原则'
          },
          {
            img:'https://images.unsplash.com/photo-1580795478844-5ed694336c90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/03/25',
            title:'预防食源性疾病的十项建议',
            desc:'预防食源性疾病的十项建议'
          },
          {
            img:'https://images.unsplash.com/photo-1566828791229-3804b533f840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/03/05',
            title:'怎样鉴别奶类食品',
            desc:'怎样鉴别奶类食品'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
