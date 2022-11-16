<template>
    <section class="coachListSection sectionPaddingLevel sectionPaddingVertical">
        <h2 class="coachListSection__h2">Coaches</h2>
        <div class="flex">
            <coach v-for="coach in coaches" :key="coach" :coach="coach"/>
        </div>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import coach from './coach.vue'
import {CoachClass} from "@/models/response/CoachClass";
import {CoachService} from "@/services/CoachService";

@Options({
    components: {
        coach,
    }
})


export default class coachList extends Vue{

    coaches: CoachClass[] | undefined;

  created() {
    CoachService.getCoaches().then(
        data => {
          this.coaches = data
          this.$forceUpdate()
        })
  }
}
</script>

<style>
.coachListSection {
    background-color: var(--white);
}
.coachListSection__h2 {
    padding-bottom: 100px;
    text-align: center;
}
</style>