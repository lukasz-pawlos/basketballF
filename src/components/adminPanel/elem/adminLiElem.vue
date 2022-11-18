<template>
  <div :style="`width: ${width}%`" class="admin__li__div">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

export default class adminLiElem extends Vue {

  @Prop()
  width: number;
}

</script>

<style>
.admin__li__div{
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>