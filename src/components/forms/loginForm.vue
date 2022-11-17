<template>
  <div id="loginForm" class="text-center">
    <h5>You are not logged</h5>
    <form @submit.prevent="chechPassword">
      <label class="formArea__label">
        Password
      </label>
      <input class="formArea__input" v-model="password" type="password">

      <span v-if="status!== 200 && status!== 0 && password !== ``">Bad password</span>

      <input
          class="lngBtn"
          type="submit"
          value="Log in"
      >
    </form>
  </div>
</template>
<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import inputWithLabel from "@/components/forms/iputs/inputWithLabel.vue";
import {PasswordService} from "@/services/PasswordService";

@Options({
  components:{
    inputWithLabel
  }
})

export default class loginForm extends Vue{

  password: String

  status: Number | undefined = 0;

  chechPassword() {
    PasswordService.checkPassword(this.password)
        .then(statusDB => {
          this.status = statusDB;
          this.$forceUpdate();
          this.setlogin();
        })
  }

  setlogin(){
    if(this.status == 200) {
      sessionStorage.setItem("isLogged", "true")
      this.$router.go(0);
    }
  }
}
</script>

<style>
#loginForm {
  color: var(--white);
  background: var(--black);
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#loginForm .formArea__label {
  left: 0;
}
</style>