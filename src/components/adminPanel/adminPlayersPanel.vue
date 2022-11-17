<template>
  <div id="adminPlayerPanel">
    <div class="text-center">
      <h1>PLAYERS</h1>
    </div>
    <hr class="hrStyle">
    <ul>
      <li class="admin__li">
        <div class="flex text-center">
          <div style="width: 5%">ID</div>
          <div style="width: 20%">name</div>
          <div style="width: 20%">secondName</div>
          <div style="width: 20%">nationality</div>
          <div style="width: 10%">number</div>
          <div style="width: 10%">age</div>
          <div style="width: 15%">function</div>
        </div>
      </li>
      <li v-for="player in players" :key="player" class="admin__li">
        <div class="flex text-center">
          <div style="width: 5%">{{ player.id }}</div>
          <div style="width: 20%">{{ player.name }}</div>
          <div style="width: 20%">{{ player.secondName }}</div>
          <div style="width: 20%">{{ player.nationality }}</div>
          <div style="width: 10%">{{ player.number }}</div>
          <div style="width: 10%">{{ player.age }}</div>
          <div style="width: 15%"></div>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <long-button :width=20> Add player </long-button>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import longButton from "@/components/buttons/longButton.vue";
import {PlayerClass} from "@/models/response/PlayerClass";
import {PlayerService} from "@/services/PlayerService";

@Options({
  components:{
    longButton,
  }
})

export default class AdminPlayersPanel extends Vue{

  players: PlayerClass[] | undefined


  created() {
    PlayerService.getPlayers().then(
        data => {
          this.players = data
          this.$forceUpdate()
        })
  }
}
</script>

<style>
#adminPlayerPanel {
  background: var(--white);
  min-width: 90vw;
  height: 80vh;
  margin: 80px 0 30px 0;
  border-radius: 20px;
  padding: 20px;
}

#adminPlayerPanel h1 {
  font-size: 40px;
  padding-bottom: 11px;
}

.admin__li{
  font-size: 30px;
  padding-bottom: 10px;
}

</style>