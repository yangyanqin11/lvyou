<template>
  <div class="like">
    <div class="like-header">猜你喜欢</div>
    <ul class="like-body">
      <li class="like-item" v-for="item in dataList" :key='item.id'>
        <img
          :src="item.imgUrl"
          alt=""
        />
        <div class="right">
          <h5>{{item.title}}</h5>
          <p class="comment">{{item.comment}}</p>
          <div class="msg">
            <p class="price"><i>￥</i><span>{{item.price}}</span>起</p>
            <p class="location">{{item.location}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dataList:[
                {
                    id:1,
                    imgUrl:'http://img1.qunarzz.com/travel/d3/1807/82/f587e895142f80b5.jpg?ver=1',
                    title:'京海龙风景区',
                    comment:'1341条评论',
                    price:129,
                    location:'金牛区'
                },
                   {
                    id:2,
                    imgUrl:'http://img1.qunarzz.com/travel/d3/1807/82/f587e895142f80b5.jpg?ver=1',
                    title:'京海龙风景区',
                    comment:'1341条评论',
                    price:129,
                    location:'金牛区'
                }
            ]
        }
    }
};
</script>

<style scoped>
.like {
  margin-top: 0.3rem;
  background: white;
  font-size: 0.35rem;
  padding: 0 0.2rem;
}
.like-header {
  padding: 0.2rem 0;
}
.like-item {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px solid #ccc;
}
.like-item img {
  width: 2rem;
  height: 2rem;
}
.like-item .right {
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
.right h5 {
  font-size: 0.3rem;
}
.msg{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.right .comment{
    font-size: .24rem;
}
.right .msg{
    font-size: .24rem;
}
.right .price i,span{
    color: orange;
}
.right .price span{
    font-size: .3rem;
}
</style>