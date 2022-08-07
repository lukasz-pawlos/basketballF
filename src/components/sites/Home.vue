<template>
    <div class="container">
        <navigationBar/>

        <footerBar/>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import footerBar from './comp/footerBar.vue';
import navigationBar from './comp/navigationBar.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
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