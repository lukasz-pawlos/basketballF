<template>
  <div id="addForm" class="text-center">
    <h5>Adding form</h5>
    <form @submit.prevent="addNews">
      <label class="formArea__label">title</label>
      <input class="formArea__input" v-model="news.title" type="text"/>

      <label class="formArea__label">text</label>
      <textarea class="formArea__input" v-model="news.text"/>
      <input
          class="lngBtn"
          style="width: 70%"
          type="submit"
          value="Add"/>
    </form>
  </div>
</template>
<script lang="ts">

import { Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import {CreateNewsClass} from "@/models/request/CreateNewsClass";
import {NewsService} from "@/services/NewsService";


export default class addNewsForm extends Vue{

  @Prop()
  matchId: Number

  news: CreateNewsClass = {
    matchId: 0,
    title: "",
    text: ""
  }

  addNews() {
    NewsService.createNews(this.news)
        .then(() => {
          this.$router.go(0);
        })
  }

  created() {
    this.news.matchId = this.matchId
  }
}
</script>

<style>

</style>