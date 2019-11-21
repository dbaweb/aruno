<template>
  <article
    class="tile is-child notification has-background-white has-padding-5 has-text-left article-white"
  >
    <div class="columns">
      <div class="column">
        <h1 class="title">{{ titre }}</h1>
        <hr class="has-margin-bottom-5" />
        <h2 class="title is-4 has-margin-bottom-6">{{ prenom + " " + nom }}</h2>
        <p class="title is-6">
          <font-awesome-icon
            :icon="['fas', 'mobile-alt']"
            class="has-margin-right-6"
          />{{ tel }}
        </p>
        <p class="title is-6">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="has-margin-right-6"
          />{{ mail }}
        </p>
        <p class="title is-6">
          <font-awesome-icon
            :icon="['fas', 'map-marker-alt']"
            class="has-margin-right-6"
          />{{ location }}
        </p>
        <hr class="has-margin-top-5 has-margin-bottom-5" />
        <p class="title is-2">
          <font-awesome-icon
            v-for="item in socialIcon"
            :key="item.nom"
            :icon="[item.type, item.nom]"
            style="margin-right:0.2em;"
          />
        </p>
      </div>
      <div class="column">
        <img src="../../assets/img/profil.png" alt />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "From",
  data() {
    return {
      titre: "Information",
      nom: "De Boeck",
      prenom: "Arnaud",
      tel: "+32 474 785 158",
      mail: "deboeck.arnaud@gmail.com",
      location: "Belgium",
      socialIcon: [
        {
          type: "fab",
          nom: "facebook-square"
        },
        {
          type: "fab",
          nom: "twitter-square"
        },
        {
          type: "fab",
          nom: "linkedin"
        },
        {
          type: "fab",
          nom: "git-square"
        },
        {
          type: "fab",
          nom: "github-square"
        }
      ]
    };
  }
};
</script>

<style></style>
