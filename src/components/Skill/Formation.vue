<template>
  <div class="content">
    <h2>{{ data.nom}}</h2>
    <p>{{data.type}} - {{ data.lieu}}</p>
    <h5>{{ data.diplome}}</h5>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Formation",
  props: ["data"]
};
</script>

<style>
</style>
