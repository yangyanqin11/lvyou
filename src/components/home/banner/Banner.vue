<template>
  <div class="banner">
    <swiper  :options="swiperOptions">
    <swiper-slide v-for='item in imgs' :key='item.id' class="imgItme">
      <img :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
    name: 'carrousel',
    data() {
      return {
        imgs:[
          {
            id:1,
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg'
          },
          {
            id:2,
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/572830a8bc10efbf8d119be4ea526ea6.jpeg'
          },
             {
            id:3,
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg'
          },
          {
            id:4,
            imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/572830a8bc10efbf8d119be4ea526ea6.jpeg'
          }
        ],
        // 轮番设置
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // 图片自动播放
          autoplay: {
　　　　   delay: 2000,
　　       disableOnInteraction: false
　      　}
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    }
}
</script>

<style scoped>
.imgItme{
  width: 100%;
  height: 2rem;
}
.banner>>>.swiper-pagination-bullet-active{
  background: white;
}
.banner>>>.swiper-pagination-bullets{
  bottom:0rem;
}
</style>