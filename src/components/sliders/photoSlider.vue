<template>
    <div class="my-slider">
        <splide :options="{ rewind: true, focus:0, perPage:3,}">
            <splide-slide>
                <img src="ball.png">
            </splide-slide>
            <splide-slide>
                <img src="ball.png">
            </splide-slide>
            <splide-slide>
                <img src="ball.png">
            </splide-slide>
            <splide-slide>
                <img src="ball.png">
            </splide-slide>
        </splide>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css/core';

@Options({
    components:{
        Splide, 
        SplideSlide,
    }
})

export default class photoSlider extends Vue {
    
}
</script>
<style>
    
</style>