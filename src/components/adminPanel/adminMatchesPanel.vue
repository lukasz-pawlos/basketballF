<template>
  <div id="adminPanelOptions">
    <div class="text-center">
      <h1>Matches</h1>
    </div>
    <hr class="hrStyle">
    <ul>
      <li class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">ID</admin-li-elem>
          <admin-li-elem :width="5">H-ID</admin-li-elem>
          <admin-li-elem :width="25">home team</admin-li-elem>
          <admin-li-elem :width="5">G-ID</admin-li-elem>
          <admin-li-elem :width="25">Guest team</admin-li-elem>
          <admin-li-elem :width="10">Score</admin-li-elem>
          <admin-li-elem :width="10">date</admin-li-elem>
          <admin-li-elem :width="15">function</admin-li-elem>
        </div>
      </li>
      <li v-for="match in matches" :key="match" class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">{{ match.id }}</admin-li-elem>
          <admin-li-elem :width="5">{{ match.homeTeam.id }}</admin-li-elem>
          <admin-li-elem :width="25">{{ match.homeTeam.name }} {{ match.homeTeam.city }}</admin-li-elem>
          <admin-li-elem :width="5">{{ match.guestTeam.id }}</admin-li-elem>
          <admin-li-elem :width="25">{{ match.guestTeam.name }} {{ match.guestTeam.city }}</admin-li-elem>
          <admin-li-elem :width="10">{{ match.homeScore }} - {{ match.guestScore }}</admin-li-elem>
          <admin-li-elem :width="10">{{ convertTime(match.date) }}</admin-li-elem>

          <admin-li-elem :width="15">
            <button class="functionBtn"
                      v-if="!match.homeScore && !match.guestScore"
                      @click="changeScoreStatus(popupScoreStatus, match.id)">
              <font-awesome-icon icon="basketball" />
            </button>
            <button class="functionBtn"
                      @click="changeStatsStatus(popupStatsStatus, match.id)">
              <font-awesome-icon icon="s" />
            </button>
            <button class="functionBtn"
                    @click="changeNewsStatus(popupNewsStatus, match.id)">
              <font-awesome-icon icon="n" />
            </button>
          </admin-li-elem>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <button class="lngBtn"  @click="changeStatus(popupStatus)"> Add match </button>
    </div>
  </div>
  <popup :open="popupStatus" @close="()=> changeStatus(popupStatus)" :text="`Add new coach`">
    <add-match-form/>
  </popup>

  <popup :open="popupScoreStatus"  @close="()=> changeScoreStatus(popupScoreStatus, selectedMatch)" :text="`Add score`">
    <add-score-form :matchId="selectedMatch"/>
  </popup>

  <popup :open="popupStatsStatus" :flexStart="true" @close="()=> changeStatsStatus(popupStatsStatus, selectedMatch)" :text="`Add stats`">
    <stats-form-com :match-id="selectedMatch"></stats-form-com>
  </popup>

  <popup :open="popupNewsStatus" :flexStart="true" @close="()=> changeNewsStatus(popupNewsStatus, selectedMatch)" :text="`Add news`">
    <add-news-form :match-id="selectedMatch"></add-news-form>
  </popup>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import AdminLiElem from "@/components/adminPanel/elem/adminLiElem.vue";
import statsFormCom from "@/components/adminPanel/elem/statsFormCom.vue";
import longButton from "@/components/buttons/longButton.vue";
import popup from "@/components/popups/popup.vue";
import addScoreForm from "@/components/forms/addScoreForm.vue";
import addMatchForm from "@/components/forms/addMatchForm.vue";
import addNewsForm from "@/components/forms/addNewsForm.vue";
import addStatForm from "@/components/forms/addStatForm.vue";
import {MatchClass} from "@/models/response/MatchClass";
import {MatchService} from "@/services/MatchService";
import {timeConverter} from "@/converters/timeConverter";

@Options({
  components:{
    AdminLiElem,
    longButton,
    popup,
    addMatchForm,
    addScoreForm,
    addStatForm,
    statsFormCom,
    addNewsForm,
  }
})

export default class AdminMatchesPanel extends Vue{

  matches: MatchClass[] | undefined
  popupStatus: Boolean = false
  popupScoreStatus: Boolean = false
  popupStatsStatus: Boolean = false
  popupNewsStatus: Boolean = false
  selectedMatch: number

  created() {
    MatchService.getMatches().then(
        data => {
          this.matches = data
          this.$forceUpdate()
        })
  }

  selectMatch(matchId: number) {
    this.selectedMatch = matchId;
    this.$forceUpdate();
  }

  changeStatus(status: boolean) {
    this.popupStatus = !status;
  }

  changeScoreStatus(status: boolean, matchId: number) {
    this.selectMatch(matchId);
    this.popupScoreStatus = !status;
  }

  changeStatsStatus(status: boolean, matchId: number) {
    this.selectMatch(matchId);
    this.popupStatsStatus = !status;
  }

  changeNewsStatus(status: boolean, matchId: number) {
    this.selectMatch(matchId);
    this.popupNewsStatus = !status;
  }

  convertTime(date: string) {
    return timeConverter.longTime(date).slice(0, -3);
  }

}
</script>

<style scoped>

</style>