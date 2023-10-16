import {reactive} from "vue";

export const store = reactive({
  apiProva: "https://api.themoviedb.org/3/search/movie?api_key=5a1e956977eb8a205bbc620fee332400&query=ritorno+al+futuro",
  apiUrlSearchFilm: "https://api.themoviedb.org/3/search/movie",
  apiUrlSearchTv: "https://api.themoviedb.org/3/search/tv",
  apiKey: "5a1e956977eb8a205bbc620fee332400",
  filmToSearch : null,
  filmArray: [],
  isHome: true,
  responseMessage: null,
});