<template>
        <navigationBar/>
        <scheduleSlider/>
        <playersList/>
        <coachesList :coaches="coaches"/>
        <socialMediaBar/>
        <footerBar/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import playersList from '../components/team/plyersList.vue';
import footerBar from '../components/sections/footerBar.vue';
import navigationBar from '../components/sections/navigationBar.vue';
import pageLoader from './pageLoader.vue';
import coachesList from '../components/team/coachesList.vue';
import scheduleSlider from '@/components/sliders/scheduleSlider/scheduleSlider.vue';
import teamNameBar from '@/components/sections/teamNameBar.vue';
import socialMediaBar from '@/components/sections/socialMediaBar.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        playersList,
        coachesList,
        scheduleSlider,
        teamNameBar,
        socialMediaBar,
    }
})

export default class TeamView extends Vue{


}
</script>
<style>

</style>