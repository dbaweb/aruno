<template>
  <article class="tile is-child notification has-background-white has-padding-5 article-white">
    <p class="title is-3 has-margin-bottom-7">{{ title }}</p>
    <p class="subtitle is-5">{{ subtitle }}</p>
    <p v-for="item in technos" class="techno" :class="item.couleur" :key="item.nom">
      <font-awesome-icon :icon="[item.icon.type, item.icon.nom]" style="margin-right:0.2em;" />
      {{ item.nom }}
    </p>
    <br />
    <a
      class="button is-info has-margin-top-5"
      :v-show="linkSite!==''"
      :href="linkSite"
      target="_blank"
    >Lien</a>
  </article>
</template>

<script>
export default {
  name: "VerticalTile",
  props: ["title", "subtitle", "technos", "linkSite"]
};
</script>

<style>
.techno {
  font-size: 0.9rem;
  display: inline-block;
  padding: 1em;
  margin: 0.5em;
  border-radius: 0.5em;
}
</style>
