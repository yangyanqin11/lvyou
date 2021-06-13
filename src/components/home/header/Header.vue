<template>
  <div class="wrap">
      <div class="left">
          <span class="iconfont icon-zuojiantou"></span>
      </div>
      <div class="search">
          <span class="iconfont icon-sousuo"></span>
          <p>请输入城市/景点/游玩主题</p>
      </div>
      <div class="right" @click="toCity()">
          <p>{{city}}</p>
          <span class="iconfont icon-sanjiaodown"></span>
      </div> 
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    methods:{
        toCity(){
            this.$router.push('/city')
        }
    },
    computed:{
        ...mapState({
           "city":'city'
        })
    }
}
</script>

<style  scoped>
.wrap{
    /* 弹性布局 */
    display: flex;
    align-items: center;
    padding:0 .2rem ;
    width: 100%;
    box-sizing: border-box;
    height: .9rem;
    background: skyblue;
    font-size: .3rem;
    color: white;
}
.search{
    display: flex;
    flex: 1;
    margin:0 .2rem;
    height: 0.7rem;
    line-height: .7rem;
    background: white;
    border-radius: 10px;
    color: #ccc;
}
.search span{
    margin:0 .1rem;
}
.right{
    display: flex;
    align-items: center;
}
</style>