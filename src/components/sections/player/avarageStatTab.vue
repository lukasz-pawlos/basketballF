<template>
  <div class="scheduleTab">
    <table class="scheduleTab__table">
      <tbody class="scheduleTab__tbody">
        <tr class="scheduleTab__tr">
          <td class="scheduleTab__td" style="width: 20%">
            Points
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            Rebounds
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            Assists
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            Blocks
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            Steals
          </td>
        </tr>
        <tr class="scheduleTab__tr">
          <td class="scheduleTab__td" style="width: 20%">
            {{ stats.points }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stats.rebounds }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stats.assists }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stats.blocks }}
          </td>
          <td class="scheduleTab__td" style="width: 20%">
            {{ stats.steals }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import {StatsService} from "@/services/StatsService";
import {StatAvgClass} from "@/models/response/StatAvgClass";


export default class avarageStatTab extends Vue{

  stats: StatAvgClass | undefined = {
    playerId: 0,
    points: 0,
    assists: 0,
    rebounds: 0,
    blocks: 0,
    steals: 0
  }


  created(){
    // @ts-ignore: Unreachable code error
    const playerId = this.$route.query.playerId
    // @ts-ignore: Unreachable code error
    StatsService.getAvgStatsByPlayerId(playerId).then(date => {
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

.scheduleTab__tr:nth-child(4n+1),
.scheduleTab__tr:nth-child(4n+2) {
  background-color: var(--orange);
}

.scheduleTab__tr:nth-child(4n),
.scheduleTab__tr:nth-child(4n-1) {
  background-color: var(--orange-04);

}

.scheduleTab__td {
  padding: 10px 0;
}
.teamTab{
  width: 45%;
}
</style>