<template>
  <nav class="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item is-size-4 has-text-light logo" to="/">Aruno</router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="isOpen = !isOpen"
          :class="{ 'is-active': isOpen }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar-menu"
        class="navbar-menu"
        :class="{'is-active': isOpen, 'bg-transparent': isOpen}"
      >
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <router-link
            v-for="item in navItem"
            :key="item.item"
            :to="item.route"
            class="navbar-item is-size-4 has-margin-right-7 has-text-white"
          >{{ item.item }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      nom: "Aruno",
      isOpen: false,
      navItem: [
        { item: "Home", route: "/" },
        { item: "Skill", route: "/skill" },
        { item: "Projets", route: "/project" },
        { item: "Contact", route: "/about" }
      ]
    };
  }
};
</script>

<style>
.navbar {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.bg-transparent {
  background-color: rgba(255, 255, 255, 0) !important;
}

.logo {
  font-family: "Tahu";
  color: white;
}
</style>
