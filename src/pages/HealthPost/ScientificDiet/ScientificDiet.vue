<template>
  <div>
    <HealthPostItem :panelArr="ScientificDiet"></HealthPostItem>
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
        ScientificDiet: [
          {
            img:'https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/06/04',
            title:'动手做一做："蜜烤香蕉"',
            desc:'原料：香蕉2根、奶油2大匙、糖1大匙、兰姆酒1大匙、柠檬汁2小匙、巧克力酱少许、烤杏仁片少许。'
          },
          {
            img:'https://images.unsplash.com/photo-1507491518447-ac20c6c50dc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/04/15',
            title:'动手做一做：“滑子菇烩海鲜”',
            desc:'原料：滑子菇300克，海螺肉100克，扇贝2个，虾仁100克盐、料酒、小葱白、水淀粉、食用碱面各5克，鸡精8...'
          },
          {
            img:'https://images.unsplash.com/photo-1562453020-48ee5c25348a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/03/25',
            title:'动手做一做：“开口菠萝包”',
            desc:'原料：面粉400克，面肥200克，去皮菠萝300克，白糖40克，炼乳20克，食用碱面8克用温水溶解。'
          },
          {
            img:'https://images.unsplash.com/photo-1551040136-aee85a5cb5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            date:'2018/03/05',
            title:'动手做一做：“豌豆荚烧里脊条”',
            desc:'原料：豌豆荚200克，猪里脊肉200克。'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
