<template>
    <section class="newsSection sectionPaddingLevel sectionPaddingVertical">
        <div class="text-center">
            <h2>Hot news</h2>
                <div class="newsList">
                    <news v-for="data in NEWS" :key="data" :news="data"/>
                </div>
          <router-link to="/news">
            <button class="lngBtn" style="width: 70%">ALL NEWS</button>
          </router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import news from './newsBlock.vue';
import longButton from '@/components/buttons/longButton.vue';
import {NewsClass} from "@/models/response/NewsClass";
import {NewsService} from "@/services/NewsService";

@Options({
    components: {
    news,
    longButton,
    }
})

export default class newsBar extends Vue{

  NEWS: NewsClass[] | undefined

  created() {
    NewsService.getNews().then(date => {
      // @ts-ignore: Unreachable code error
      const newsList = [date[0],  date[1], date[2]];
      this.NEWS = newsList;
      this.$forceUpdate();
    })
  }
}
</script>

<style>

.newsList {
    display: flex;
    gap: 20px;
}

</style>