<template>
  <div>
    <div class="contentDetail">
      <div class="content-title">
        <h2>主题活动:{{activities_title}}</h2>
        <p>发布时间：{{time}} &nbsp; 编辑：{{author}}</p>
      </div>
      <div class="content">
        <div class="target">
          活动目标:
          <p>1.体验玩夹子的乐趣</p>
          <p>2.正确感知10以内的数量，理解数的实际意义</p>
          <p>3.能按不同的规律给夹子排队</p>
        </div>
        <div class="ready">
          材料准备：
          <p>物质准备：各种夹子若干、花片若干、汽车卡人手一份（汽车卡分四种颜色，上面分别贴有4－10不等的数字）、小铃、教师用数字卡一套。</p>
        </div>
        <div class="progress">
          活动过程：
          <div class="progress-item">
            一、观察夹子，说说夹子的不同特征。
          </div>
          <div class="progress-item">
            二、游戏：花儿与夹子。
            <div class="progress-item-item">1、看数字，夹夹子。教师任意出示一个10以内的数，幼儿按数在花片上夹夹子。</div>
            <div class="progress-item-item">
              2、听铃声，夹夹子。
              <p>1）教师任意敲铃，铃声数在10以内，幼儿按铃声数夹夹子。</p>
              <p>2）教师任意敲铃，让幼儿夹比铃声次数多1的夹子。</p>
              <p>3）教师任意敲铃，让幼儿夹比铃声次数少1的夹子。</p>
            </div>
          </div>
          <div class="progress-item">
            三、操作活动：给夹子排队。
            <p>1、幼儿自由给小夹子排队，感受探索的乐趣。</p>
            <p>2、请幼儿介绍自己是怎么给小夹子排队的，引导幼儿发现有的小朋友给小夹子排的队是有规律的。</p>
            <p>3、鼓励幼儿有规律地排序，并说一说是按什么规律给小夹子排序的。</p>
            <p>4、启发幼儿变换不同规律给夹子排队。（可以2名以上的幼儿合作有规律的给夹子排队）</p>
          </div>
          <div class="progress-item">
            四、游戏：开汽车。
            <p>1、坐汽车。请幼儿手持汽车卡将相同数量的小夹子夹在汽车卡上，数量和车身上的数字相同。</p>
            <p>2、汽车排队。幼儿做小司机，手持夹了夹子的汽车卡，找到与自己车身颜色相同的汽车标记，并根据车身上的数字按一定的顺序排好。</p>
            <p>3、开汽车出活动室。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    mounted() {
      // this.title = this.$route.params.activitieObj.activities_title
      // this.time = this.$route.params.activitieObj.time
      const {activities_title, time, author} = this.$route.params.activitieObj
      this.activities_title = activities_title
      this.time = time
      this.author = author
    },
    data() {
      return {
        activities_title: '',
        time: '',
        author: ''
      }
    }
  }
</script>

<style lang="scss">
@import "../../../../style/detail";
</style>
