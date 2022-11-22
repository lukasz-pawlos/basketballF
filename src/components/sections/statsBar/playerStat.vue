<template>
        <div class="playerStat" :class="{column: isColumn}">
            <img src="player.webp" alt="" class="playerstat__img">
            <h4 class="playerStat__h4"> {{ name }}</h4>
            <b class="playerStat__b">{{ value }}</b>
        </div>
        <hr v-if="!isColumn" class="playerStat__hr hrStyle"/>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class playerStats extends Vue{

  @Prop()
  isColumn: { default: false }

  @Prop()
  name: String

  @Prop()
  value: number | string

}
</script>

<style>
.playerStat {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
}

.playerstat__img {
    height: 60px;
}

.playerStat__h4 {
    font-size: 30px;
}

.playerStat__b {
    font-size: 40px;
}

.playerStat__hr {
    width: 80%;
    margin-bottom: 38px;
}

.column{
    flex-direction: column;
}
</style>