<template>
    <section class="newsSection sectionPaddingLevel sectionPaddingVertical">
        <div class="newsBar">
            <h2>Hot news</h2>
                <div class="newsList">
                    <div class="news">
                        <img class="news__img" src="background.webp" alt="">
                        <div class="news__text">
                            <h3 class="news__h3">First win</h3>
                            <p class="news__p">These are short, famous texts in English from classic sources like the Bible
                                or Shakespeare. Some texts have word definitions and explanations to help
                                you. Some of these texts are written in an old style of English. Try to
                                understand them, because the English that we speak today is based on
                            </p>                        
                        </div>
                        <button class="news__button">Read more</button>
                    </div>
                    <div class="news">
                        <img class="news__img" src="background.webp" alt="">
                        <h3 class="news__h3">News</h3>

                    </div>
                    <div class="news">
                        <img class="news__img" src="background.webp" alt="">
                        <h3 class="news__h3">News</h3>

                    </div>
                    
                </div>
            <button class="moreNews"> ALL NEWS</button>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class newsBar extends Vue{
    
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

.news {
    background: black;
    width: 33%;
    /* height: 600px; */
    border-radius: 16px;
    padding-bottom: 60px;
    position: relative;
}

.news__img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 100%;
}

.news__h3 {
    color: wheat;
    font-size: 60px;
}

.news__text {
    padding: 0px 10px;
}

.news__p {
    color: wheat;
    text-align: justify;
}

.news__button {
    background: none;
    color: orangered;
    border: 1px solid orangered;
    padding: 5px 15px;
    border-radius: 10px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    transition: background-color 1s, color 0.4s, box-shadow 1s;
    cursor: pointer;
}

.news__button:hover {
    background: orangered;
    color: white;
    box-shadow: 0px 0px 75px -13px orangered;
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