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
        store.responseMessage = "Nessun film cercato"
        store[type] = [];
      }else{
        axios.get(store.apiUrl + type ,{
          params:{
            api_key: store.apiKey,
            query: store.query,
            language: store.language
          }
        })
          .then(res =>{
            store.responseMessage = ""
            store[type] = res.data.results;
            store.query = "";
          })
          .catch(err => {
            store.responseMessage = "Nessun Film trovato";
            store[type] = [];
            store.query = "";
          })
      }
    },
    cleanArrays(){
      store.movie = [];
      store.tv = [];
    },
    selectValueSearch(){
      switch(store.selectedValue){
        case "all":
          this.getApi('movie');
          this.getApi('tv');
          break;
        case "movie":
          this.getApi('movie');
          break;
        case "tv":
          this.getApi('tv');
          break;
      }
    },
    search(){
      this.cleanArrays();
      this.selectValueSearch();
    }
    
  }
}
</script>

<template>
  <Header
  @search="search()" 
  />
  <Main />
</template>



<style lang="scss">
@import "./scss/main.scss";
</style>