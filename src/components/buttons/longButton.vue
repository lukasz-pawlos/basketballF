<template>
    <button class="lngBtn" @click="$router.push(path)"><slot></slot></button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
    
export default class longButton extends Vue{

    @Prop()
    path!: string
    
}
</script>

<style>
.lngBtn {
    width: 70%;
    background: var(--orange);
    color: var(--white);
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
    margin: 40px 0;
}
</style>