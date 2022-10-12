<template>
    <!-- <div class="container"> -->
        <navigationBar/>
        <teamNameBar/>
        <statsBar/>
        <newsBar/>
        <socialMediaBar/>
        <!-- <div style="height: 1600px"></div> -->
        <footerBar/>
    <!-- </div> -->
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

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        socialMediaBar,
        newsBar,
        statsBar,
        teamNameBar,
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