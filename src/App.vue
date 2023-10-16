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
      store.isHome = false;
      
      if(store.filmToSearch === null){
        
        store.responseMessage = "Nessun film cercato"
      }else{
        axios.get(store.apiUrlSearchFilm ,{
          params:{
            api_key: store.apiKey,
            query: store.filmToSearch
          }
        })
          .then(res =>{
            console.log(res);
          })
          .catch(err => {
            store.responseMessage = "Nessun Film trovato"
            console.log(err);
          })
    }
      }
  },
  mounted(){
    store.isHome = true;
  }
}
</script>

<template>
  <Header
  @searchFilm="searchFilm()" 
  />
  <Main />
</template>



<style lang="scss">
@import "./scss/main.scss";
</style>