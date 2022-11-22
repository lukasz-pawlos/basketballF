<template>
    <div class="statsBlock bigStats">
        <h3>Points</h3>
        <div class="flex column">
          <router-link :to="`player?playerId=${player1.id}`">
            <playerStat
                :value="stats1.points"
                :name="`${player1.name} ${player1.secondName}`"/>
          </router-link>
          <router-link :to="`player?playerId=${player2.id}`">
          <playerStat
              :value="stats2.points"
              :name="`${player2.name} ${player2.secondName}`"/>
          </router-link>
          <router-link :to="`player?playerId=${player3.id}`">
          <playerStat
              :value="stats3.points"
              :name="`${player3.name} ${player3.secondName}`"/>
          </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import playerStat from './playerStat.vue';
import {Prop} from "vue-property-decorator";
import {StatAvgClass} from "@/models/response/StatAvgClass";
import {StatsService} from "@/services/StatsService";
import {PlayerClass} from "@/models/response/PlayerClass";
import { PlayerService } from '@/services/PlayerService';

@Options({
    components: {
        playerStat,
    }
})
export default class statsBlock extends Vue{

  @Prop()
  playersID: []

  stats1: StatAvgClass | undefined = {
    playerId: 0,
    points: 0,
    assists: 0,
    rebounds: 0,
    blocks: 0,
    steals: 0
  }

  stats2: StatAvgClass | undefined = {
    playerId: 0,
    points: 0,
    assists: 0,
    rebounds: 0,
    blocks: 0,
    steals: 0
  }

  stats3: StatAvgClass | undefined = {
    playerId: 0,
    points: 0,
    assists: 0,
    rebounds: 0,
    blocks: 0,
    steals: 0
  }

  player1: PlayerClass | undefined = {
    id: 0,
    name: '',
    secondName: '',
    nationality: '',
    number: 0,
    age: 0,
  }
  player2: PlayerClass | undefined = {
    id: 0,
    name: '',
    secondName: '',
    nationality: '',
    number: 0,
    age: 0,
  }
  player3: PlayerClass | undefined = {
    id: 0,
    name: '',
    secondName: '',
    nationality: '',
    number: 0,
    age: 0,
  }


  created(){
    // @ts-ignore: Unreachable code error
    StatsService.getAvgStatsByPlayerId(this.playersID[0]).then(date => {
      this.stats1 = date;
      this.$forceUpdate();
    })
    // @ts-ignore: Unreachable code error
    StatsService.getAvgStatsByPlayerId(this.playersID[1]).then(date => {
      this.stats2 = date;
      this.$forceUpdate();
    })
    // @ts-ignore: Unreachable code error
    StatsService.getAvgStatsByPlayerId(this.playersID[2]).then(date => {
      this.stats3 = date;
      this.$forceUpdate();
    })
    // @ts-ignore: Unreachable code error
    PlayerService.getPlayerById(this.playersID[0]).then(date => {
      this.player1 = date
      this.$forceUpdate();
    })
    // @ts-ignore: Unreachable code error
    PlayerService.getPlayerById(this.playersID[1]).then(date => {
      this.player2 = date
      this.$forceUpdate();
    })
    // @ts-ignore: Unreachable code error
    PlayerService.getPlayerById(this.playersID[2]).then(date => {
      this.player3 = date
      this.$forceUpdate();
    })
  }
}
</script>
<style>
.bigStats {
    height: 100%;
}
</style>