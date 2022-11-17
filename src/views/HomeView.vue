<template>
    <div>
        <navigationBar/>
        <scheduleSlider/>
        <teamNameBar/>
<!--        <photoSlider/>-->
        <resultTab/>
        <statsBar/>
        <newsBar/>
        <socialMediaBar/>
        <footerBar/>
    </div>
</template>

<script lang="ts">
import newsBar from '@/components/sections/newsBar/newsBar.vue';
import socialMediaBar from '@/components/sections/socialMediaBar.vue';
import { Options, Vue } from 'vue-class-component';
import footerBar from '../components/sections/footerBar.vue';
import navigationBar from '../components/sections/navigationBar.vue';
import pageLoader from './pageLoader.vue';
import statsBar from '@/components/sections/statsBar/statsBar.vue';
import teamNameBar from '@/components/sections/teamNameBar.vue';
import photoSlider from '@/components/sliders/photoSlider.vue';
import scheduleSlider from '@/components/sliders/scheduleSlider/scheduleSlider.vue';
import resultTab from '@/components/sections/resultTab/resultTab.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        socialMediaBar,
        newsBar,
        statsBar,
        teamNameBar,
        photoSlider,
        scheduleSlider,
        resultTab

    }
})

export default class HomeView extends Vue{
    
}
</script>
<style>
.container {
    background-image: url('~/public/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>