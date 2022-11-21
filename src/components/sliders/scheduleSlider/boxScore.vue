<template>
    <div class="boxScore">
        <div class="teamsLogos flex">
            <img class="teamsLogos__img" :src="`logo${gameData.homeTeam.id}.png`" alt="">
            <span>VS</span>
            <img class="teamsLogos__img" :src="`logo${gameData.guestTeam.id}.png`" alt="">
        </div>
        <hr class="hrStyle">
        <div class="teamScore flex">
            <span class="teamName">{{ gameData.homeTeam.name }}</span>
            <span v-if="gameData.homeScore" class="score">{{ gameData.homeScore }}</span>
            <span v-else>---</span>
        </div>
        <div class="teamScore flex">
          <span class="teamName">{{ gameData.guestTeam.name }}</span>
          <span class="score">{{ gameData.guestScore }}</span>
          <span v-if="gameData.guestScore" class="score">{{ gameData.guestScore }}</span>
          <span v-else>---</span>
        </div>
        <hr class="hrStyle">
        <div class="gameData flex">
            <span class="gameIcon">
                <font-awesome-icon v-if=" gameData.homeTeam.name === 'My Team'"  :icon="{ prefix: 'fa', iconName: 'home' }" />
                <font-awesome-icon v-else :icon="{ prefix: 'fa', iconName: 'at' }" /> 
            </span>
            <span class="gameInfo">{{ gameData.homeTeam.city }}</span>
        </div>
        <div class="gameData flex">
            <span class="gameIcon">
                <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'calendar-day' }" />
            </span>
            <span class="gameInfo">{{ convertTime(gameData.date) }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from 'vue-property-decorator'
import {MatchClass} from "@/models/response/MatchClass";
import {timeConverter} from "@/converters/timeConverter";


export default class boxScore extends Vue {


  @Prop()
  gameData: MatchClass

  convertTime(date: string) {
    return timeConverter.longTime(date).slice(0, -3);
  }

  created(){
    console.log(this.gameData)
  }

}
</script>

<style>
.boxScore {
    padding: 16px;
    width: 200px;
    background-color: var(--orange-08);
    border-radius: 20px;
}

.teamsLogos {
    padding-bottom: 16px;
    align-items: center;
    justify-content: space-between;
}

.teamsLogos__img {
    height: 60px;
}

.teamScore {
    align-items: center;
    justify-content: space-between;
}

.gameIcon {
    width: 40px;
}

.gameData {
    align-items: center;
}
</style>