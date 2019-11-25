<template>
  <article
    class="tile is-child notification has-padding-5 has-text-left article-white"
  >
    <div class="content">
      <h1 class="title">{{ data.titre }}</h1>
      <hr />
    </div>
    <Formation
      v-for="item in data.formations"
      :key="item.nom"
      :data="item"
    ></Formation>
  </article>
</template>

<script>
import Formation from "@/components/Skill/Formation";
export default {
  name: "FormationTile",
  props: ["data"],
  components: { Formation }
};
</script>

<style></style>
