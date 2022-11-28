<template>
  <section class="newsSection sectionPaddingLevel sectionPaddingVertical">
    <div class="text-center">
      <h2>All news</h2>
      <div class="newspage">
        <news v-for="data in NEWS" :key="data" :news="data"/>
      </div>
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

export default class newsPage extends Vue{

  NEWS: NewsClass[] | undefined

  created() {
    NewsService.getNews().then(date => {
      // @ts-ignore: Unreachable code error
      this.NEWS = date;
      this.$forceUpdate();
    })
  }
}
</script>

<style>

.newspage {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>