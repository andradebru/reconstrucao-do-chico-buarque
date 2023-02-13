<template>
  <v-layout justify-left>
    <LetraMusica/>
    
  </v-layout>
</template>

<script>
import LetraMusica from '~/components/LetraMusica.vue'
import Vuex from 'vuex'

export default {
  layout: 'complex',
  components: {
    LetraMusica
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
