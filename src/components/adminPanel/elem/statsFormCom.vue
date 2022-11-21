<template>
  <div v-for="(player, index) in players" :key="player">
    <b>{{index+1}}</b>
    Id: {{player.id}} {{ player.name }} {{player.secondName}}
    <add-stat-form :matchId="matchId" :playerId="player.id"></add-stat-form>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {PlayerClass} from "@/models/response/PlayerClass";
import {PlayerService} from "@/services/PlayerService";
import addStatForm from "@/components/forms/addStatForm.vue";

@Options({
  components:{
    addStatForm
  }
})

export default class statsFormCom extends Vue {

  @Prop()
  matchId: number | string;

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

</style>