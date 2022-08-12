<template>
    <section class="playerLstSection sectionPaddingLevel sectionPaddingVertical">
        <player v-for="player in players" :key="player" :player="player"/>
    </section>
</template>
<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';
import player from './plyer.vue';

@Options({
    components: {
        player,
    }
})


export default class playersList extends Vue{

    @Prop()
    players!: []
}
</script>

<style>
.playerLstSection {
    background-color: black;
}    
</style>