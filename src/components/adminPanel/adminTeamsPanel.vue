<template>
  <div id="adminPanelOptions">
    <div class="text-center">
      <h1>Teams</h1>
    </div>
    <hr class="hrStyle">
    <ul>
      <li class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">ID</admin-li-elem>
          <admin-li-elem :width="30">name</admin-li-elem>
          <admin-li-elem :width="30">city</admin-li-elem>
          <admin-li-elem :width="5">win</admin-li-elem>
          <admin-li-elem :width="5">lose</admin-li-elem>
          <admin-li-elem :width="10">points</admin-li-elem>
          <admin-li-elem :width="15">function</admin-li-elem>

        </div>
      </li>
      <li v-for="standing in standings" :key="standing" class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">{{ standing.team.id }}</admin-li-elem>
          <admin-li-elem :width="30">{{ standing.team.name }}</admin-li-elem>
          <admin-li-elem :width="30">{{ standing.team.city }}</admin-li-elem>
          <admin-li-elem :width="5">{{ standing.win }}</admin-li-elem>
          <admin-li-elem :width="5">{{ standing.lose }}</admin-li-elem>
          <admin-li-elem :width="10">{{ standing.points }}</admin-li-elem>

          <div class="flex flex-center" style="width: 15%">
            <button class="functionBtn" @click="addWin(standing.team.id)">
              <font-awesome-icon icon="w" />
            </button>
            <button class="functionBtn" @click="addLose(standing.team.id)">
              <font-awesome-icon icon="l" />
            </button>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <button class="lngBtn"  @click="changeStatus(popupStatus)"> Add team </button>
    </div>
  </div>
  <popup :open="popupStatus" @close="()=> changeStatus(popupStatus)" :text="`Add new team`">
    <add-team-form/>
  </popup>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import longButton from "@/components/buttons/longButton.vue";
import popup from "@/components/popups/popup.vue";
import addTeamForm from "@/components/forms/addTeamForm.vue";
import {StandingClass} from "@/models/response/StandingClass";
import { StandingService } from "@/services/StandingService";
import adminLiElem from "@/components/adminPanel/elem/adminLiElem.vue";

@Options({
  components:{
    longButton,
    popup,
    addTeamForm,
    adminLiElem
  }
})

export default class AdminTeamsPanel extends Vue{

  standings: StandingClass[] | undefined
  popupStatus: Boolean = false

  created() {
    StandingService.getStandings().then(
        data => {
          this.standings = data
          this.$forceUpdate()
        })
  }

  changeStatus(status: boolean) {
    this.popupStatus = !status
  }

  addWin(teamId: Number | String) {
    StandingService.updateWin(teamId);
  }

  addLose(teamId: Number | String) {
    StandingService.updatelose(teamId);
  }

}
</script>

<style >

</style>