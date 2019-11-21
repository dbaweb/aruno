<template>
  <box
    class="tile is-child notification has-text-grey-dark has-background-white"
  >
    <p class="title is-4">{{ title }}</p>
    <p class="subtitle is-6">{{ subtitle }}</p>
    <p
      v-for="item in technos"
      class="techno has-text-white"
      :class="item.couleur"
      v-bind:key="item"
    >
      {{ item.nom }}
    </p>
    <br />
    <button class="button is-primary">Lien</button>
  </box>
</template>

<script>
export default {
  name: "ArticleTile",
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
