<template>
    <div>
        <navigationBar/>
        <scheduleSlider/>
        <playersList/>
        <coachesList :coaches="coaches"/>
        <socialMediaBar/>
        <footerBar/>
    </div>
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

    get coaches() {
        return [
            {name: 'Stefan', forname: 'Kot', funcion: 'main coach', age: 67, nationality: "Poland", id: 1},
            {name: 'Adam', forname: 'Dog', funcion: 'assistent', age: 44, nationality: "Poland", id: 2},
            {name: 'Stive', forname: 'Cat', funcion: 'XD', age: 21, nationality: "Poland", id: 3},
        ];
    }

}
</script>
<style>

</style>