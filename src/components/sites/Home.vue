<template>
    <div class="container">
        <navigationBar/>

        <h1>Your team</h1>
        <h2>Your team</h2>
        <h3>Your team</h3>
        <h4>Your team</h4>
        <h5>Your team</h5>
        <h6>Your team</h6>
        <div style="height: 1600px"></div>
        <footerBar/>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import footerBar from './comp/footerBar.vue';
import navigationBar from './comp/navigationBar.vue';
import pageLoader from './comp/pageLoader.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
    }
})

export default class Home extends Vue{
    
}
</script>
<style>
.container {
    background-image: url('~/public/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>