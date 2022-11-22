<template>
      <navigationBar/>
      <scheduleSlider/>
      <teamNameBar/>
      <player-card></player-card>
      <socialMediaBar/>
      <footerBar/>
</template>

<script lang="ts">
import footerBar from "@/components/sections/footerBar.vue";
import navigationBar from "@/components/sections/navigationBar.vue";
import socialMediaBar from "@/components/sections/socialMediaBar.vue";
import teamNameBar from "@/components/sections/teamNameBar.vue";
import scheduleSlider from "@/components/sliders/scheduleSlider/scheduleSlider.vue";
import { Options, Vue } from "vue-class-component";
import playerCard from "@/components/sections/player/playerCard.vue";

@Options({
    components:{
        navigationBar,
        scheduleSlider,
        teamNameBar,
        socialMediaBar,
        footerBar,
        playerCard
    }
})

export default class PlayerView extends Vue {
    
}
</script>
<style>
    
</style>