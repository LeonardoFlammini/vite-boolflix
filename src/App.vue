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
    getApi(type){
      
      if(store.filmToSearch === null){
        store.responseMessage = "Nessun film cercato"
      }else{
        axios.get(store.apiUrl + type ,{
          params:{
            api_key: store.apiKey,
            query: store.filmToSearch,
            language: 'it-IT'
          }
        })
          .then(res =>{
            store[type] = res.data.results;
          })
          .catch(err => {
            store.responseMessage = "Nessun Film trovato"
          })
      }
    },
    searchFilm(){
      this.getApi('movie');
      this.getApi('tv');
      console.log(store.movie,store.tv);
    }
    
  },
  mounted(){
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