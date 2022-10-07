<template lang>
    <section class="statsSection sectionPaddingLevel sectionPaddingVertical">
        <div class="statsBar">
            <h2>Stats</h2>
            <div class="statsList">
                <div class="statsContainer">
                    <statsBlock/>
                </div>
                <div class="statsContainer">
                    <statsSmallBlock/>
                    <statsSmallBlock/>
                </div>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import statsBlock from './statsBlock.vue';
    import statsSmallBlock from './statsSmallBlock.vue';
    @Options({
        components: {
        statsBlock,
        statsSmallBlock,
        }
    })
    
    export default class statsBar extends Vue{
        
        // get news() {
        //     return [
        //     {
        //         title: "News",
        //         text: "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English"
        //     },
        //     {
        //         title: "News",
        //         text: "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English"
        //     },
        //     {
        //         title: "News",
        //         text: "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English"
        //     }
        //     ]
        // }
    }
</script>

<style>
.statsSection {
    background: var(--sectionGradient);
}

.statsBar {
    text-align: center;
}

.statsList {
    display: flex;
    gap: 30px;
}

.statsContainer {
    width: 50%;
}
</style>