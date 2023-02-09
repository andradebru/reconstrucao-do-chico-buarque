<template>
  <v-card>
    <!-- <v-toolbar color="cyan" dark> -->
      <!-- <v-text-field class="ma-4" v-model="newtask" @keyup.enter="add()" label="Add todo and hit enter" :loading="adding"/> -->
      <v-text-field class="ma-4" :loading="adding"/>
    <!-- </v-toolbar> -->
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <!-- <v-list two-line> -->
      <!-- <template v-for="palavra in palavras"> -->
      <!-- <template v-for="item in items"> -->
        <!-- <v-list-tile :key="palavra.palavra"> -->
        <!-- <v-list-tile :key="item.title"> -->
        <!-- <v-card v-for="item in items" :key="item.title"> -->
        <v-card v-for="item in items" :key="item.palavra">
          <!-- <v-list-tile-content> -->
            <!-- <v-list-tile-title > -->
            <!-- <v-list-tile-title :class="{done: item.done}" > -->
              <p>{{item.palavra}} </p>
              <!-- {{item.description}} -->
            <!-- </v-list-tile-title> -->
          <!-- </v-list-tile-content> -->
          <!-- <v-list-tile-action> -->
            <!-- <v-switch v-model="item.done"/> -->
          <!-- </v-list-tile-action> -->
        </v-card>
      <!-- </template> -->
    <!-- </v-list> -->
  </v-card>
</template>

<script>
import AppApi from '~apijs'
export default {
  data () {
    return {
      // newtask: '',
      // adding: false,
      loading: false,
      items: []
    }
  },
  mounted () {
    this.loading = true
    AppApi.palavras_aleatoriaveis().then(response => {
    // AppApi.list_todos().then(response => {
      const palavras = response.data.palavras
      // const todos = response.data.todos
      this.items = palavras
      // this.items = todos
      this.loading = false
    })
  },
  // methods: {
  //   add () {
  //     this.adding = true
  //     AppApi.add_todo(this.newtask).then(response => {
  //       const todo = response.data
  //       this.items.push(todo)
  //       this.newtask = ''
  //       this.adding = false
  //     })
  //   }
  // }
}

// <style scoped>
//   .done {
//     text-decoration: line-through;
//   }
// </style>
</script>