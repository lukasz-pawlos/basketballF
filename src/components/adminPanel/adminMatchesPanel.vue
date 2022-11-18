<template>
  <div id="adminPanelOptions">
    <div class="text-center">
      <h1>Coaches</h1>
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
            <div class="flex" style="width: 15%">
              <!--            <button class="functionBtn" @click="deletePlayer(coach.id)">-->
              <!--              <font-awesome-icon icon="trash" />-->
              <!--            </button>-->
            </div>
          </admin-li-elem>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <button class="lngBtn"  @click="changeStatus(popupStatus)"> Add coach </button>
    </div>
  </div>
  <popup :open="popupStatus" @close="()=> changeStatus(popupStatus)" :text="`Add new coach`">
    <add-coach-form/>
  </popup>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import AdminLiElem from "@/components/adminPanel/elem/adminLiElem.vue";
import longButton from "@/components/buttons/longButton.vue";
import popup from "@/components/popups/popup.vue";
import addCoachForm from "@/components/forms/addCoachForm.vue";
import {MatchClass} from "@/models/response/MatchClass";
import {MatchService} from "@/services/MatchService";
import {timeConverter} from "@/converters/timeConverter";

@Options({
  components:{
    AdminLiElem,
    longButton,
    popup,
    addCoachForm,
  }
})

export default class AdminMatchesPanel extends Vue{

  matches: MatchClass[] | undefined
  popupStatus: Boolean = false

  created() {
    MatchService.getMatches().then(
        data => {
          this.matches = data
          this.matches?.forEach(match =>{
            const kok = new Date(match.date)
            console.log(kok.toLocaleString())
          })
          this.$forceUpdate()
        })
  }


  changeStatus(status: boolean) {
    this.popupStatus = !status
  }

  convertTime(date: string) {
    return timeConverter.longTime(date);
  }

}
</script>

<style scoped>

</style>