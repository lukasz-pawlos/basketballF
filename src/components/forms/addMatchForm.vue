<template>
  <div id="addForm" class="text-center">
    <h5>Adding form</h5>
    <form @submit.prevent="addCoach">
      <label class="formArea__label">homeTeamId</label>
      <input class="formArea__input" v-model="match.homeTeamId" type="text"/>

      <label class="formArea__label">guestTeamId</label>
      <input class="formArea__input" v-model="match.guestTeamId" type="text"/>

      <label class="formArea__label">date</label>
      <input class="formArea__input" v-model="match.date" type="datetime-local"/>
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

import {CreateMatchClass} from "@/models/request/CreateMatchClass";
import {MatchService} from "@/services/MatchService";


export default class addMatchForm extends Vue{

  match: CreateMatchClass = {
    homeTeamId: 0,
    guestTeamId: 0,
    date: new Date(),

  }

  addCoach() {
    MatchService.createMatch(this.match)
        .then(() => {
          this.$router.go(0);
        })
  }

}
</script>

<style>

</style>