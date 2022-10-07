<template>
    <!-- <div class="container"> -->
        <navigationBar/>
        <newsBar/>
        <socialMediaBar/>
        <div style="height: 1600px"></div>
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

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        socialMediaBar,
        newsBar,
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