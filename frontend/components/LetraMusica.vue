<template>
  <v-container>
      <p> <i>"as proparoxítonas no fim dos versos vão se revezando como o cubo mágico, que forma um desenho diferente a cada girada"</i></p> 
      <p>- Clara Jorgewich</p>
    <v-card max-width="350px">
      <table>
          <t-body>
            <tr v-for="(verso, index) in versos" :key="verso.verso">
              <td>{{verso.verso}}</td>
              <td>{{randomWordsList[index].palavra[index]}}</td>
            </tr>
          </t-body>
      </table >
      <v-btn @click="resetList">Mudar palavras</v-btn>
    </v-card>
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
        console.log(response.data.palavras)
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