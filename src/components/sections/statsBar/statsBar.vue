<template>
    <section class="statsSection sectionPaddingLevel sectionPaddingVertical">
        <div class="text-center">
            <h2>Stats</h2>
            <div class="statsList">
                <div class="statsContainer">
                    <statsBlock :players-i-d="playerIdPoints"/>
                </div>
                <div class="statsContainer smallContainer">
                    <statsSmallBlock :players-i-d="playerIdRebounds" :name="`Rebounds`"/>
                    <statsSmallBlock :players-i-d="playerIdAssists" :name="`Assists`"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import statsBlock from './statsBlock.vue';
import statsSmallBlock from './statsSmallBlock.vue';
import longButton from '@/components/buttons/longButton.vue';

@Options({
    components: {
    statsBlock,
    statsSmallBlock,
    longButton,
    }
})

export default class statsBar extends Vue{

  playerIdPoints = [1, 5, 4];
  playerIdRebounds = [12, 11, 1];
  playerIdAssists = [1, 9, 8];

}
</script>

<style>
.statsSection {
    background: var(--sectionGradient);
}

.statsList {
    display: flex;
    gap: 30px;
}

.statsContainer {
    width: 50%;
}

.smallContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>