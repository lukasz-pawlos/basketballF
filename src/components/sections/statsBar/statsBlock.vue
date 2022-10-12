<template>
    <div class="statsBlock bigStats">
        <h3>Points</h3>
        <div class="flex column">
            <playerStat/>
            <playerStat/>
            <playerStat/>
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
    export default class statsBlock extends Vue{
    
}
</script>
<style>
.bigStats {
    height: 100%;
}
</style>