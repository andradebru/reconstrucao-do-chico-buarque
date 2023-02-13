<template>
  <v-container>
    <v-div class="d-flex flex-column align-center justify-center">
    <v-card max-width="450px" class="pa-4">
      <p v-for="(verso, index) in versos" :key="versos[index]">
        {{verso}} <b>{{randomWordsList[index]}}</b>
      </p>
      <v-btn outline color=terciary class="ml-0 mt-4 d-flex align-center" @click="resetList">Mudar palavras</v-btn>
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
p {
  line-height: 1.5rem;
  font-size: 1.3rem;
}
</style>