<template>
  <section id="galerie" class="hero is-fullheight">
    <NavBar></NavBar>
    <div class="container has-text-centered">
      <h1 class="title is-1 has-margin-bottom-6 has-margin-top-7">{{ titre }}</h1>
      <Tiles></Tiles>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import Tiles from "@/components/Galerie/TilesGalerie";
import NavBar from "../NavBar";
import Footer from "../Footer";
export default {
  name: "Project",
  components: { Tiles, NavBar, Footer },
  data() {
    return {
      titre: "Project"
    };
  }
};
</script>

<style></style>
