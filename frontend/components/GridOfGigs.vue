<template>
  <v-card class="mx-auto" max-width="100vw">
    <!-- <v-text-field
      class="ma-4"
      @keyup.enter="add()"
      label="Add a concert and hit enter"
      :loading="adding"
    /> -->
    <v-container fluid>
      <FormGig/>
      <v-row dense>
        <v-col v-for="gig in gigs" :key="gig.id" :cols="gig.flex">
          <v-card>
            <div>
              <div class="d-flex flex-column">
                <v-img
                  :src="gig.imgsrc"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                >
                  <v-card-title><h2><b>{{ gig.artist }} - {{ gig.date }}</b></h2></v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      fab
                      x-small>
                      ✎
                    </v-btn>
                    <v-btn
                      fab
                      color="error"
                      x-small>
                      <b>x</b>
                    </v-btn>
                  </v-card-actions>
                </v-img>
              </div>
            </div>


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
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
import AppApi from "~apijs";
import FormGig from "~/components/FormGig.vue"

export default {
  data: () => ({
    gigs: [],
    newGig: {
        id: "",
        artist: "",
        imgsrc: "",
        date: "",
      },
    adding: false,
    loading: false,
  }),
  components: {
    FormGig
  },
  created() {
    this.fetchGigs()
  },
  methods: {
    async fetchGigs() {
      const response = await AppApi.list_gigs()
      this.gigs = response.data.gigs
    },
    
    }
    // update() {

    // },
    // delete() {

    // }
  }
</script>
