import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let defaultCity = '上海';
defaultCity = localStorage.getItem('city') || '上海'

const state = {
    city:defaultCity
}
const mutations = {
    // state系统自动注入的参数
    changeCity (state, newCity){
        state.city = newCity;
        localStorage.setItem("city",newCity)
    }
}

export default new Vuex.Store({
 state,
 mutations
})