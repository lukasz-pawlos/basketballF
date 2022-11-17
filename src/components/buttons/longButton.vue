<template>
    <button class="lngBtn" :style="`width: ${width}%`" @click="$router.push(path)"><slot></slot></button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
    
export default class longButton extends Vue{

  @Prop()
  path!: string

  @Prop()
  width: {
    type: Number,
    default: 70
  }
    
}
</script>

<style>
.lngBtn {
    background: var(--sectionGradient);
    color: var(--white);
    border-radius: 20px;
    font-size: 30px;
    cursor: pointer;
    margin: 40px 0;
}
</style>