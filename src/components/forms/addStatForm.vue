<template>
  <div id="addForm" class="text-center statF">
    <form @submit.prevent="addStat">
      <div>
        <label class="formArea__label">points</label>
        <input class="formArea__input" v-model="stat.points" type="number"/>
      </div>

      <div>
        <label class="formArea__label">rebounds</label>
        <input class="formArea__input" v-model="stat.rebounds" type="number"/>
      </div>

      <div>
        <label class="formArea__label">assists</label>
        <input class="formArea__input" v-model="stat.assists" type="number"/>
      </div>

      <div>
        <label class="formArea__label">blocks</label>
        <input class="formArea__input" v-model="stat.blocks" type="number"/>
      </div>

      <div>
        <label class="formArea__label">steals</label>
        <input class="formArea__input" v-model="stat.steals" type="number"/>
      </div>

      <input
          class="lngBtn"
          style="width: 20%"
          type="submit"
          value="Add"
          :disabled="isAdded"
      />
    </form>
  </div>
</template>
<script lang="ts">

import { Vue} from 'vue-class-component';
import {CreateStat} from "@/models/request/CreateStat";
import {Prop} from "vue-property-decorator";
import {StatsService} from "@/services/StatsService";


export default class addPlayerForm extends Vue{

  @Prop()
  matchId: number;

  @Prop()
  playerId: number;

  stat: CreateStat = {
    match: 0,
    player: 0,
    points: 0,
    rebounds: 0,
    assists: 0,
    blocks: 0,
    steals: 0
  }

  isAdded: boolean = false

  created(){
    this.stat.match = this.matchId;
    this.stat.player = this.playerId;
  }

  addStat() {
    StatsService.createStat(this.stat);
    this.isAdded = true;
  }

}
</script>

<style>
.statF .formArea__texarea,
.statF .formArea__input{
  width: 100px;
}
.statF form {
  flex-direction: row;
}

.statF .lngBtn {
  margin-top: 24px;
  margin-bottom: 12px;
}
input[type="submit" i]:disabled {
  background: var(--grey)!important;
}
</style>