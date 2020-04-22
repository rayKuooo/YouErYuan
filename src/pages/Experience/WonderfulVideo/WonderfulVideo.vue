<template>
    <div>
      <EducationItem title="育儿心得" title_desc="Wonderful Video"
                     :experiences="wonderfulVideo" @goExperienceDetail="goExperienceDetail"></EducationItem>
    </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    name: "WonderfulVideo",
    components: {
      EducationItem
    },
    data() {
      return {
        wonderfulVideo: [
          {
            img: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title: '《你能成为优秀教师》',
            time:'2009-10-19',
            author: '郭睿'
          },
          {
            img: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: '《善发现、多沟通》',
            time:'2009-10-19',
            author: '郭睿'
          },
          {
            img: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title: '《给教师的一百条建议》读后感',
            time:'2009-10-19',
            author: '郭睿'
          },
          {
            img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title: '小小世界  大大学问',
            time:'2009-10-19',
            author: '郭睿'
          },
          {
            img: 'https://images.unsplash.com/photo-1531368345462-e180bd618c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title: '换一种目光看孩子',
            time:'2009-10-19',
            author: '郭睿'
          },
          {
            img: 'https://images.unsplash.com/photo-1549227082-0ea18ce30397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title: '经常鼓励孩子有助于成长  ',
            time:'2009-10-19',
            author: '郭睿'
          },
        ]
      }
    },
    methods:{
      goExperienceDetail(experience){
        this.$router.push({name:'ExperienceDetail',params:{
            experience
          }})
      }
    }
  }
</script>

<style scoped>

</style>
