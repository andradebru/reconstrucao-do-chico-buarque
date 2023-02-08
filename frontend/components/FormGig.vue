<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="artist"
            :counter="50"
            label="Artist"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="imgsrc"
            :counter="500"
            label="Img URL"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <PickDate />
        </v-col>
      </v-row>
    </v-container>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="addGig">
      Save
    </v-btn>
    <v-btn :disabled="!valid" class="mr-4" @click="reset">
      Clear
    </v-btn>
  </v-form>
</template>

<script>
import AppApi from "~apijs";
import PickDate from "~/components/PickDate.vue"

  export default {
    data: () => ({
        valid: false,
        artist: '',
        imgsrc: '',
        date: '',
    //     artist: [
    //         v => !!v || 'Artist name is required',
    //         v => v.length <= 50 || 'Name must be less than 50 characters',
    //   ],
    }),
    components: {
        PickDate
    } ,
    created() {
        this.listGigs()
  },
    methods: {
        async listGigs() {
            const response = await AppApi.list_gigs()
            this.gigs = response.data.gigs
        },
        setDate(date) {
            this.date = date
        },
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        async addGig() {
                await AppApi.add_gig(this.artist, this.imgsrc, this.date)
                this.listGigs(),
                this.artist = "",
                this.imgsrc = "",
                this.date = null
            },
        }
    }
</script>history | grep "vue init" "projetofinal"
