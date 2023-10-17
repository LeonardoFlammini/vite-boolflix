<script>
export default {
  name: "Card",
  props:{
    title: String,
    overView: String,
    imgPath: String
  }
}
</script>

<template>
  <div class="col d-flex" >
    <div class = "card-lf">
      <img v-if="imgPath" :src="`https://image.tmdb.org/t/p/original/${imgPath}`" alt="">
      <div v-else class="no-img"><i class="fa-solid fa-film"></i></div>
      <div class="card-content-lf">
        <h2>
          {{ title }}
        </h2>
        <p v-if="overView">
          {{ overView }}
        </p>
        
      </div>
    </div>
  </div>

</template>


<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;
// Colors
$color-primary-white: rgb(240, 240, 240);

// main {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 50px;
//   font-family: 'Roboto', sans-serif;
// }

.card-lf {
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: $color-primary-white;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  .no-img{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 90px;
    color: lighten($main-bg, 20%);
  }
 
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity .2s ease-out;
  }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    // font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
  }
  
  p, a {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
  }
  
  p {
    display: inline-block;
    height: 100px;
    inset: auto auto 80px 30px;
    overflow: auto;
    border: 1px solid white;
    border-radius: 15px;
    padding: 5px;
  }
  
  a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
  }
  
  &:hover h2 {
    inset: auto auto 220px 30px;
    transition: inset .3s ease-out;
  }
  
  &:hover p, &:hover a {
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }
  
  &:hover img {
    transition: opacity .3s ease-in;
    opacity: .2;
  }

}

.material-symbols-outlined {
  vertical-align: middle;
}

</style>