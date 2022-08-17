<template>
    <section class="playerListSection sectionPaddingLevel sectionPaddingVertical">
        <h2 class="playerListSection__h2">Players</h2>
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
.playerListSection {
    background-color: black;
}
.playerListSection__h2 {
    color: var(--white);
    padding-bottom: 100px;
    text-align: center;
}
</style>