<template>
        <navigationBar/>
        <scheduleSlider/>
        <teamNameBar/>
      <contact></contact>
        <socialMediaBar/>
        <footerBar/>
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
import contact from "@/components/sections/contact.vue";

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
    contact,

}
})

export default class ContactView extends Vue{

}
</script>
<style>

</style>