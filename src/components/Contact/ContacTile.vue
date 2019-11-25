<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent">
          <Information></Information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Information from "@/components/Contact/Information";
export default {
  name: "ContactTile",
  components: { Information }
};
</script>

<style></style>
