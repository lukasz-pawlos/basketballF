<template>
    <div>
        <h1>{{ player.name }} {{player.forname}}</h1>
        <h2>{{ player.number }}</h2>
        <h3>{{ player.age }}</h3>
        <h5>{{ player.id }}</h5>
    </div>
</template>
<script lang="ts">

import { Prop } from 'vue-property-decorator'
import { Vue } from 'vue-class-component';


export default class player extends Vue{

    @Prop()
    player!: [];  
}
</script>
<style>
    
</style>