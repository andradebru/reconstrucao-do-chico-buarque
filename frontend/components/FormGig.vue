<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="artist"
            :rules="Date"
            :counter="50"
            label="Artist"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="imgUrl"
            :rules="Date"
            :counter="180"
            label="Img URL"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <!-- <v-text-field
            v-model="date"
            :rules="dateRules"
            label="Date"
            required
          ></v-text-field> -->
          <PickDate/>
        </v-col>
      </v-row>
    </v-container>
     <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="add"
    >
        Save
    </v-btn>
    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="reset"
    >
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
      imgUrl: '',
      Artist: [
        v => !!v || 'Artist name is required',
        v => v.length <= 50 || 'Name must be less than 50 characters',
      ],
      date: '',
    //   dateRules: [
    //     v => !!v || 'E-mail is required',
    //     v => /.+@.+/.test(v) || 'E-mail must be valid',
    //   ],
    }),
    components: {
        PickDate
    } ,
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        add() {
            this.adding = true;
            // add_gig(this.newGig).then(response => {
            //     const gigs = response.data;
            //     this.items.push(gigs);
            //     this.newGig = "";
            //     this.adding = false;
            // })
            AppApi.post("/gigs", {
                artist: this.artist,
                imgUrl: this.imgUrl,
                date: this.date,
            })
            .then(response => {

            })
        }
    }
  }
</script>