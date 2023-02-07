<template>
    <v-container yellow  class="d-flex flex-row mb-6 pa-3">
        home page
        <!-- <v-col cols="9"> -->
            <GridOfGigs/>
         <!-- </v-col> -->
        <!-- <v-col cols="3"> -->
        <PickDate/>
         <!-- </v-col> -->

    </v-container>
</template>

<script>

import GridOfGigs from '~/components/GridOfGigs.vue'
import PickDate from '~/components/PickDate.vue'


export default ({
    components: {
        GridOfGigs,
        PickDate
    },
    data () {
        return {}
    }
})
</script>
