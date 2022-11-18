<template>
  <div id="adminPanelOptions">
    <div class="text-center">
      <h1>Teams</h1>
    </div>
    <hr class="hrStyle">
    <ul>
      <li class="admin__li">
        <div class="flex text-center">
          <div style="width: 5%">ID</div>
          <div style="width: 40%">name</div>
          <div style="width: 40%">city</div>
          <div style="width: 15%">function</div>
        </div>
      </li>
      <li v-for="team in teams" :key="team" class="admin__li">
        <div class="flex text-center">
          <div style="width: 5%">{{ team.id }}</div>
          <div style="width: 40%">{{ team.name }}</div>
          <div style="width: 40%">{{ team.city }}</div>

          <div class="flex" style="width: 15%">
            <!--            <button class="functionBtn" @click="deletePlayer(coach.id)">-->
            <!--              <font-awesome-icon icon="trash" />-->
            <!--            </button>-->
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
import {TeamClass} from "@/models/response/TeamClass";
import {TeamService} from "@/services/TeamService";
import addTeamForm from "@/components/forms/addTeamForm.vue";

@Options({
  components:{
    longButton,
    popup,
    addTeamForm
  }
})

export default class AdminTeamsPanel extends Vue{

  teams: TeamClass[] | undefined
  popupStatus: Boolean = false

  created() {
    TeamService.getTeams().then(
        data => {
          this.teams = data
          this.$forceUpdate()
        })
  }

  changeStatus(status: boolean) {
    this.popupStatus = !status
  }

}
</script>

<style >

</style>