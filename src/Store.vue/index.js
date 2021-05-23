import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    games: [],
  },
  mutations: {
    increment(state, res) {
      state.games = res;
    },
  },
  actions: {
    a({ commit }) {
      fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "0044251e5cmsh8b9baa2395fc468p104f8ajsna37719349f39",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
        .then((response) => {
          // console.log(response);

          return response.json();
        })

        .then((data) => {
          commit("increment", data);
        })

        .catch((err) => {
          console.error(err);
        });
    },
  },
});
export default store;
// const app = createApp({
// });

// app.use(store);
