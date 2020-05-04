<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <VerticalTile
            v-for="item in vertical_tile1"
            :key="item.title"
            :title="item.title"
            :subtitle="item.subtitle"
            :technos="item.technos"
            :linkSite="item.lien"
          ></VerticalTile>
        </div>
        <div class="tile is-parent is-vertical">
          <VerticalTile
            v-for="item in vertical_tile2"
            :key="item.title"
            :title="item.title"
            :subtitle="item.subtitle"
            :technos="item.technos"
            :linkSite="item.lien"
          ></VerticalTile>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification has-text-dark article-white">
          <p class="title">{{ title_bottom }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalTile from "@/components/Galerie/VerticalTile";
export default {
  name: "Tiles",
  components: { VerticalTile },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      title: "Project",
      subtitle: "Presentation des projets réalisés",
      title_bottom: "A suivre...",
      vertical_tile1: [
        {
          title: "Alpha High End - Occasions",
          subtitle: "Création de site web - en cours",
          technos: [
            {
              nom: "Html",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "html5" }
            },
            {
              nom: "Css",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "css3" }
            },
            {
              nom: "Javascript",
              couleur: "has-background-success",
              icon: { type: "fab", nom: "js" }
            },
            {
              nom: "Php",
              couleur: "has-background-warning",
              icon: { type: "fab", nom: "php" }
            },
            {
              nom: "Symfony 4",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "symfony" }
            },
          ],
          lien: ""
        },
        {
          title: "Clothes Udemy",
          subtitle: "Webshop ReactJs app for Udemy formation",
          technos: [
            {
              nom: "Html",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "html5" }
            },
            {
              nom: "Css",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "css3" }
            },
            {
              nom: "Javascript",
              couleur: "has-background-success",
              icon: { type: "fab", nom: "js" }
            },
            {
              nom: "ReactJs",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "react" }
            },
            {
              nom: "Firebase",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "google" }
            }
          ],
          lien: "https://clothes-udemy.herokuapp.com/"
        },

        {
          title: "Rose Bonbon",
          subtitle: "Création de site",
          technos: [
            {
              nom: "Html",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "html5" }
            },
            {
              nom: "Css",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "css3" }
            },
            {
              nom: "Javascript",
              couleur: "has-background-success",
              icon: { type: "fab", nom: "js" }
            },
            {
              nom: "Php",
              couleur: "has-background-warning",
              icon: { type: "fab", nom: "php" }
            },
            {
              nom: "Bootstrap",
              couleur: "has-background-info",
              icon: { type: "fab", nom: "bootstrap" }
            },
            {
              nom: "Intagram API",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "instagram" }
            }
          ],
          lien: "http://www.rosebonbon.be"
        },
      ],
      vertical_tile2: [

        {
          title: "Monster Udemy",
          subtitle: "Simple ReactJs app for Udemy formation",
          technos: [
            {
              nom: "Html",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "html5" }
            },
            {
              nom: "Css",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "css3" }
            },
            {
              nom: "Javascript",
              couleur: "has-background-success",
              icon: { type: "fab", nom: "js" }
            },
            {
              nom: "ReactJs",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "react" }
            },
          ],
          lien: "https://dbaweb.github.io/monsters-react-udemy/"
        },
        {
          title: "Gerard Brosius",
          subtitle: "Création de site",
          technos: [
            {
              nom: "Html",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "html5" }
            },
            {
              nom: "Css",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "css3" }
            },
            {
              nom: "Javascript",
              couleur: "has-background-success",
              icon: { type: "fab", nom: "js" }
            },
            {
              nom: "Php",
              couleur: "has-background-warning",
              icon: { type: "fab", nom: "php" }
            },
            {
              nom: "ReactJs",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "react" }
            },
            {
              nom: "Firebase",
              couleur: "has-background-danger",
              icon: { type: "fab", nom: "google" }
            },
            {
              nom: "MaterializeCSS",
              couleur: "has-background-info",
              icon: { type: "fab", nom: "instagram-square" }
            }
          ],
          lien: "https://www.gerardbrosius.eu/"
        },
        {
          title: "Mons 2015",
          subtitle: "Projet formation",
          technos: [
            {
              nom: "Html",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "html5" }
            },
            {
              nom: "Css",
              couleur: "has-background-primary",
              icon: { type: "fab", nom: "css3" }
            },
            {
              nom: "Javascript",
              couleur: "has-background-success",
              icon: { type: "fab", nom: "js" }
            }
          ],
          lien: "https://dbaweb.github.io/ProjectMons2015/"
        }
      ]
    };
  }
};
</script>

<style></style>
