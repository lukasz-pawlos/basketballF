<template>
    <div class="statsBlock">
        <h3>Points</h3>
            <playerStat class="column"/>
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
.column{
    flex-direction: column;
}
</style>