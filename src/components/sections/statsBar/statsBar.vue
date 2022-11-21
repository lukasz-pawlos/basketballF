<template>
    <section class="statsSection sectionPaddingLevel sectionPaddingVertical">
        <div class="text-center">
            <h2>Stats</h2>
            <div class="statsList">
                <div class="statsContainer">
                    <statsBlock/>
                </div>
                <div class="statsContainer smallContainer">
                    <statsSmallBlock/>
                    <statsSmallBlock/>
                </div>
            </div>
            <router-link to="/news">
              <button class="lngBtn" style="width: 70%">ALL STATS</button>
            </router-link>
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