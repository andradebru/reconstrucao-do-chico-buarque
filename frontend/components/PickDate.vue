<template>
    <v-container red>
    <v-row justify="center">
        <v-date-picker v-model="picker"></v-date-picker>
    </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      date: '2018-03-02',
    }),

    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    },
  }
</script>