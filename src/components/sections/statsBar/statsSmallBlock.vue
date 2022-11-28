<template>
    <div class="statsBlock smallStats">
      <h3>{{ TEXT }}</h3>
      <div class="flex plyerColumn" v-if="TEXT === `Rebounds`">
        <router-link :to="`player?playerId=${player1.id}`">
            <playerStat
                :isColumn="true"
                :name="`${player1.name} ${player1.secondName}`"
                :value="stats1.rebounds"/>
        </router-link>
        <router-link :to="`player?playerId=${player2.id}`">
            <playerStat
                :isColumn="true"
                :name="`${player2.name} ${player2.secondName}`"
                :value="stats2.rebounds"/>
        </router-link>
        <router-link :to="`player?playerId=${player3.id}`">
            <playerStat
                :isColumn="true"
                :name="`${player3.name} ${player3.secondName}`"
                :value="stats3.rebounds"/>
        </router-link>
      </div>
      <div class="flex plyerColumn" v-else>
        <router-link :to="`player?playerId=${player1.id}`">
          <playerStat
              :isColumn="true"
              :name="`${player1.name} ${player1.secondName}`"
              :value="stats1.assists"/>
        </router-link>
        <router-link :to="`player?playerId=${player2.id}`">
          <playerStat
              :isColumn="true"
              :name="`${player2.name} ${player2.secondName}`"
              :value="stats1.assists"/>
        </router-link>
        <router-link :to="`player?playerId=${player3.id}`">
          <playerStat
              :isColumn="true"
              :name="`${player3.name} ${player3.secondName}`"
              :value="stats1.assists"/>
        </router-link>
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import playerStat from './playerStat.vue';
import {Prop} from "vue-property-decorator";
import {StatAvgClass} from "@/models/response/StatAvgClass";
import {PlayerClass} from "@/models/response/PlayerClass";
import {StatsService} from "@/services/StatsService";
import {PlayerService} from "@/services/PlayerService";

  @Options({
        components: {
            playerStat,
        }
    })
    export default class statsSmallBlock extends Vue{

    @Prop()
    playersID: []

    @Prop()
    name: String

    TEXT: String

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
      this.TEXT = this.name
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

.plyerColumn {
    justify-content: space-evenly;
}

.smallStats {
    height: 50%;
}
</style>