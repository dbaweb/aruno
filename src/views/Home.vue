<template>
  <section class="hero is-fullheight has-text-centered">
    <NavBar></NavBar>
    <div class="hero-body">
      <div class="container">
        <div id="title" data-aos="fade-right" data-aos-duration="2000">
          <h1 class="title is-1">{{ titre }}</h1>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <h2 class="subtitle">{{ description }}</h2>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import NavBar from "../NavBar";
import Footer from "../Footer";
export default {
  name: "home",
  components: { NavBar, Footer },
  data() {
    return {
      titre: "Aruno",
      description: "Web developer"
    };
  }
};
</script>
