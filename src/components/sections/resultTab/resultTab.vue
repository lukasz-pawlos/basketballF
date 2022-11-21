<template>
    <section class="sectionPaddingVertical sectionPaddingLevel resultTabSection">
        <div class="resultTab">
            <h2 class="text-center">Table</h2>
            <ul>
                <li class="flex resultTab__li text-center"
                v-for="(teamStanding, index) in teamsStandings" :key="teamStanding">
                    <div style="width: 20%">{{ index + 1 }}</div>
                    <div style="height: 100%;">
                        <img class="imgH" :src="`logo${teamStanding.team.id}.png`" alt="">
                    </div>
                      <div style="width: 40%">
                        <router-link :to="`/team?teamId=${teamStanding.team.id}`">
                        {{ teamStanding.team.name }} {{ teamStanding.team.city }}
                        </router-link>
                      </div>
                    <div style="width: 20%">
                      {{ teamStanding.win }} - {{ teamStanding.lose }}
                    </div>
                    <div style="width: 20%"> {{ teamStanding.points }} </div>

                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import {StandingService} from "@/services/StandingService";
import {StandingClass} from "@/models/response/StandingClass";

export default class resultTab extends Vue {

  teamsStandings: StandingClass[] | undefined

  created(){
    StandingService.getStandings().then( data => {
      this.teamsStandings = data;
      this.$forceUpdate();
    })
  }


}
</script>
<style>
.resultTabSection {
}

.resultTab__li {
    border-radius: 16px;
    background: var(--sectionGradient);
    height: 60px;
    align-items: center;
    padding: 5px;
    border: 2px solid var(--black);
    font-size: 32px;
    margin-bottom: 12px;
}
</style>