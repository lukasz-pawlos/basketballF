<template>
    <section class="playerListSection sectionPaddingLevel sectionPaddingVertical">
        <h2 class="playerListSection__h2">Players</h2>
        <div class="players">
            <player v-for="player in players" :key="player" :player="player"/>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import player from './plyer.vue';
import {PlayerClass} from "@/models/response/PlayerClass";
import {PlayerService} from "@/services/PlayerService";



@Options({
    components: {
        player,
    }
})

export default class playersList extends Vue{

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
.playerListSection {
    background-color: var(--black);
}
.playerListSection__h2 {
    color: var(--white);
    padding-bottom: 100px;
    text-align: center;
}
.players {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
</style>