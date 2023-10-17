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
      if(store.query === ''){
        console.log("Nessun film cercato");
        store.responseMessage = "Nessun film cercato"
      }else{
        console.log(store.query);
        axios.get(store.apiUrl + type ,{
          params:{
            api_key: store.apiKey,
            query: store.query,
            language: store.language
          }
        })
          .then(res =>{
            store[type] = res.data.results;
            store.query = "";
            console.log(store[type]);
          })
          .catch(err => {
            store.responseMessage = "Nessun Film trovato";
            store.query = "";
          })
      }
    },
    searchFilm(){
      this.getApi('movie');
      this.getApi('tv');
      // console.log(store.movie,store.tv);
    }
    
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