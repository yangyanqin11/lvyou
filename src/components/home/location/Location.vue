<template>
<ul class="location border-top">
  <li class="location-item border-right">
    <span class="iconfont icon-icon-test"></span>
    <p>定位失败</p>
  </li>
  <li  class="location-item">
    <span class="iconfont icon-diqiu"></span>
    <p>玩水季</p>
  </li>
</ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.location{
  padding-top: .1rem;
  display: flex;
  position: relative;
  height: 1rem;
  font-size: .3rem;
  background:white;
}
.location-item{
flex: 1;
display: flex;
align-items: center;
justify-content: center;
}
.icon-icon-test{
  color: black;
}
.iconfont{
  margin-right: .1rem;
}
</style>