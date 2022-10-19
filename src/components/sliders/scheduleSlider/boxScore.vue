<template>
    <div class="boxScore">
        <div class="teamsLogos flex">
            <img class="teamsLogos__img" src="logo1.png" alt="">
            <span>VS</span>
            <img class="teamsLogos__img" src="logo2.jpg" alt="">
        </div>
        <hr class="boxScore__hr">
        <div class="teamScore flex">
            <span class="teamName">{{ gameData.home }}</span>
            <span class="score">{{ gameData.homeScore }}</span>
        </div>
        <div class="teamScore flex">
            <span class="teamName">{{ gameData.guest }}</span>
            <span class="score">{{ gameData.guestScore }}</span>
        </div>
        <hr class="boxScore__hr">
        <div class="gameData flex">
            <span class="gameIcon">
                <font-awesome-icon v-if="gameData.home === 'Legia'"  :icon="{ prefix: 'fa', iconName: 'home' }" />
                <font-awesome-icon v-else :icon="{ prefix: 'fa', iconName: 'at' }" /> 
            </span>
            <span class="gameInfo">{{ gameData.city }}</span>
        </div>
        <div class="gameData flex">
            <span class="gameIcon">
                <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'calendar-day' }" />
            </span>
            <span class="gameInfo">{{ gameData.data }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from 'vue-property-decorator'


export default class boxScore extends Vue {


@Prop()
gameData !: {
    home: string,
    guest: string,
    data: string,
    city: string,
    homeScore: number,
    guestScore: number
} 

}
</script>

<style>
.boxScore {
    padding: 16px;
    width: 200px;
    background-color: var(--orange-08);
    border-radius: 20px;
}

.boxScore__hr {
    border-style: dashed;

}


.teamsLogos {
    padding-bottom: 16px;
    align-items: center;
    justify-content: space-between;
}

.teamsLogos__img {
    height: 60px;
}

.teamScore {
    align-items: center;
    justify-content: space-between;
}

.gameIcon {
    width: 40px;
}

.gameData {
    align-items: center;
}
</style>