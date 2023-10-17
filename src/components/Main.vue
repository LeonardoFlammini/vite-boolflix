<script>
import {store} from "../data/store"
import Wrapper from "./Wrapper.vue"
export default {
  name:"Main",
  data(){
    return{
      store
    }
  },
  components:{
    Wrapper
  }
}
</script>

<template>
  <main>
    <div class="container my-5">
      <Wrapper
        v-if="store.movie.length > 0"
        title="movie"
        />
      <Wrapper
        v-if="store.tv.length > 0"
        title="tv"
        />
      <div v-else>
        <h1>Cerca Film</h1>
        <h3>{{ store.responseMessage }}</h3>
      </div>
    </div>
  </main>
</template>



<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;
main{
  overflow: auto;
  height: calc(100vh - 70px);
  background-color:$main-bg;
  color: lighten($main-bg, 20%);
}
</style>