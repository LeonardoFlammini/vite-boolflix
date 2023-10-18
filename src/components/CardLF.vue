<script>
import {store} from "../data/store"
import Stars from "./Stars.vue"
export default {
  name:"CardLF",
  data(){
    return{
      store
    }
  },
  props:{
    title: String,
    overView: String,
    imgPath: String,
    originalLanguage: String,
    vote: Number
  },
  components:{
    Stars
  },
  methods:{
    getImagePath(lang){
      return new URL ( `/public/country-4x3/${lang}.svg`, import.meta.url ).href;
    }
  }
}
</script>

<template>
  <div class="col d-flex" >
    <div class="card-container-lf">
      <div class="poster">
        <img v-if="imgPath" class="poster-img" :src="`https://image.tmdb.org/t/p/original/${imgPath}`" :alt="`${title}`">
        <div v-else class="no-img"><i class="fa-solid fa-film"></i></div>
      </div>
      
      <div class="info-box">
        <h3 class="title">{{ title }}</h3>
        <Stars
          :vote="vote"
        />
        <div class="flag">
          <!-- <img 
            :src="`https://flagcdn.com/16x12/${originalLanguage}.png`"
            :srcset="`https://flagcdn.com/32x24/${originalLanguage}.png 2x,
              https://flagcdn.com/48x36/${originalLanguage}.png 3x`"
            width="16"
            height="12"
            :alt="`${originalLanguage}`"
          > -->
          <img v-if="store.languages.includes(originalLanguage)" :src="getImagePath(originalLanguage)" :alt="originalLanguage">
        </div>
        <div v-if="overView" class="overview">{{ overView }}</div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars.scss" as *;
.card-container-lf{
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  color: black;
  &:hover .poster{
      opacity: .2;
    }
  &:hover .info-box{
    top: 20%;
  }
  .poster{
    width: 100%;
    height: 100%;
    .poster-img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.9;
      transition: opacity .2s ease-out;
    }

    .no-img{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 90px;
      color: lighten($main-bg, 20%);
    }
  }
  .info-box{
    padding: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    transition: all .7s;
    color: white;
    .flag{
      width: 16px;
      height: 12px;
    }
    .overview {
      margin-top: 30px;
      display: block;
      height: 250px;
      inset: auto auto 80px 30px;
      overflow: auto; 
      border-radius: 15px;
      padding: 5px;
      background-color: rgba($color: #000000, $alpha: .2);
    }
    
  } 
}
</style>