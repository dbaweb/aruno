<template>
  <progress
    class="progress has-margin-bottom-7 is-info"
    :value="pourcentage"
    max="100"
  ></progress>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["pourcentage"]
};
</script>

<style>
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: hsl(0, 0%, 29%) !important;
}
</style>
