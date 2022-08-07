<template>
  <Home/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from './components/sites/Home.vue';
import './assets/globalStyle.css';

@Options({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  height: 100%;
}
</style>
