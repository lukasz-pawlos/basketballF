<template>
  <div id="addForm" class="text-center">
    <h5>Adding form</h5>
    <form @submit.prevent="addScore">
      <label class="formArea__label">homeScore</label>
      <input class="formArea__input" v-model="score.homeScore" type="text"/>

      <label class="formArea__label">guestScore</label>
      <input class="formArea__input" v-model="score.guestScore" type="text"/>
      <input
          class="lngBtn"
          style="width: 70%"
          type="submit"
          value="Add"/>
    </form>
  </div>
</template>
<script lang="ts">

import { Vue} from 'vue-class-component';
import {CreateScoreClass} from "@/models/request/CreateScore";
import {Prop} from "vue-property-decorator";
import {MatchService} from "@/services/MatchService";


export default class addTeamForm extends Vue{

  @Prop()
  matchId: Number | String

  score: CreateScoreClass = {
    homeScore: 0,
    guestScore: 0,
  }


  addScore() {
    // eslint-disable-next-line no-undef
    MatchService.updateScore(this.matchId, this.score)
        .then(() => {
          this.$router.go(0);
        })
  }

}
</script>

<style>

</style>