<template>
  <v-card class="mx-auto" max-width="500">
    <v-text-field
      class="ma-4"
      v-model="newGig"
      @keyup.enter="add()"
      label="Add a gig and hit enter"
      :loading="adding"
    />
    <v-container fluid>
      <v-row dense>
        <v-col v-for="gig in gigs" :key="gig.artist" :cols="gig.flex">
          <v-card>
            <v-img
              :src="gig.imgsrc"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="gig.artist"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>
                editar
              </v-btn>
              <v-btn>
                excluir
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
  data() {
    return {
      newGig: "",
      adding: false,
      loading: false,
      items: []
    };
  },
  data: () => ({
    gigs: [
      {
        artist: "Metallica",
        imgsrc:
          "https://i0.wp.com/guitarload.com.br/wp-content/uploads/2021/09/metallica-tributo-black-album.jpg?fit=1200%2C628&ssl=1",
        flex: 12
      },
      {
        artist: "Wesley Safadao",
        imgsrc:
          "https://vejasp.abril.com.br/wp-content/uploads/2017/04/wesley-safadao.jpg",
        flex: 6
      },
      {
        artist: "Ney Matogrosso",
        imgsrc:
          "https://esquinamusical.com.br/wp-content/uploads/2022/02/neymatogrosso.jpg",
        flex: 6
      }
    ]
  }),
  mounted() {
    this.loading = true;
    AppApi.list_gigs().then(response => {
      const gigs = response.data.gigs;
      this.items = gigs;
      this.loading = false;
    });
  },
  methods: {
    add() {
      this.adding = true;
      AppApi.add_gig(this.newGig).then(response => {
        const gigs = response.data;
        this.items.push(gigs);
        this.newGig = "";
        this.adding = false;
      });
    }
  }
};
</script>
