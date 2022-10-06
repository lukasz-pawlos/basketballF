<template>
    <div class="container">
        <navigationBar/>
        <playersList :players="players"/>
        <coachesList :coaches="coaches"/>
        <footerBar/>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import playersList from '../components/team/plyersList.vue';
import footerBar from '../components/sections/footerBar.vue';
import navigationBar from '../components/sections/navigationBar.vue';
import pageLoader from './pageLoader.vue';
import coachesList from '../components/team/coachesList.vue';
// import player from '../team/plyer.vue';

@Options({
    components: {
        navigationBar,
        footerBar,
        pageLoader,
        playersList,
        coachesList,
    }
})

export default class TeamView extends Vue{

    get players() {
        return [
            {name: 'Stefan', forname: 'Kot', number: 1, age: 34, nationality: "Poland", id: 1},
            {name: 'Alojzy', forname: 'Kon', number: 22, age: 22,nationality: "Poland", id: 2},
            {name: 'Rafał', forname: 'Pies', number: 33, age: 18,nationality: "Poland", id: 3},
        ];
    }

    get coaches() {
        return [
            {name: 'Stefan', forname: 'Kot', funcion: 'main coach', age: 67, nationality: "Poland", id: 1},
            {name: 'Adam', forname: 'Dog', funcion: 'assistent', age: 44, nationality: "Poland", id: 2},
            {name: 'Stive', forname: 'Cat', funcion: 'XD', age: 21, nationality: "Poland", id: 3},
        ];
    }

}
</script>
<style>

</style>