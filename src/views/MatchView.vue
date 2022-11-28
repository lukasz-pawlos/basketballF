<template>
  <navigationBar/>
  <scheduleSlider/>
  <teamNameBar/>
  <match-panel/>
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
import matchPanel from "@/components/sections/match/matchPanel.vue";

@Options({
  components:{
    navigationBar,
    scheduleSlider,
    teamNameBar,
    socialMediaBar,
    footerBar,
    matchPanel
  }
})

export default class MatchView extends Vue {

}
</script>
<style>

</style>