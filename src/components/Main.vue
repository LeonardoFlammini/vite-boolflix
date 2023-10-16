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
      <h1 v-if="store.isHome">Cerca Film</h1>
      <div v-else class="film-container">
        <h1>Film</h1>
        <div class="film-wrapper container-fluid my-3">
          <div class="row row-cols-5"></div>
        </div>
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