<template>
    <div class="teamBar">
        <h1>{{ Data.teamName }}</h1>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class teamNameBar extends Vue {

    Data = require('../../../public/teamData.json')
}
</script>
<style>
.teamBar {
    text-align: center;
    background: var(--black);
    color: var(--white);
}
</style>