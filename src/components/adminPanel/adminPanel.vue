<template>
  <admin-panel-nav :isLogged="isLogged"/>
  <div id="adminPanel" class="flex">
    <loginForm v-if="!isLogged"/>
    <div v-else>
      <admin-panel-menu></admin-panel-menu>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import loginForm from "@/components/forms/loginForm.vue";
import adminPanelNav from "@/components/adminPanel/adminPanelNav.vue";
import adminPanelMenu from "@/components/adminPanel/adminPanelMenu.vue";


@Options({
  components:{
    loginForm,
    adminPanelNav,
    adminPanelMenu,
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
    this.$forceUpdate();
  }
}
</script>

<style>
#adminPanel {
  min-height: 100vh;
  min-width: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--sectionGradient);
}
</style>