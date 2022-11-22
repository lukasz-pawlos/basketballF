<template>
    <div class="scheduleTab">
        <table class="scheduleTab__table">
            <tbody class="scheduleTab__tbody" id="sT">
              <template v-for="match in matches" :key="match">
                <tr class="scheduleTab__tr">
                    <td class="scheduleTab__td teamTab">
                      <b>{{match.homeTeam.name}} {{match.homeTeam.city}}</b>
                    </td>
                    <td class="scheduleTab__td">
                      <router-link :to="`match?matchId=${match.id}`">
                        <span>
                            <span>{{ match.homeScore }}</span>
                            <span>:</span>
                            <span>{{ match.guestScore }}</span>
                        </span>
                      </router-link>
                    </td>
                    <td class="scheduleTab__td teamTab">
                      <b>{{match.guestTeam.name}} {{match.guestTeam.city}}</b>
                    </td>
                </tr>
                <tr class="scheduleTab__tr">
                    <td colspan="3" class="scheduleTab__td">
                      {{ convertTime(match.date) }}, {{ match.homeTeam.city }}
                    </td>
                </tr>
              </template>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import {MatchClass} from "@/models/response/MatchClass";
import {MatchService} from "@/services/MatchService";
import {timeConverter} from "@/converters/timeConverter";

export default class scheduleTab extends Vue{

  matches: MatchClass[] | undefined


  created(){
    MatchService.getMatches().then(data => {
      this.matches = data;
      this.$forceUpdate();
    })
  }

  convertTime(date: string) {
    return timeConverter.longTime(date).slice(0, -3);
  }
}
</script>
<style>
.scheduleTab__table {
    width: 100%;
    font-size: 32px;
}

#sT{

}

#sT .scheduleTab__tr:nth-child(4n+1), #sT .scheduleTab__tr:nth-child(4n+2){
    background: var(--sectionGradient);
}

#sT .scheduleTab__tr:nth-child(4n-1), #sT .scheduleTab__tr:nth-child(4n){
    background-color: var(--orange-04);

}

.scheduleTab__td {
    padding: 10px 0;
}
.teamTab{
    width: 45%;
}
</style>