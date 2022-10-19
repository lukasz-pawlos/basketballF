<template>
    <section>
        <div class="teamBar text-center">
        <h1>{{ Data.teamName }}</h1>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class teamNameBar extends Vue {

    Data = require('../../../public/teamData.json')
}
</script>
<style>
.teamBar {
    background: var(--black);
    color: var(--white);
}
</style>