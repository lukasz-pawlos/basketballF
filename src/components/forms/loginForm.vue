<template>
  <div id="loginForm">
    <h5>You are not logged</h5>
    <form @submit.prevent="submit">
    <input v-model="password" type="password">

      <input
          type="submit"
          value="Send"
      >

    </form>
    <div v-if="formSubmitted">
      {{password}}
    </div>
  </div>
</template>
<script lang="ts">

import { Vue } from 'vue-class-component';

export default class loginForm extends Vue{

  password: string
  formSubmitted: Boolean = false

  submit() {
    this.formSubmitted = true
  }
}
</script>

<style>

</style>