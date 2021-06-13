<template>
  <div class="wrap">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in newArr" :key="index" class="icon">
        <div v-for="i in item" :key="i.id" class="iconitem" >
          <img :src="i.imgUrl"/>
          <p>{{ i.title }}</p>
        </div>
      </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: 1,
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          title: "酒店",
        },
        {
          id: 2,
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/flight.png",
          title: "机票",
        },
        {
          id: 3,
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/train.png",
          title: "火车票",
        },
        {
          id: 4,
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          title: "度假",
        },
        {
          id: 5,
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
          title: "景点门票",
        },
        {
          id: 6,
          imgUrl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          title: "海外酒店",
        },
        {
          id: 7,
          imgUrl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          title: "低价机票",
        },
        {
          id: 8,
          imgUrl:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          title: "汽车票船票",
        },
        {
          id: 9,
          imgUrl:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
          title: "自由行",
        },
        {
          id: 10,
          imgUrl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          title: "攻略",
        },
        {
          id: 11,
          imgUrl:
            "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
          title: "民宿客栈",
        },
        {
          id: 12,
          imgUrl:
            "https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
          title: "专车自驾",
        },
      ],
        // 轮番设置
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
        }
    };
  },
  computed: {
    newArr() {
      let newArr = [];
      // 在这里需要做的是通过循环遍历，将iconlist列表改为二位数组；
      // 得到需要循环的次数
      let num = this.iconList.length / 10;
      for (let i = 0; i < num; i++) {
        let arr = this.iconList.splice(0, 8);
        newArr.push(arr);
      }
      console.log(newArr);
      return newArr;
    },
  },
};
</script>

<style scoped>
.wrap{
  background: white;
}
.icon {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.iconitem {
  width: 25%;
  /* 防止掉块 */
  padding-bottom: 25%;
  height: 0;
  font-size: 0.25rem;
  text-align: center;
}
.iconitem img {
  padding-top: 0.08rem;
  width: 1rem;
  height: 1rem;
}
.iconitem p {
  margin-top: 0.08rem;
}
.wrap>>>.swiper-container-horizontal > .swiper-pagination-bullets{
  bottom:0px;
} 
</style>