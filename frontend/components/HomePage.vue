<template>
  <v-container>
    <PickDate />
    <GridOfGigs />
  </v-container>
</template>

<script>
import GridOfGigs from "~/components/GridOfGigs.vue";
import PickDate from "~/components/PickDate.vue";

export default {
  components: {
    GridOfGigs,
    PickDate
  },
  data() {
    return {};
  }
};
</script>
