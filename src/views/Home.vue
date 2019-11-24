<template>
  <section class="hero is-fullheight has-text-centered">
    <NavBar></NavBar>
    <div class="hero-body">
      <div class="container">
        <img src="../assets/img/Aruno-Logo-White.png" alt />
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
  components: { NavBar, Footer }
};
</script>
<style scope>
</style>
