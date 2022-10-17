<template>
    <div class="player" :id="player.id">
        <div class="flex playerName">
            <span class="playerName__span">
                <img class="playerName__img" src="../../../public/player.webp" alt="">
            </span>
            <div class="playerName_div">
                <h2 class="playerName_h2">{{ player.name }} {{player.forname}}</h2>  
            </div>
            
        </div>

        <div>
            <span class="playerNumber">
                <p class="playerNumber__p">#{{ player.number }}</p>
            </span>
            <h5>{{ player.nationality }}</h5>
            <h6>Age: {{ player.age }}</h6>
        </div>
    </div>
</template>
<script lang="ts">

import { Prop } from 'vue-property-decorator'
import { Vue } from 'vue-class-component';


export default class player extends Vue{

    @Prop()
    player!: {
        name: string,
        forname: string,
        number: number,
        nationality: string,
        age: number
    };  
}
</script>

<style>
.player {
    background-color: var(--grey);
    gap: 30px;
    padding: 5% 5%;
    margin-bottom: 3%;
    border-radius: 60px;
    border: 2px solid var(--darkGrey);
}

.playerNumber {
    position: absolute;
    right: 0;
}

.playerNumber__p {
    font-size: 200px;
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