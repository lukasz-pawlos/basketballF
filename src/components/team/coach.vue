<template>
    <div class="player" :id="coach.id">
        <div class="playerLeft">
            <img class="playerLeft__img" src="../../../public/player.webp" alt="">
        </div>
        <div class="playerRight">
            <h1>{{ coach.name }} {{coach.forname}}</h1>
                <p class="playerNumber__p">#{{ coach.funcion }}</p>
            <h3>{{ coach.nationality }}</h3>
            <h4>Age: {{ coach.age }}</h4>
        </div>
    </div>
</template>
<script lang="ts">

import { Prop } from 'vue-property-decorator'
import { Vue } from 'vue-class-component';


export default class player extends Vue{

    @Prop()
    coach!: [];  
}
</script>

<style>
    
</style>
