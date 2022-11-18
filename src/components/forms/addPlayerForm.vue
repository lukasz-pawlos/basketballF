<template>
  <div id="addForm" class="text-center">
    <h5>Adding form</h5>
    <form @submit.prevent="addPlayer">
      <label class="formArea__label">name</label>
      <input class="formArea__input" v-model="player.name" type="text"/>

      <label class="formArea__label">secondName</label>
      <input class="formArea__input" v-model="player.secondName" type="text"/>

      <label class="formArea__label">nationality</label>
      <input class="formArea__input" v-model="player.nationality" type="text"/>

      <label class="formArea__label">number</label>
      <input class="formArea__input" v-model="player.number" type="number"/>

      <label class="formArea__label">age</label>
      <input class="formArea__input" v-model="player.age" type="number"/>

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
import {CreatePlayerClass} from "@/models/request/CreatePlayerClass";
import {PlayerService} from "@/services/PlayerService";


export default class addPlayerForm extends Vue{

  player: CreatePlayerClass = {
    name: "",
    secondName: "",
    nationality: "",
    number: 0,
    age: 0
  }

  addPlayer() {
    PlayerService.createPlayer(this.player)
        .then(() => {
          this.$router.go(0);
        })
  }

}
</script>

<style>

</style>