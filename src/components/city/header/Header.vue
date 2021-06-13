<template>
  <div class="wrap">
      <div class="left" @click="toHome()">
          <span class="iconfont icon-zuojiantou"></span>
      </div>
      <p>热门城市</p>
  </div>
</template>

<script>
export default {
    methods:{
        toHome(){
            this.$router.push('/home')
        },

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
.wrap p{
    flex: 1;
    text-align: center;
}
</style>