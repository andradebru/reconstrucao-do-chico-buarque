<template>
  <v-container>
    <v-card max-width="300px">
      <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
      <table>
          <t-body>
            <tr v-for="(verso, index) in versos" :key="verso.verso">
              <td>{{verso.verso}} </td>
              <td>{{randomData[index].palavra}} </td>
            </tr>
          </t-body>
      </table >
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
        randomData: [],
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