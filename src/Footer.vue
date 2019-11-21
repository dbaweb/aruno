<template>
  <footer class="footer has-padding-6 has-margin-top-3 has-text-white">
    <div class="content has-text-centered">
      <p>
        <strong class="has-text-white is-1">{{ titre }}</strong>
        by {{ auteur }}.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      titre: "Aruno",
      auteur: "Arnaud De Boeck"
    };
  }
};
</script>

<style>
footer {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
</style>
