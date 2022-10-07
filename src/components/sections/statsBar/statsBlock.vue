<template>
    <div class="statsBlock">
        <h3>Points</h3>
        
        <playerStat/>
        <playerStat/>
        <playerStat/>

    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import playerStat from './playerStat.vue';

    @Options({
        components: {
            playerStat,
        }
    })
    export default class statsBlock extends Vue{
    
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