import {reactive} from "vue";

export const store = reactive({
  apiUrlSearchFilm: "https://api.themoviedb.org/3/search/movie",
  apiUrlSearchTv: "https://api.themoviedb.org/3/search/tv",
  apiKey: "5a1e956977eb8a205bbc620fee332400",
  filmToSearch : null,
  filmArray: [],
  isHome: true,
  responseMessage: null,
});