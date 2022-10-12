<template>
    <button class="lngBtn"><slot></slot></button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
    
export default class longButton extends Vue{

    @Prop()
    text!: string
    
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