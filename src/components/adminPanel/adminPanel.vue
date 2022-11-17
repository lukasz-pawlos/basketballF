<template>
  <admin-panel-nav :isLogged="isLogged"/>
  <div id="adminPanel" class="flex">
    <loginForm v-if="!isLogged"/>
    <div v-else>
        <admin-panel-menu v-if="this.$route.name ===`admin`"/>
        <admin-players-panel v-if="this.$route.name ===`admin-players`"/>
        <admin-coaches-panel v-if="this.$route.name ===`admin-coaches`"/>
        <admin-teams-panel v-if="this.$route.name ===`admin-teams`"/>
        <admin-matches-panel v-if="this.$route.name ===`admin-matches`"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import loginForm from "@/components/forms/loginForm.vue";
import adminPanelNav from "@/components/adminPanel/adminPanelNav.vue";
import adminPanelMenu from "@/components/adminPanel/adminPanelMenu.vue";
import adminPlayersPanel from "@/components/adminPanel/adminPlayersPanel.vue";
import adminCoachesPanel from "@/components/adminPanel/adminCoachesPanel.vue";
import adminTeamsPanel from "@/components/adminPanel/adminTeamsPanel.vue";
import adminMatchesPanel from "@/components/adminPanel/adminMatchesPanel.vue";


@Options({
  components:{
    loginForm,
    adminPanelNav,
    adminPanelMenu,
    adminPlayersPanel,
    adminCoachesPanel,
    adminTeamsPanel,
    adminMatchesPanel
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
  align-items: center;
  justify-content: center;
  background: var(--sectionGradient);
}
</style>