<template>
  <div id="addForm" class="text-center">
    <h5>Adding form</h5>
    <form @submit.prevent="addCoach">
      <label class="formArea__label">name</label>
      <input class="formArea__input" v-model="team.name" type="text"/>

      <label class="formArea__label">secondName</label>
      <input class="formArea__input" v-model="team.city" type="text"/>
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
import {CreateTeamClass} from "@/models/request/CreateTeamClass";
import {TeamService} from "@/services/TeamService";


export default class addTeamForm extends Vue{

  team: CreateTeamClass = {
    name: "",
    city: "",
  }

  addCoach() {
    TeamService.createTeam(this.team)
        .then(() => {
          this.$router.go(0);
        })
  }

}
</script>

<style>

</style>