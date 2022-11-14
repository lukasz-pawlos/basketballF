<template>
  <div v-for="player in players" :key="player">
    <div class="card" :id="player.id">
        <div class="flex playerName">
            <span class="playerName__span">
                <img class="playerName__img" src="../../../public/player.webp" alt="">
            </span>
            <div class="playerName_div">
                <h2 class="playerName_h2">{{ player.name }} {{player.secondName}}</h2>  
            </div>
            
        </div>
        <hr class="hrStyle">
        <div>
            <div class="flex" style="align-items: center; justify-content: space-between;">
                <div>
                    <h5>{{ player.nationality }}</h5>
                    <h6>Age: {{ player.age }}</h6>
                </div>
                <span class="playerNumber">
                <p class="playerNumber__p">{{ player.number }}</p>
            </span>
            </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">

import { Vue } from 'vue-class-component';
 import {PlayerClass} from "@/models/PlayerClass";
import {PlayerService} from "@/services/PlayerService";



export default class player extends Vue{


      players: PlayerClass[] | undefined | string


  mounted() {
        PlayerService.getPlayers().then(data => {this.players = data
          this.$forceUpdate()})
  }


}
</script>

<style>
.card {
    background-color: var(--orange);
    padding: 20px;
    border-radius: 24px;
    min-width: 320px;
    border: 2px solid var(--darkGrey);
}

.playerNumber {
    /* position: absolute; */
    right: 0;
}

.playerName{
    justify-content: space-between;
}

.playerNumber__p {
    font-size: 75px;
    margin: 0;
}

.playerName__span {
    width: 100px;
    height: 100px;
}

.playerName__img {
    width: 100%;
}

.playerName_div {
    max-width: 180px;
    text-align: end;
}

.playerName_h2 {
    font-size: 48px;
}

</style>