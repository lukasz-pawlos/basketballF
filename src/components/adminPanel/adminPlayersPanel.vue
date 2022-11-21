<template>
  <div id="adminPanelOptions">
    <div class="text-center">
      <h1>PLAYERS</h1>
    </div>
    <hr class="hrStyle">
    <ul>
      <li class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">ID</admin-li-elem>
          <admin-li-elem :width="20">name</admin-li-elem>
          <admin-li-elem :width="20">secondName</admin-li-elem>
          <admin-li-elem :width="20">nationality</admin-li-elem>
          <admin-li-elem :width="10">number</admin-li-elem>
          <admin-li-elem :width="10">age</admin-li-elem>
          <admin-li-elem :width="15">function</admin-li-elem>
        </div>
        <hr class="hrStyle">
      </li>
      <li v-for="player in players" :key="player" class="admin__li">
        <div class="flex text-center">
          <admin-li-elem :width="5">{{ player.id }}</admin-li-elem>
          <admin-li-elem :width="20">{{ player.name }}</admin-li-elem>
          <admin-li-elem :width="20">{{ player.secondName }}</admin-li-elem>
          <admin-li-elem :width="20">{{ player.nationality }}</admin-li-elem>
          <admin-li-elem :width="10">{{ player.number }}</admin-li-elem>
          <admin-li-elem :width="10">{{ player.age }}</admin-li-elem>
          <admin-li-elem :width="15">
            <div class="flex flex-center">
              <button class="functionBtn" @click="deletePlayer(player.id)" title="Delete player">
                <font-awesome-icon icon="trash" />
              </button>
            </div>
          </admin-li-elem>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <button class="lngBtn"  @click="changeStatus(popupStatus)"> Add player </button>
    </div>
  </div>
  <popup :open="popupStatus" @close="()=> changeStatus(popupStatus)" :text="`Add new player`">
    <addPLayerForm/>
  </popup>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import longButton from "@/components/buttons/longButton.vue";
import {PlayerClass} from "@/models/response/PlayerClass";
import {PlayerService} from "@/services/PlayerService";
import popup from "@/components/popups/popup.vue";
import addPLayerForm from "@//components/forms/addPlayerForm.vue";
import adminLiElem from "@/components/adminPanel/elem/adminLiElem.vue";


@Options({
  components:{
    longButton,
    popup,
    adminLiElem,
    addPLayerForm
  }
})

export default class AdminPlayersPanel extends Vue{

  players: PlayerClass[] | undefined
  popupStatus: Boolean = false

  created() {
    PlayerService.getPlayers().then(
        data => {
          this.players = data
          this.$forceUpdate()
        })
  }

  changeStatus(status: boolean) {
    this.popupStatus = !status
}

  deletePlayer(playerId: Number) {
    PlayerService.deletePlayer(playerId).then(
        () => {
          this.$router.go(0);
        }
    )
  }
}
</script>

<style>
#adminPanelOptions {
  background: var(--white);
  min-width: 90vw;
  min-height: 80vh;
  margin: 80px 0 30px 0;
  border-radius: 20px;
  padding: 20px;
}

#adminPanelOptions h1 {
  font-size: 40px;
  padding-bottom: 11px;
}

.admin__li{
  font-size: 30px;
  padding-bottom: 10px;
}

.functionBtn{
  border-radius: 100%;
  width: 38px;
  height: 38px;
  background: var(--sectionGradient);
  cursor: pointer;
}

.admin__li__div{
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>