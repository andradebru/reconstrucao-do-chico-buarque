<template>
  <v-card>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
        <v-card v-for="item in randomData" :key="item.palavra">
          <p>{{item.palavra}} </p>
        </v-card>
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
      for (let i = 0; i < 18; i++)
      this.randomData.push(this.randomItem(this.items))
      // this.randomData = this.randomItem(this.items)
    })
  },


  methods: {
    randomItem (items) {
         return items[Math.floor(Math.random() * items.length)];
     }
  }
}
</script>