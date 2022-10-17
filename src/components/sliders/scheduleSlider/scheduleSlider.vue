<template>
    <div class="scheduleSlider">
        <splide :options="{ rewind: true, focus:0, perPage:6, autoWidth:true, pagination:false, gap:10}">
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <splide-slide>
                <boxScore :gameData="exampleData"/>
            </splide-slide>
            <!-- <splide-slide>
                <img src="ball.png">
            </splide-slide> -->
        </splide>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css/skyblue';
import boxScore from './boxScore.vue';

@Options({
    components:{
        Splide, 
        SplideSlide,
        boxScore
    }
})

export default class scheduleSlider extends Vue {
    
    exampleData = {
        home: "Legia",
        guest: "guestsss",
        data: "wczoraj",
        city: "Your city",
        homeScore: 125,
        guestScore: 69
    }
}
</script>
<style>
.scheduleSlider .splide__track{
    margin: 0 50px;
}
</style>