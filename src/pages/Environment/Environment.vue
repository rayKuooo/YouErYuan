<template>
    <div>
      <Loading v-if="!isFinished"></Loading>
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
  export default {
    name: "Environment",
    data() {
        return {
          imgList : [],
          isFinished: false
        }
    },
    mounted() {
      this.initData()
    },
    methods: {
      async initData() {
        let res = await this.$api.getImgList()
        if (res.status === 200) {
          this.isFinished = true
          this.imgList = res.data
        }
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
