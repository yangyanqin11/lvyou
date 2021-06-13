<template>
  <div class="nav-box">
    <div ref="wrapper" class="wrapper">
      <div>
        <div class="nav-bar">
          <div class="nav-item on" @click="change()">国内</div>
          <div class="nav-item on" @click="toChange()">国际/地区</div>
        </div>
        <div class="position">
          <p class="tit">当前定位</p>
          <div class="msg">
            <span class="iconfont icon-icon-test"></span>
            <p>定位失败</p>
            <i>重新定位</i>
          </div>
        </div>
        <div v-if="isShow">
          <div class="main">
            <p class="title">热门城市</p>
            <ul class="hotcity-list">
              <li class="hotcity-item" v-for="item in cityList" :key="item.id" @click="updateCity(item.city)">
                {{ item.city }}
              </li>
            </ul>
          </div>
          <div class="main">
            <p class="title">热门城市</p>
            <ul class="hotcity-list">
              <li class="hotcity-item" v-for="item in cityList" :key="item.id">
                {{ item.city }}
              </li>
            </ul>
          </div>
          <div class="main">
            <p class="title">热门城市</p>
            <ul class="hotcity-list">
              <li class="hotcity-item" v-for="item in cityList" :key="item.id">
                {{ item.city }}
              </li>
            </ul>
          </div>
          <div class="main">
            <p class="title">热门城市</p>
            <ul class="hotcity-list">
              <li class="hotcity-item" v-for="item in cityList" :key="item.id">
                {{ item.city }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="main">nihao</div>
      </div>
    </div>
  </div>
</template>

<script>
// 在所需要的页面中引入
import BetterScroll from "better-scroll";
import {mapMutations} from "vuex"
export default {
  data() {
    return {
      isShow: true,
      cityList: [
        {
          id: 1,
          city: "北京",
        },
        {
          id: 2,
          city: "长沙",
        },
        {
          id: 3,
          city: "成都",
        },
        {
          id: 4,
          city: "重庆",
        },
        {
          id: 5,
          city: "大连",
        },
        {
          id: 6,
          city: "广州",
        },
        {
          id: 7,
          city: "哈尔滨",
        },
        {
          id: 8,
          city: "杭州",
        },
        {
          id: 9,
          city: "北京",
        },
        {
          id: 10,
          city: "济南",
        },
        {
          id: 11,
          city: "昆明",
        },
      ],
      scroll: {},
    };
  },
  methods: {
    change() {
      this.isShow = true;
    },
    toChange() {
      this.isShow = false;
    },
    // 更新城市
    updateCity(cityName){
    // 此对接store中的mutations
    this.changeCity(cityName)
    // 点击跳转到首页，并且将此数据带到首页;
    this.$router.push('/home')
    },
    ...mapMutations({
        'changeCity':'changeCity'
    })
  },
  mounted() {
    // 这里要注意的是，BetterScroll 默认处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略
    let wrapper = this.$refs.wrapper;
    this.scroll = new BetterScroll(wrapper);
  },
};
</script>
<style scoped>
.wrapper{
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top:.9rem;
}
.nav-box {
  background: #f5f5f5;
}
.nav-bar {
  position: relative;
  display: flex;
  width: 100%;
  background: white;
  height: 1rem;
  font-size: 0.35rem;
}
.nav-item {
  width: 50%;
  text-align: center;
  line-height: 1rem;
  z-index: 10;
}
.on:before {
  position: absolute;
  left: 10px;
  bottom: 2px;
  width: 3.2px;
  height: 0.06rem;
  background: skyblue;
}
/* 当前定位 */
.position {
  margin-top: 0.3rem;
  padding: 0.2rem 0 0.2rem 0.2rem;
  font-size: 0.28rem;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.pisition .tit {
  color: #ccc;
}
.msg {
  padding-top: 0.2rem;
  display: flex;
  color: skyblue;
}
.msg p {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  font-size: 0.3rem;
  color: black;
}
.msg i {
  font-style: normal;
}
/* 热门城市 */
.main {
  padding: 0.2rem;
  background: white;
  font-size: 0.28rem;
  overflow: hidden;
}
.title {
  color: #ccc;
}
.hotcity-list {
  padding-top: 0.2rem;
}
.hotcity-item {
  float: left;
  width: 31.3333%;
  height: 0.8rem;
  border: 1px solid #f5f5f5;
  margin: 0.08rem 0.1rem 0.1rem 0;
  text-align: center;
  line-height: 0.8rem;
}
</style>