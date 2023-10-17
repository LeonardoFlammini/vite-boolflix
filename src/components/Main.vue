<script>
import {store} from "../data/store"
export default {
  name:"Main",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <main>
    <div class="container my-5">
      <div v-if="store.movie.length > 0" class="film-container">
        <h1>{{ store.filmToSearch }}</h1>
        <h3>{{ store.responseMessage }}</h3>
        <div class="film-wrapper container-fluid my-3">
          <div class="row row-cols-5"></div>
        </div>
      </div>
      <h1 v-else>Cerca Film</h1>
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