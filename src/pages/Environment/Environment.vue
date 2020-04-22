<template>
    <div>
      <BgTitleBar number="ONE" title="那么来看看孩子们的教学环境吧"></BgTitleBar>
      <div class="banner">
        <el-carousel height="580px" arrow="always">
          <el-carousel-item v-for="(lists, index) in imgList" :key="index">
            <div class="flex1">
              <img :src="list" v-for="(list , list_index) in lists" :key="list_index">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script>
  import BgTitleBar from "../../components/BgTitleBar/BgTitleBar";
  export default {
    name: "Environment",
    components: {
      BgTitleBar
    },
    data() {
        return {
          imgList : [
            [
              'https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
               'https://images.unsplash.com/flagged/photo-1556776124-2f0ebdaef26b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
               'https://images.unsplash.com/photo-1566553382115-bf9fadc30aaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
               'https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
               'https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
               'https://images.unsplash.com/photo-1564429097439-e400382dc893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            [
              'https://images.unsplash.com/photo-1544780631-d7cc800ef62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1542994584-36246488fdfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1561851561-27dd4033f7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1576500714954-8a687d0ea1ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1555448049-8affc0fd79f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            [
              'https://images.unsplash.com/photo-1471938537155-7de0bd123d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1544438825-f1222acc39dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1556658460-f959fa80b796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1554294093-587d2d1bde55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1565928473000-d491a0dbdfec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1556543457-5e0a67cbd1a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ]
        ]
        }
    }
  }
</script>

<style lang="scss">
  .banner{
    width: 80%;
    padding: 30px;
    margin: 0 auto 50px;
    border: 10px dotted #a55a5a;
    .el-carousel__arrow--left, .el-carousel__arrow--right{
    /*  这是轮播的左右箭头*/
    }
    .flex1{
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      justify-content: space-between;
      img{
        display: block;
        height: 250px;
        width: 350px;
        margin: 30px 6px 0px;
        &:hover{
          transform: scale(1.05,1.05);
          transition: 0.5s;
        }
      }
    }
  }

</style>
