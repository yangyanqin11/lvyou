<template>
  <div class="detail">
    <div class="detail-header" @click="toHome" v-show="!isHeaderShow">
      <span class="iconfont icon-zuojiantou"></span>
    </div>
    <div class="detail-title" v-show="isHeaderShow"
    :style='styleOpacity'>
      <div class="left">
        <span class="iconfont icon-zuojiantou"></span>
      </div>
      <p>大熊猫基地</p>
    </div>

    <div class="detail-img" @click="changePic()"
    >
      <img
        src="https://imgs.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_710x360_7599172e.jpg"
        alt=""
      />
      <p>成都大熊猫繁育研究基地</p>
    </div>
    <div class="detail-imglist" @click="disappear()" v-if="isShowPic">
      <!-- 在这个里面，是一组图片的轮播，所以使用swiper来进行 -->
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in imgs" :key="item.id">
          <img :src="item.imgUrl" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
    <div>
      <p style="height: 1000px"></p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.id);
  },
  data() {
    return {
      isShowPic: false,
      isHeaderShow: false,
      styleOpacity:{
       opacity:0
      },

      // 轮番设置
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      },
      imgs: [
        {
          id: 1,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1912/de/de05b4024c3db3eea3.img.jpg_1190x550_82742932.jpg",
        },
        {
          id: 2,
          imgUrl:
            "https://imgs.qunarzz.com/wugc/p216/201207/16/40e62ea907230da393835fbb.jpg_1190x550_a6f60b63.jpg",
        },
        {
          id: 3,
          imgUrl:
            "https://imgs.qunarzz.com/wugc/p59/201207/27/762b530b2ed2288293835fbb.jpg_1190x550_2605346f.jpg",
        },
        {
          id: 4,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p99/201211/05/51503d00e12f616193835fbb.jpg_1190x550_3f6a7c38.jpg",
        },
        {
          id: 5,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201301/08/74b6290e6bf5cd1e93835fbb.jpg_1190x550_d9d00449.jpg",
        },
      ],
    };
  },
  methods: {
    changePic() {
      this.isShowPic = true;
    },
    disappear() {
      this.isShowPic = false;
    },
    toHome() {
      this.$router.push("/home");
    },
  },
  mounted() {
    let that = this;
    window.addEventListener("scroll", function () {
      let top = document.documentElement.scrollTop;
      //要是滚动的距离大于25的时候，则让头部主题区域显示
      if (top > 25) {
        let opacity = top / 130 ;
        opacity = opacity >1 ? 1: opacity;
        that.styleOpacity = {
            opacity:opacity
        };
        that.isHeaderShow = true;
      } else {
        that.isHeaderShow = false;
      }
    });
  },
   //当组件激活的时候，则让他的滚动为0，即可跳转到详情页面，页面总是在顶部显示的问题
   activated(){
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style scoped>
.dateil {
  position: relative;
}
/* 头部返回按钮 */
.detail-header {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  background: black;
  opacity: 0.5;
  height: 0.5rem;
  width: 0.5rem;
  z-index: 8;
  border-radius: 0.25rem;
}
/* 头部返回按钮里面的小箭头 */
.detail-header span {
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  color: white;
}

.detail-title {
  /* 弹性布局 */
  position: fixed;
  top: 0;
  left: 0px;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  width: 100%;
  box-sizing: border-box;
  height: 0.9rem;
  background: skyblue;
  font-size: 0.3rem;
  color: white;
  z-index: 8;
}
.detail-title p {
  flex: 1;
  text-align: center;
}
.detail-img {
  position: relative;
  width: 100%;
  /* 防止掉块情况的发生 */
  height: 0px;
  padding-bottom: 50%;
  background: red;
}
.detail-img img {
  width: 100%;
}
.detail-img p {
  position: absolute;
  left: 0.2rem;
  bottom: 0.25rem;
  font-size: 0.3rem;
  color: white;
}
.detail-imglist {
  background: black;
  position: absolute;
  top: 0px;
  left: 0px;
  /* 元素居中 */
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
}
.detail-imglist img {
  width: 100%;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  color: white;
  font-size: 0.28rem;
  bottom: 0.8rem;
}
</style>