<template>
    <section class="sectionPaddingVertical">
        <div class="scheduleSlider">
            <splide :options="{ rewind: true, focus:0, perPage:6, autoWidth:true, pagination:false, gap:10}">
                <splide-slide v-for="match in matches" :key="match">
                  <router-link :to="`match?matchId=${match.id}`">
                    <boxScore :gameData="match"/>
                  </router-link>
                </splide-slide>
            </splide>
        </div>
    </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css/skyblue';
import boxScore from './boxScore.vue';


@Options({
    components:{
        Splide, 
        SplideSlide,
        boxScore
    }
})

export default class scheduleSlider extends Vue {

// @ts-ignore: Unreachable code error
  matches: [] | undefined = [{"id":1,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":2,"name":"Daring Buffalos","city":"San Diego"},"homeScore":102,"guestScore":91,"date":"2022-11-05T20:00:00"},{"id":2,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":3,"name":"Excellent Sparks","city":"Boston"},"homeScore":136,"guestScore":88,"date":"2022-11-09T20:00:00"},{"id":3,"homeTeam":{"id":4,"name":"Dangerous Demons","city":"New York"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":72,"guestScore":74,"date":"2022-11-12T11:00:00"},{"id":4,"homeTeam":{"id":5,"name":"Evil Drivers","city":"New Orleans"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":88,"guestScore":80,"date":"2022-11-15T17:05:00"},{"id":5,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":6,"name":"Quiet Tornadoes","city":"Phoenix"},"homeScore":138,"guestScore":99,"date":"2022-11-18T17:10:00"},{"id":6,"homeTeam":{"id":7,"name":"Disturbed Panthers","city":"Honolulu"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":97,"guestScore":102,"date":"2022-11-21T18:20:00"},{"id":7,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":8,"name":"Hot Dolphins","city":"Orlando"},"homeScore":86,"guestScore":56,"date":"2022-11-25T16:50:00"},{"id":8,"homeTeam":{"id":2,"name":"Daring Buffalos","city":"San Diego"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":null,"guestScore":null,"date":"2022-11-28T18:00:00"},{"id":9,"homeTeam":{"id":3,"name":"Excellent Sparks","city":"Boston"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":null,"guestScore":null,"date":"2022-12-02T15:00:00"},{"id":10,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":4,"name":"Dangerous Demons","city":"New York"},"homeScore":null,"guestScore":null,"date":"2022-12-11T16:00:00"},{"id":11,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":5,"name":"Evil Drivers","city":"New Orleans"},"homeScore":null,"guestScore":null,"date":"2022-12-13T20:25:00"},{"id":12,"homeTeam":{"id":6,"name":"Quiet Tornadoes","city":"Phoenix"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":null,"guestScore":null,"date":"2022-12-16T21:10:00"},{"id":13,"homeTeam":{"id":1,"name":"My Team","city":"Miami"},"guestTeam":{"id":7,"name":"Disturbed Panthers","city":"Honolulu"},"homeScore":null,"guestScore":null,"date":"2022-12-20T20:10:00"},{"id":14,"homeTeam":{"id":8,"name":"Hot Dolphins","city":"Orlando"},"guestTeam":{"id":1,"name":"My Team","city":"Miami"},"homeScore":null,"guestScore":null,"date":"2022-12-23T13:30:00"}]

  // created(){
  //   MatchService.getMatches().then(data => {
  //     this.matches = data;
  //     this.$forceUpdate();
  //   }).then( () => this.$forceUpdate())
  // }

  beforeMount(){
  }

}
</script>
<style>
.scheduleSlider .splide__track{
    margin: 0 50px;
}

.splide__arrow svg {
  fill: var(--sectionGradient)!important;
}
</style>