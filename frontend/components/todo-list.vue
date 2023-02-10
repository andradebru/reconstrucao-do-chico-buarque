<template>
  <v-container>
    <v-card>
      <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
      <v-card v-for="verso in versos" :key="verso.verso">
            <p>{{verso.verso}} </p>
        <!-- <v-simple-table dense>
           <template 
            v-for="item in randomData"
            v-slot: [`item.${item.palavra}`]
            >
             <span :key="item.palavra">
            <tbody> -->
            
          <!-- </tbody>
           </template> -->
        </v-card>
        palavras randomizadas
          <v-card v-for="item in randomData" :key="item.palavra">
            <p>{{item.palavra}} </p>
          </v-card>
    </v-card>
  </v-container>
</template>

<script>
import AppApi from '~apijs'
export default {
  data () {
    return {
      items: [],
      versos: [],
      randomData: []
    }
  },
  mounted () {
    AppApi.palavras_aleatoriaveis().then(response => {
      this.items = response.data.palavras
      this.versos = response.data.versos
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