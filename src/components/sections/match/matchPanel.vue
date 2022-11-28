<template>
  <section v-if="match" class="sectionPaddingVertical sectionPaddingLevel playerSection text-center">
    <div class="flex flex-sb" style="align-items: center">
      <div class="teamLogo">
        <img class="teamLogo__img" :src="`logo${match.homeTeam.id}.png`" alt="">
      </div>
      <h1>
        {{match.homeScore}} : {{match.guestScore}}
      </h1>
      <div class="teamLogo">
        <img class="teamLogo__img" :src="`logo${match.guestTeam.id}.png`" alt="">
      </div>
    </div>
    <h2>Stats</h2>
    <table class="gameStat">
      <tbody>
        <tr class="tabTR">
          <td class="tableName tabTD"></td>
          <td class="tableStat tabTD"><b>Points</b></td>
          <td class="tableStat tabTD"><b>Assists</b></td>
          <td class="tableStat tabTD"><b>Rebounds</b></td>
          <td class="tableStat tabTD"><b>Steals</b></td>
          <td class="tableStat tabTD"><b>Bloks</b></td>
        </tr>
        <tr class="tabTR" v-for="stat in stats" :key="stat">
          <td class="tableName tabTD">
            <router-link :to="`player?playerId=${stat.player.id}`">
            {{ stat.player.name }} {{ stat.player.secondName }}
            </router-link>
          </td>
          <td class="tableStat tabTD">{{ stat.points }}</td>
          <td class="tableStat tabTD">{{ stat.assists }}</td>
          <td class="tableStat tabTD">{{ stat.rebounds }}</td>
          <td class="tableStat tabTD">{{ stat.steals }}</td>
          <td class="tableStat tabTD">{{ stat.blocks }}</td>
        </tr>
      </tbody>
    </table>
  </section>
  <h1 v-else class="text-center">MATCH NOT FOUND</h1>
</template>
<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import avarageStatTab from "@/components/sections/player/avarageStatTab.vue";
import statTab from "@/components/sections/player/statTab.vue";
import {MatchClass} from "@/models/response/MatchClass";
import {MatchService} from "@/services/MatchService";
import {StatsService} from "@/services/StatsService";
import {StatClass} from "@/models/response/StatClass";

@Options({
  components:{
    statTab,
    avarageStatTab,
  }
})

export default class matchPanel extends Vue{

  match: MatchClass | undefined = {
    id: 0,
    homeTeam:{
      id:0,
      name:"",
      city:""
    },
    guestTeam:{
      id:0,
      name:"",
      city:""
    },
    homeScore:0,
    guestScore:0,
    date: new Date()}

  stats: StatClass[] | undefined


  beforeCreate(){
    // @ts-ignore: Unreachable code error
    const matchId = this.$route.query.matchId
    // @ts-ignore: Unreachable code error
    MatchService.getMatchById(matchId).then(date => {
      this.match = date;
      this.$forceUpdate();
    })
    // @ts-ignore: Unreachable code error
    StatsService.getStatsByMatchId(matchId).then(data => {
      this.stats = data;
      this.$forceUpdate();
    })
  }


}
</script>

<style>
.teamLogo {
  height: 300px;
}
.teamLogo__img {
  height: 100%;
  width: 100%;
}

.gameStat {
  width: 100%;
}
.tableName {
  width: 20%;
}
.tableStat {
  width: 16%;
}
.tabTR {
  font-size: 30px;
}
.tabTD {
  border-bottom: 2px dashed black;
  padding: 10px 0;
}
</style>