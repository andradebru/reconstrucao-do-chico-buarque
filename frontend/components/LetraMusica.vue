<template>
  <v-container>
    <v-div class="d-flex flex-column align-center justify-center">
    <v-card max-width="24vw" class="pa-4">
      <table>
          <t-body>
            <tr v-for="(verso, index) in versos" :key="versos[index]">
              <td>{{verso}}</td>
              <v-spacer></v-spacer>
              <td>{{randomWordsList[index]}}</td>
            </tr>
          </t-body>
      </table >
    <v-btn outline color=terciary class="mt-4 d-flex align-center" @click="resetList">Mudar palavras</v-btn>
    </v-card>
    </v-div>
  </v-container>
</template>

<script>
  import AppApi from '~apijs'

  export default {
    data () {
      return {
        palavras: [],
        versos: [],
        randomWordsList: [],
      }
    },
    mounted () {
      AppApi.versos_e_palavras().then(response => {
        this.palavras = response.data.palavras
        this.versos = response.data.versos
        for (let i = 0; i < 18; i++)
          this.randomWordsList.push(this.randomWord(this.palavras))
      })
    },
    methods: {
      randomWord (palavras) {
          return palavras[Math.floor(Math.random() * palavras.length)];
      },
      resetList () {
        this.randomWordsList = []
        for (let i = 0; i < 18; i++) {
            this.randomWordsList.push(this.randomWord(this.palavras))
        }
      }
    }
  }
</script>

<style scoped>
table {
  font-size: 1.3rem;
}
</style>