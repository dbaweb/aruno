<template>
  <section id="contact" class="hero is-fullheight">
    <NavBar></NavBar>
    <div class="container has-text-centered">
      <h1 class="title is-1 has-margin-bottom-6 has-margin-top-7">
        {{ titre }}
      </h1>
      <ContactTile></ContactTile>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import NavBar from "@/NavBar";
import Footer from "@/Footer";
import ContactTile from "@/components/Contact/ContacTile";
export default {
  name: "Contact",
  components: { ContactTile, NavBar, Footer },
  data() {
    return {
      titre: "Contact"
    };
  }
};
</script>

<style></style>
