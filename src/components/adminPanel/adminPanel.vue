<template>
  <loginForm v-if="!isLogged"/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import loginForm from "@/components/forms/loginForm.vue";

@Options({
  components:{
    loginForm
  }
})

export default class adminPanel extends Vue{

  isLogged: boolean

  mounted(){
    this.checkIsLogged()
  }
  checkIsLogged(){
    sessionStorage.getItem('isLogged') == null ?
        this.isLogged = false : sessionStorage.getItem('isLogged') === "true" ?
            this.isLogged = true : this.isLogged = false
  }
}
</script>

<style>

</style>