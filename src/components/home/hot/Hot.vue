<template>
  <div class="hot">
    <div class="hot-header">
      <div class="left">本周热门榜单</div>
      <div class="right">全部榜单 ></div>
    </div>
    <div class="hot-box">
      <ul class="hot-content">
        <li v-for="item in imgList" :key="item.id" class="hot-item" @click="toDetail(item.id)">
          <img :src="item.imgUrl" alt="" />
          <p>{{ item.name }}</p>
          <p>
            <span class="price">￥{{ item.price }}</span> 起
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: 1,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_710x360_c7110601.jpg",
          name: "峨眉山",
          price: 20,
        },
        {
          id: 2,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/201305/08/c5c262c16bebca42c8d65eac.jpg_710x360_b2667df4.jpg",
          name: "乐山大佛",
          price: 80,
        },
        {
          id: 3,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_710x360_c7110601.jpg",
          name: "峨眉山",
          price: 90,
        },
        {
          id: 4,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_710x360_c7110601.jpg",
          name: "峨眉山",
          price: 88,
        },
        {
          id: 5,
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_710x360_c7110601.jpg",
          name: "峨眉山-风景",
          price: 70,
        },
      ],
    };
  },
  methods:{
    toDetail(id){
      this.$router.push(`/detail?id=${id}`);
    }
  }
};
</script>

<style scoped> 
.hot {
  margin-top: 0.3rem;
  background: white;
}
.hot-header {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
}
.left {
  font-size: 0.3rem;
}
.right {
  font-size: 0.28rem;
  color: gray;
}
.hot-box {
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 0.2rem;
}
.hot-content {
  width: 5000%;
  white-space: nowrap;
}
.hot-item {
  text-align: center;
  float: left;
  width: 2rem;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  font-size: 0.28rem;
}
.hot-item img {
  width: 100%;
  height: 2rem;
}
.hot-item p {
  margin-top: 0.1rem;
  /* 处理文本内容溢出 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hot-item .price {
  color: orange;
}
</style>