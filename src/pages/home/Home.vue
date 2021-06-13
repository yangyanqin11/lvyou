<template>
  <div class="home">
      <Header />
      <Banner />
      <NavList />
      <Location /> 
      <Activity/> 
      <Hot />  
      <Like />
      <Vacation />
      
  </div>
</template>

<script>
import Header from '../../components/home/header/Header';
import Banner from '../../components/home/banner/Banner';
import NavList from '../../components/home/navlist/NavList';
import Location from '../../components/home/location/Location';
import Activity from '../../components/home/activity/Activity'
import Hot from '../../components/home/hot/Hot'
import Like from '../../components/home/like/Like.vue'
import Vacation from '../../components/home/vacation/Vacation.vue'
export default {
components:{
    Header,
    Banner,
    NavList,
    Location,
    Activity,
    Hot,
    Like,
    Vacation
}

}
</script>

<style scoped>
.home{
  background: #f5f5f5;
}


</style>