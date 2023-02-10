<template>
  <v-card>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
        <v-card v-for="item in items" :key="item.palavra">
          <p>{{item.palavra}} </p>
        </v-card>
          palavra randomizada: <b>{{randomData.palavra}}</b>
  </v-card>
</template>

<script>
import AppApi from '~apijs'
export default {
  data () {
    return {
      items: [],
      randomData: []
    }
  },
  mounted () {
    AppApi.palavras_aleatoriaveis().then(response => {
      this.items = response.data.palavras
      this.randomData = this.randomItem(this.items)
    })
  },


  methods: {
    randomItem (items) {
         return items[Math.floor(Math.random() * items.length)];
     }
  }
}
</script>