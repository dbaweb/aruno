<template>
  <article class="tile is-child notification has-background-white">
    <p class="title is-4">{{ title }}</p>
    <hr />
  </article>
</template>

<script>
export default {
  name: "TileTitre",
  components: {},
  props: ["title"]
};
</script>

<style></style>
