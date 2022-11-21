<template>
  <div class="scheduleTab">
    <table class="scheduleTab__table">
      <tbody class="scheduleTab__tbody">
      <template v-for="stat in stats" :key="stat">
        <tr class="scheduleTab__tr">
          <td colspan="2" class="scheduleTab__td teamTab">
            <b>{{stat.match.homeTeam.name}} {{stat.match.homeTeam.city}}</b>
          </td>
          <td class="scheduleTab__td">
            <router-link to="/team">
                        <span>
                            <span>{{ stat.match.homeScore }}</span>
                            <span>:</span>
                            <span>{{ stat.match.guestScore }}</span>
                        </span>
            </router-link>
          </td>
          <td colspan="3" class="scheduleTab__td teamTab">
            <b>{{stat.match.guestTeam.name}} {{stat.match.guestTeam.city}}</b>
          </td>
        </tr>
        <tr class="scheduleTab__tr">
          <td class="scheduleTab__td" style="width: 20%">
            Points
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            rebounds
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            assists
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            blocks
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            steals
          </td>
        </tr>
        <tr class="scheduleTab__tr">
          <td class="scheduleTab__td" style="width: 20%">
            {{ stat.points }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stat.rebounds }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stat.assists }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stat.blocks }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stat.steals }}
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import {StatsService} from "@/services/StatsService";
import {StatClass} from "@/models/response/StatClass";


export default class statTab extends Vue{

  stats: StatClass[] | undefined


  created(){
    // @ts-ignore: Unreachable code error
    const playerId = this.$route.query.playerId
    // @ts-ignore: Unreachable code error
    StatsService.getStatsByPlayerId(playerId).then(date => {
      this.stats = date;
      this.$forceUpdate();
    })
  }


}
</script>
<style>
.scheduleTab__table {
  width: 100%;
  font-size: 32px;
}

.scheduleTab__tr:nth-child(6n+1),
.scheduleTab__tr:nth-child(6n+2),
.scheduleTab__tr:nth-child(6n+3){
  background-color: var(--orange);
}

.scheduleTab__tr:nth-child(6n),
.scheduleTab__tr:nth-child(6n-1),
.scheduleTab__tr:nth-child(6n-2){
  background-color: var(--orange-04);

}

.scheduleTab__td {
  padding: 10px 0;
}
.teamTab{
  width: 45%;
}
</style>