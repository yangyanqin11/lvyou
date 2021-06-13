<template>
  <div class="vacation">
      <div class="vacation-header">去哪里玩</div>
      <ul class="vacation-body">
          <li class="vacation-item" v-for='item in vacationList' :key='item.id'>
              <img :src="item.imgUrl" alt="">
              <p>{{item.title}}</p>
              <p>{{item.des}}</p>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
    data(){
        return{
            vacationList:[
                {
                    id:1,
                    imgUrl:'https://dimg04.c-ctrip.com/images/0303y120008jvhg40301D_D_769_510_Q100.jpg',
                    title:'北京故宫',
                    des:'每个人都值得去一次的地方'
                },
                    {
                    id:2,
                    imgUrl:'https://dimg04.c-ctrip.com/images/0303h120008jvhb50C403_D_769_510_Q100.jpg',
                    title:'北京故宫',
                    des:'每个人都值得去一次的地方'
                }
            ]
        }
    }

}
</script>

<style scoped>
.vacation-header{
    padding:.2rem 0 .2rem .2rem;
    font-size: .3rem;
}

.vacation-item{
    margin-bottom:.2rem;
}
.vacation-item img{
   width: 100%;
   height: 2rem;
}
.vacation-item p{
 padding-left: .2rem;
 padding-top:.2rem;
 /* line-height: .3rem; */
 font-size: .28rem;
}
.vacation-item p+p{
    color:#aaa;
}

</style>