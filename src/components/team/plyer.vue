<template>
    <div class="player" :id="player.id">
        <div class="playerLeft">
            <img class="playerLeft__img" src="../../../public/player.webp" alt="">
        </div>
        <div class="playerRight">
            <h1>{{ player.name }} {{player.forname}}</h1>
            <span class="playerNumber">
                <p class="playerNumber__p">{{ player.number }}</p>
            </span>
            <h3>{{ player.nationality }}</h3>
            <h4>Age: {{ player.age }}</h4>
        </div>
    </div>
</template>
<script lang="ts">

import { Prop } from 'vue-property-decorator'
import { Vue } from 'vue-class-component';


export default class player extends Vue{

    @Prop()
    player!: [];  
}
</script>

<style>
.player {
    background-color: var(--grey);
    display: flex;
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

.playerLeft {
    width: 25%;
}

.playerLeft__img {
    width: 100%;
}

.playerRight {
    width: 75%;
    position: relative
}

</style>