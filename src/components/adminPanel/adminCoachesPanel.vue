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
          <admin-li-elem :width="20">name</admin-li-elem>
          <admin-li-elem :width="20">secondName</admin-li-elem>
          <admin-li-elem :width="20">nationality</admin-li-elem>
          <admin-li-elem :width="10">role</admin-li-elem>
          <admin-li-elem :width="10">age</admin-li-elem>
          <admin-li-elem :width="15">function</admin-li-elem>
        </div>
      </li>
      <li v-for="coach in coaches" :key="coach" class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">{{ coach.id }}</admin-li-elem>
          <admin-li-elem :width="20">{{ coach.name }}</admin-li-elem>
          <admin-li-elem :width="20">{{ coach.secondName }}</admin-li-elem>
          <admin-li-elem :width="20">{{ coach.nationality }}</admin-li-elem>
          <admin-li-elem :width="10">{{ coach.role }}</admin-li-elem>
          <admin-li-elem :width="10">{{ coach.age }}</admin-li-elem>

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
import popup from "@/components/popups/popup.vue";
import longButton from "@/components/buttons/longButton.vue";
import {CoachService} from "@/services/CoachService";
import {CoachClass} from "@/models/response/CoachClass";
import addCoachForm from "@//components/forms/addCoachForm.vue";
import AdminLiElem from "@/components/adminPanel/elem/adminLiElem.vue";


@Options({
  components:{
    AdminLiElem,
    longButton,
    popup,
    addCoachForm,
  }
})

export default class AdminCoachesPanel extends Vue{
  coaches: CoachClass[] | undefined
  popupStatus: Boolean = false

  created() {
    CoachService.getCoaches().then(
        data => {
          this.coaches = data
          this.$forceUpdate()
        })
  }

  changeStatus(status: boolean) {
    this.popupStatus = !status
  }

  // deletePlayer(playerId: Number) {
  //   PlayerService.deletePlayer(playerId).then(
  //       () => {
  //         this.$router.go(0);
  //       }
  //   )
  // }

}
</script>

<style scoped>

</style>