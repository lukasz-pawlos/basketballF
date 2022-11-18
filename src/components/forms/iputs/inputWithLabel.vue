<template>
  <label class="formArea__label" :for="`${name}`">{{ name }}</label>
  <input class="formArea__input"
         :type="`${type}`"
         :name="`${name}`"
         :id="`${name}`"
         ref="input"
         :value = "value"
         :placeholder="`${name}`"
         @input="handleInput($event.target.value)">

  >
</template>
<script lang="ts">

import { Vue } from 'vue-class-component';
import {Prop} from "vue-property-decorator";

export default class inputWithLabel extends Vue{

  @Prop()
  type: String

  @Prop()
  name: String

  @Prop()
  value: any


  content: String

  handleInput (value: any) {
    this.$emit('input', value)
  }

}
</script>

<style>
.formArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.formArea__label {
  color: var(--white);
  text-align: left;
  font-size: 22px;
  position: relative;
  top: 12px;
  left: 20px;
  background: var(--orange);
  width: fit-content;
  border-radius: 20px;
  padding: 0 8px;
  z-index: 5;
}

.formArea__input,
.formArea__texarea {
  border: 2px solid;
  border-radius: 20px;
  height: 45px;
  font-family: inherit;
  font-size: 20px;
  margin-bottom: 15px;
  width: 400px;
}

.formArea__input::placeholder,
.formArea__texarea::placeholder {
  color: var(--black);
  opacity: 0.6;
  position: absolute;
  top: 10px;
  left: 10px;
}

.formArea__input:focus,
.formArea__texarea:focus {
  opacity: 0.3;
}


</style>