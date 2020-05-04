<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent">
          <SkillsTile :data="programmation"></SkillsTile>
        </div>
        <div class="tile is-parent">
          <SkillsTile :data="framework"></SkillsTile>
        </div>
      </div>
      <div class="tile is-vertical">
        <div class="tile is-parent">
          <SkillsTile :data="programme"></SkillsTile>
        </div>
        <div class="tile is-parent">
          <SkillsTile :data="language"></SkillsTile>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <FormationTile :data="formation"></FormationTile>
    </div>
  </div>
</template>

<script>
import SkillsTile from "@/components/Skill/SkillsTile";
import FormationTile from "@/components/Skill/FormationTile";
export default {
  name: "Tiles",
  components: { SkillsTile, FormationTile },
  data() {
    return {
      programmation: {
        titre: "Programmation",
        skills: [
          { nom: "Html/css", pourcentage: 95 },
          { nom: "Javascript", pourcentage: 80 },
          { nom: "Php", pourcentage: 70 },
          { nom: "Java", pourcentage: 70 }
        ]
      },
      framework: {
        titre: "Framework",
        skills: [
          { nom: "ReactJs", pourcentage: 75 },
          { nom: "VueJs", pourcentage: 70 },
          { nom: "AngularJs", pourcentage: 50 },
          { nom: "Symfony 4", pourcentage: 65 },
          { nom: "Bootstrap/Bulma/Materialize", pourcentage: 90 }
        ]
      },
      language: {
        titre: "Language",
        skills: [
          { nom: "Français", pourcentage: 100 },
          { nom: "Anglais", pourcentage: 40 }
        ]
      },
      programme: {
        titre: "Programme",
        skills: [
          { nom: "Visual Studio Code", pourcentage: 90 },
          { nom: "PhpStorm", pourcentage: 75 },
          { nom: "WebStonr", pourcentage: 75 },
          { nom: "Eclipse", pourcentage: 75 },
          { nom: "Adobe Suite", pourcentage: 75 }
        ]
      },
      formation: {
        titre: "Formation",
        formations: [
          {
            nom: "Institut Saint-Luc",
            lieu: "Tournai",
            type: "Secondaire",
            diplome: "CESS - Opérateur en industrie graphique"
          },
          {
            nom: "Design Innovation",
            lieu: "Mons",
            type: "Formation",
            diplome: "Webdesign et intéraction"
          },
          {
            nom: "Microsoft Innovation Center",
            lieu: "Mons",
            type: "Formation/stage",
            diplome: "Graphic webdesigner @ work"
          },
          {
            nom: "Institut Paul-Lambin",
            lieu: "Bruxelles",
            type: "Bachelier",
            diplome: "Arrêt en fin de deuxième année"
          },
          {
            nom: "Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)",
            lieu: "Udemy.com",
            type: "Formation",
            diplome: "En cours"
          }
        ]
      }
    };
  }
};
</script>

<style></style>
