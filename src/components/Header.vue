<script>
import {store} from "../data/store"
export default {
  name: "Header",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header>
    <div class="logo">
      <img src="logo-boolflix.png" alt="logo">
    </div>
    <div class="inputs">
      <input
        @keyup.enter="$emit('searchFilm')"
        v-model.trim="store.query"
        type="text"
        class="form-control"
        id="search"
        placeholder="Cerca qui...">
      <select class="form-select" name="select" id="select">
      <option selected value="0">Seleziona tipo</option>
    </select>
    </div>
  </header>
</template>



<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;

header{
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: $header-bg;
  .logo{
    height: 80%;
  }
  .inputs{
    display: flex;
    width: 40%;
    #search,#select{
      margin-left: 10px;
    }
  }
}
</style>