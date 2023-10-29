<template>
  <div id="app">
    <mainWrapper />
    <button class="move" @click="scrollToTop">
      <div>🠕</div>
    </button>
  </div>
</template>

<script>
import mainWrapper from "./components/main-wrapper.vue";

export default {
  name: "App",
  components: { mainWrapper },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  box-sizing: border-box;
}

#app {
  font-family: "Bebas Neue", "Avenir", "Oswald", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}

p {
  font-family: "Roboto", sans-serif;
}
li {
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
}

.move {
  background-color: #02458d;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 50px;
  height: 60px;
  width: 60px;
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.15s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
}
</style>
