<template>
  <section id="skills" class="hero is-fullheight">
    <NavBar></NavBar>
    <div class="container has-text-centered">
      <h1 class="title is-1 has-margin-bottom-6 has-margin-top-7">{{ titre }}</h1>
      <TilesSkills></TilesSkills>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import TilesSkills from "@/components/Skill/TilesSkills";
import NavBar from "../NavBar";
import Footer from "@/Footer";
export default {
  name: "Skill",
  components: { TilesSkills, Footer, NavBar },
  data() {
    return {
      titre: "Skills"
    };
  }
};
</script>

<style></style>
