<template>
    <!-- <div class="container"> -->
        <navigationBar/>
        <socialMediaBar/>
        <div style="height: 1600px"></div>
        <footerBar/>
    <!-- </div> -->
</template>
<script lang="ts">
import socialMediaBar from '@/components/team/socialMediaBar.vue';
import { Options, Vue } from 'vue-class-component';
import footerBar from '../components/pages/footerBar.vue';
import navigationBar from '../components/pages/navigationBar.vue';
import pageLoader from './pageLoader.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        socialMediaBar,
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