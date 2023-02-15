<template>
  <v-app dark>
    <toolbar :state="layout" />
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
    <le-footer />
  </v-app>
</template>

<script>
import toolbar from "~/components/toolbar.vue";
import footer from "~/components/footer.vue";
export default {
  components: {
    toolbar,
    leFooter: footer
  },
  data: () => ({})
};
</script>

<style>
.v-app {
  background-color: black !important;
}

::selection {
    background-color: #d7f171;
    color: #000;
    text-shadow: none;
}

a {
  text-decoration: none;
  font-weight: 800;
  color: #fff;
}
</style>
