<template>
  <pageLoader/>
  <Team/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from './components/sites/Home.vue';
import Team from './components/sites/Team.vue';
import './assets/globalStyle.css';
import pageLoader from './components/sites/comp/pageLoader.vue';

@Options({
  components: {
    Home,
    pageLoader,
    Team,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  height: 100%;
}
</style>
