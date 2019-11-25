<template>
  <article
    class="tile is-child notification has-background-white has-padding-5 has-text-left article-white"
    :class="color"
  >
    <h1 class="title">{{ data.titre }}</h1>
    <hr />
    <div v-for="skill in data.skills" :key="skill.nom">
      <span>
        <p style="margin-bottom:0.5em">{{ skill.nom }} :</p>
        <ProgressBar :pourcentage="skill.pourcentage" :color="data.color" />
      </span>
    </div>
  </article>
</template>

<script>
import ProgressBar from "@/components/Skill/ProgressBar";
export default {
  name: "ProgressBarTile",
  props: ["data", "color"],
  components: { ProgressBar }
};
</script>

<style>
.article-white {
  background-color: rgba(255, 255, 255, 0.8) !important;
  border: 10px solid white;
}
</style>
