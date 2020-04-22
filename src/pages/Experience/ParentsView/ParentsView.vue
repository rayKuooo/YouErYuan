<template>
    <div>
      <EducationItem title="家长频道" title_desc="Parents View"
                     :experiences="parentsView" @goExperienceDetail="goExperienceDetail"></EducationItem>

    </div>
</template>

<script>
  import EducationItem from "../../../components/EducationItem/EducationItem";
  export default {
    name: "ParentsView",
    components: {
      EducationItem
    },
    data() {
      return {
        parentsView: [
          {
            img: 'https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            title:'家园共建的感想和体会',
            time:'2009-10-19',
            author: '郭睿'
          },
          {
            img: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title:'家园共建的感想和体会',
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
            title: experience.title,
            experience
          }})
      }
    }
  }
</script>

<style scoped>

</style>
