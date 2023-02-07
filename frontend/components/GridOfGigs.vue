<template>
  <v-card class="mx-auto" max-width="500">
    <v-text-field
      class="ma-4"
      @keyup.enter="add()"
      label="Add a concert and hit enter"
      :loading="adding"
    />
    <v-container fluid>
      <v-row dense>
        <v-col v-for="gig in gigs" :key="gig.id" :cols="gig.flex">
          <v-card>
            <v-img
              :src="gig.imgsrc"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <!-- <v-card-title v-text="gig.artist"></v-card-title> -->
              <v-card-title>{{ gig.artist }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>
                Edit
              </v-btn>
              <v-btn>
                Delete
              </v-btn>

              <!-- icones nao estao funcionando deus nos ajude
               <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
              <!-- <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn> -->
            </v-card-actions>
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import AppApi from "~apijs";

export default {
  data: () => ({
    gigs: [],
    newGig: "",
    adding: false,
    loading: false,
  }),
  created() {
    this.fetchGigs()
  },
  methods: {
    async fetchGigs() {
      const response = await AppApi.list_gigs()
      this.gigs = response.data.gigs
    },
    add() {
      this.adding = true;
      add_gig(this.newGig).then(response => {
        const gigs = response.data;
        this.items.push(gigs);
        this.newGig = "";
        this.adding = false;
      });
    }
    // update() {

    // },
    // delete() {

    // }
  }
};
</script>
