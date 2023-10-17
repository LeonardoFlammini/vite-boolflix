<script>
import {store} from "../data/store"
import Card from "./Card.vue"
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
  <div  class="film-container">
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
            />
          </div>
        </div>
      </div>
</template>


<style scoped lang="scss">

</style>