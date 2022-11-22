<template>
  <section v-if="player" class="sectionPaddingVertical sectionPaddingLevel playerSection text-center">
    <div class="flex flex-sb" style="align-items: center">
      <span class="playerName__span">
        <img class="playerName__img" src="../../../../public/player.webp" alt="">
      </span>
      <h1> {{ player.name }} {{ player.secondName }}</h1>
      <h2>
        {{ player.number }}
      </h2>
    </div>
    <h5>Avarage stats</h5>
    <avarage-stat-tab></avarage-stat-tab>
    <h5>Games stats</h5>
    <stat-tab></stat-tab>
  </section>
  <h1 v-else class="text-center">PLAYER NOT FOUND</h1>
</template>
<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import avarageStatTab from "@/components/sections/player/avarageStatTab.vue";
import statTab from "@/components/sections/player/statTab.vue";
import {PlayerClass} from "@/models/response/PlayerClass";
import {PlayerService} from "@/services/PlayerService";

@Options({
  components:{
    statTab,
    avarageStatTab,
  }
})

export default class playerCard extends Vue{

  player: PlayerClass | undefined = {
    id: 0,
    name: '',
    secondName: '',
    nationality: '',
    age: 0,
    number: 0,
  }


  beforeCreate(){
    // @ts-ignore: Unreachable code error
    const playerId = this.$route.query.playerId
    // @ts-ignore: Unreachable code error
    PlayerService.getPlayerById(playerId).then(date => {
      this.player = date;
      this.$forceUpdate();
    })
  }


}
</script>

<style>
.playerSection .playerName__span {
  height: 300px;
  width: 300px;
}
</style>