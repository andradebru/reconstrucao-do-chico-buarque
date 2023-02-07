<template>
  <v-container fluid blue>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        v-for of gigs
        <GigCard />
        <!-- <GigCard />
        <GigCard /> -->
        <!-- <GigCard />
        <GigCard /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GridOfGigs from "~/components/GridOfGigs.vue";
import PickDate from "~/components/PickDate.vue";
import GigCard from "~/components/GigCard.vue";

export default {
  components: {
    GigCard
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ]
  })
};
</script>
