<template>
        <div class="playerStat">
            <img src="player.webp" alt="" class="playerstat__img">
            <h4 class="playerStat__h4"> Player name</h4>
            <b class="playerStat__b">23.5</b>
        </div>
        <hr class="playerStat__hr"/>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    export default class playerStats extends Vue{
    
}
</script>

<style>
.playerStat {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    height: 60px;
}

.playerstat__img {
    height: 100%;
}

.playerStat__h4 {
    font-size: 30px;
}

.playerStat__b {
    font-size: 40px;
}

.playerStat__hr {
    width: 80%;
    border: 1px dashed  var(--black);
    margin-bottom: 38px;
}
</style>