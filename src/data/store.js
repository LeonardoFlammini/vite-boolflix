import {reactive} from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiKey: "5a1e956977eb8a205bbc620fee332400",
  query: '',
  language: 'it-IT',
  movie: [],
  tv:[],
  // isHome: true,
  responseMessage: '',
  selectedValue: '',
  
});