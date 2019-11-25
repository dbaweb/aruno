<template>
  <article class="tile is-child notification has-background-white has-padding-5 article-white">
    <p class="title is-4">{{ title }}</p>
    <p class="subtitle is-6">{{ subtitle }}</p>
    <p
      v-for="item in technos"
      class="techno has-text-white"
      :class="item.couleur"
      v-bind:key="item.nom"
    >{{ item.nom }}</p>
    <br />
    <a class="button is-info has-margin-top-5" type="submit" :href="linkSite">Lien</a>
  </article>
</template>

<script>
export default {
  name: "MiddleTile",

  props: ["title", "subtitle", "technos", "linkImg", "linkSite"]
};
</script>

<style></style>
