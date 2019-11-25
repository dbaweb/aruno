<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nom: "Aruno"
    };
  }
};
</script>

<style>
@import "~bulma/css/bulma.css";
@import "./assets/css/main.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/img/Background-Radial-compressor.jpg");
  background-size: cover;
  background-attachment: fixed;
}

@font-face {
  font-family: "Tahu";
  src: url("./assets/font/Tahu.ttf");
}
@font-face {
  font-family: "Bison";
  src: url("./assets/font/Bison.ttf");
}
</style>
