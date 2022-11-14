<template>
    <section class="playerListSection sectionPaddingLevel sectionPaddingVertical">
        <h2 class="playerListSection__h2">Players</h2>
        <div class="players">
            <player :players="players"/>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import player from './plyer.vue';
// import {PlayerClass} from "@/models/PlayerClass";
// import axios from "axios";
// import {PlayerClass} from "@/models/PlayerClass";


@Options({
    components: {
        player,
    }
})

export default class playersList extends Vue{

      // mounted(){
      //   this.players = [{
      //     id: 1,
      //     name: "String",
      //     secondName: "String",
      //     nationality: "String",
      //     number: 3,
      //     age: 32
      //   }]
      //   console.log(this.players.length)
      // }
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