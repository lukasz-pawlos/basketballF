<template>
    <section class="newsSection sectionPaddingLevel sectionPaddingVertical">
        <div class="newsBar">
            <h2>Hot news</h2>
                <div class="newsList">
                    <news v-for="data in news" :key="data" :news="data"/>
                </div>
            <button class="moreNews"> ALL NEWS</button>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import news from './newsBlock.vue';

@Options({
    components: {
    news,
    }
})

export default class newsBar extends Vue{
    
    get news() {
        return [
        {
            title: "News",
            text: "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English"
        },
        {
            title: "News",
            text: "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English"
        },
        {
            title: "News",
            text: "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English"
        }
        ]
    }
}
</script>

<style>
.newsBar {
    text-align: center;
}

.newsList {
    display: flex;
    gap: 20px;
    padding: 20px 0;
}

.moreNews {
    width: 70%;
    background: orangered;
    color: wheat;
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
}
</style>