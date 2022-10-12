<template>
    <div class="statsBlock smallStats">
        <h3>Points</h3>
        <div class="flex plyerColumn">
            <playerStat :isColumn="true"/>
            <playerStat :isColumn="true"/>
            <playerStat :isColumn="true"/>
        </div>
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

    export default class statsSmallBlock extends Vue{
    
}
</script>
<style>

.plyerColumn {
    justify-content: space-evenly;
}

.smallStats {
    height: 50%;
}
</style>