<template>
    <v-layout>
        <About/>
    </v-layout>
</template>

<script>
import About from '~/components/About.vue'

export default {
  layout: 'complex',
  components: {
    About
  },
  data () {
    return {}
  }
}
</script>

