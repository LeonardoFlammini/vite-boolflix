<script>
import {store} from "../data/store"
import Card from "./CardLF.vue"
export default {
  name:"Wrapper",
  data(){
    return{
      store
    }
  },
  props:{
    title: String
  },
  components:{
    Card
  }
}
</script>

<template>
  <div  class="film-container my-5">
        <h1>{{ title }}</h1>
        <h3>{{ store.responseMessage }}</h3>
        <div class="film-wrapper container-fluid my-3">
          <div class="row row-cols-3 row-gap-3 ">
            <Card
              v-for="item in store[title]"
              :key="item.id" 
              :title="item.title || item.name"
              :overView="item.overview"
              :imgPath="item.poster_path"
              :vote="item.vote_average"
              :originalLanguage="item.original_language"
            />
          </div>
        </div>
      </div>
</template>


<style scoped lang="scss">
h1{
  font-weight: bold;
  text-transform: capitalize;
}
</style>