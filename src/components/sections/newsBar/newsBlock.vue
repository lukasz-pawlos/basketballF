<template>
    <div class="news">
        <img class="news__img" src="background.webp" alt="">
        <div class="news__text">
            <h3 class="news__h3">{{ news.title }}</h3>
            <p class="news__p">
                {{ news.text }}
            </p>                        
        </div>
        <router-link :to="`match?matchId=${news.matchId}`">
        <button class="news__button">Stats</button>
        </router-link>
        <span class="news__date">{{ convertTime(news.date) }}</span>
    </div>
</template>

<script lang="ts">

import { Prop } from 'vue-property-decorator'
import { Vue } from 'vue-class-component';
import {NewsClass} from "@/models/response/NewsClass";
import {timeConverter} from "@/converters/timeConverter";

    
export default class news extends Vue{
        
    @Prop()
    news: NewsClass

  convertTime(date: string) {
    return timeConverter.longTime(date).slice(0, -3);
  }
    
    }
</script>

<style>
.news {
    background: var(--black);
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
    color: var(--white);
    font-size: 60px;
}

.news__text {
    padding: 0px 10px;
}

.news__p {
    color: var(--white);
    text-align: justify;
}

.news__button {
    background: none;
    color: var(--orange);
    border: 1px solid var(--orange);
    padding: 5px 15px;
    border-radius: 10px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    transition: background-color 1s, color 0.4s, box-shadow 1s;
    cursor: pointer;
}

.news__button:hover {
    background: var(--orange);
    color: var(--white);
    box-shadow: 0px 0px 75px -13px var(--orange);
}

.news__date {
  background: none;
  color: var(--orange);
  position: absolute;
  left: 15px;
  bottom: 15px;
}
</style>