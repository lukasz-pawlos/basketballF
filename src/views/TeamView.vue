<template>
    <div class="container">
        <navigationBar/>
        <playersList :players="players"/>
        <div style="height: 1600px"></div>
        <footerBar/>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import playersList from '../components/team/plyersList.vue';
import footerBar from '../components/pages/footerBar.vue';
import navigationBar from '../components/pages/navigationBar.vue';
import pageLoader from './pageLoader.vue';
// import player from '../team/plyer.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        playersList,
    }
})

export default class TeamView extends Vue{

    get players(){
        return [
            {name: 'Stefan', forname: 'Kot', number: 1, age: 34, nationality: "Poland", id: 1},
            {name: 'Alojzy', forname: 'Kon', number: 22, age: 22,nationality: "Poland", id: 2},
            {name: 'Rafał', forname: 'Pies', number: 33, age: 18,nationality: "Poland", id: 3},
        ];
    }

}
</script>
<style>

</style>