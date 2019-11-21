<template>
  <article
    class="tile is-child notification has-background-white has-padding-5 has-text-left article-white"
  >
    <form action>
      <h1 class="title">{{ titre }}</h1>
      <hr class="has-margin-bottom-5" />
      <input class="input has-margin-bottom-6" type="text" :placeholder="inputNom" />
      <input class="input has-margin-bottom-6" type="text" :placeholder="inputMail" />
      <div class="control has-margin-bottom-2">
        <textarea class="textarea" :placeholder="commentaire"></textarea>
      </div>
      <button class="button is-info">{{button}}</button>
    </form>
  </article>
</template>

<script>
export default {
  name: "From",
  data() {
    return {
      titre: "Me contacter",
      commentaire: "Votre commentaire",
      inputNom: "Votre nom",
      inputMail: "Votre mail",
      button: "Envoyer"
    };
  }
};
</script>

<style>
</style>
