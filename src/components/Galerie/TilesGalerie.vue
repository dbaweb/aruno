<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <VerticalTile
            v-for="item in vertical_tile"
            :key="item.title"
            :title="item.title"
            :subtitle="item.subtitle"
            :technos="item.technos"
          ></VerticalTile>
        </div>
        <div class="tile is-parent" v-for="item in middle_tile" :key="item.title">
          <MiddleTile
            :title="item.title"
            :subtitle="item.subtitle"
            :technos="item.technos"
            :linkImg="item.linkImg"
            :linkSite="item.lien"
          ></MiddleTile>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification has-text-dark has-background-white">
          <p class="title">{{ title_bottom }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalTile from "@/components/Galerie/VerticalTile";
import MiddleTile from "@/components/Galerie/MiddleTile";
export default {
  name: "Tiles",
  components: { VerticalTile, MiddleTile },
  data() {
    return {
      title: "Project",
      subtitle: "Presentation des projets réalisés",
      title_bottom: "A suivre...",
      middle_tile: [
        {
          title: "Rose Bonbon",
          subtitle: "Création de site",
          linkImg: "../../assets/img/LOGO_TEST.png",
          technos: [
            { nom: "Html/Css", couleur: "has-background-primary" },
            { nom: "Javascript", couleur: "has-background-success" },
            { nom: "Php", couleur: "has-background-warning" },
            { nom: "Bootstrap", couleur: "has-background-info" },
            { nom: "Intagram API", couleur: "has-background-danger" }
          ],
          lien: "http://www.rosebonbon.be"
        },
        {
          title: "Malek",
          subtitle: "Intégration d'api",
          linkImg: "../../assets/img/LOGO_TEST.png",
          technos: [
            { nom: "Youtube API", couleur: "has-background-danger" },
            { nom: "Twitch API", couleur: "has-background-danger" },
            { nom: "Javascript", couleur: "has-background-success" },
            { nom: "AngularJS", couleur: "has-background-link" }
          ],
          lien: "https://malekcsgo.fr/"
        }
      ],
      vertical_tile: [
        {
          title: "Brosius",
          subtitle: "Création de site",
          technos: [
            { nom: "Html/Css", couleur: "has-background-primary" },
            { nom: "Javascript", couleur: "has-background-success" },
            { nom: "Php", couleur: "has-background-warning" },
            { nom: "MaterializeCSS", couleur: "has-background-info" }
          ],
          lien: ""
        },
        {
          title: "Mons 2015",
          subtitle: "Projet formation",
          technos: [
            { nom: "Html/Css", couleur: "has-background-primary" },
            { nom: "Javascript", couleur: "has-background-success" }
          ],
          lien: ""
        }
      ]
    };
  }
};
</script>

<style></style>
