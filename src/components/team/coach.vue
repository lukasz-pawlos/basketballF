<template>
    <div class="card coach text-center" :id="coach.id">
        <div class="coachPhoto">
            <img class="img" src="../../../public/player.webp" alt="">
        </div>
        <div class="">
            <h4>{{ coach.name }} {{coach.forname}}</h4>
            <h5 class="">{{ coach.funcion }}</h5>
            <h5>{{ coach.nationality }}</h5>
            <h6>Age: {{ coach.age }}</h6>
        </div>
    </div>
</template>
<script lang="ts">

import { Prop } from 'vue-property-decorator'
import { Vue } from 'vue-class-component';
import coachList from "@/components/team/coachesList.vue";


export default class player extends Vue{

    @Prop()
    coach!: coachList[];
}
</script>

<style>
.coach {
    width: 33%;
    min-width: auto;
}

.coachPhoto {
    width: 50%;
}
</style>
