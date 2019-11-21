<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent">
          <Form></Form>
        </div>
        <div class="tile is-parent is-8">
          <Information></Information>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form";
import Information from "./Information";
export default {
  name: "ContactTile",
  components: { Form, Information },
  data() {
    return {
      titreG: "Me contacter",
      titreD: "Information",
      nom: "De Boeck",
      prenom: "Arnaud",
      tel: "+32 474 785 158",
      mail: "deboeck.arnaud@gmail.com",
      location: "Belgium"
    };
  }
};
</script>

<style></style>
