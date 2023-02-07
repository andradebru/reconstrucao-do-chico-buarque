<template>
  <!-- <v-layout justify-center align-center>
    <v-btn color="success" :to="{name: 'todos'}">What TODO next?</v-btn>
  </v-layout> -->
  <HomePage/>
</template>

<script>
import HomePage from '~/components/HomePage.vue'

export default {
  components: {
    HomePage
  },
  data () {
      return {}
    }
}
</script>

<style>
</style>
