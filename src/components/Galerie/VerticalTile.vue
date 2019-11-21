<template>
  <article
    class="tile is-child notification has-background-white has-padding-5 article-white"
  >
    <p class="title is-4">{{ title }}</p>
    <p class="subtitle is-6">{{ subtitle }}</p>
    <p
      v-for="item in technos"
      class="techno has-text-white"
      :class="item.couleur"
      :key="item.nom"
    >
      {{ item.nom }}
    </p>
    <br />
    <a class="button is-info has-margin-top-5">Lien</a>
  </article>
</template>

<script>
export default {
  name: "VerticalTile",
  props: ["title", "subtitle", "technos"]
};
</script>

<style>
.techno {
  font-size: 0.75rem;
  display: inline-block;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 0.5em;
}
</style>
