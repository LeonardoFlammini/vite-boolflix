<script>
import axios from 'axios'
import {store} from "./data/store"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
export default {
  name : "App",
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    searchFilm(){

    }
  }
}
</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss">
@import "./scss/main.scss";
</style>