<template>
    <v-container blue>
        grid of gigs
        <GigCard/>
        <GigCard/>
        <GigCard/>
    </v-container>
</template>

<script>

import GridOfGigs from '~/components/GridOfGigs.vue'
import PickDate from '~/components/PickDate.vue'
import GigCard from '~/components/GigCard.vue'


export default ({
    components: {
    //     GridOfGigs,
    //     PickDate
    GigCard
    },
    data () {
        return {}
    }
})
</script>
