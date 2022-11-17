<template>
  <div id="adminPanelNav">
    <h1>ADMIN PANEL</h1>
    <button v-if="isLogged" class="adminPanelNav__btn" @click="logout">
      <font-awesome-icon class="adminPanelNav__icon" icon="fa-solid fa-right-from-bracket" />
    </button>
    <button v-if="isLogged && this.$route.name !==`admin`" class="adminPanelNav__btn left" @click="this.$router.push('/admin')">
      <font-awesome-icon class="adminPanelNav__icon" icon="arrow-left" />   </button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import loginForm from "@/components/forms/loginForm.vue";
import { Prop } from "vue-property-decorator";

@Options({
  components:{
    loginForm
  }
})

export default class adminPanelNav extends Vue{

  @Prop()
  isLogged: boolean

  logout() {
    sessionStorage.clear();
    this.$router.go(0);
  }
}
</script>

<style>
#adminPanelNav {
  background: var(--black);
  width: 100%;
  position: absolute;
  text-align: center;
}

#adminPanelNav h1 {
  font-size: 40px;
  color: var(--white);
}

.adminPanelNav__btn {
  background: none;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 0;
}
.left {
  left: 10px;
}

.adminPanelNav__btn:hover {
  background: var(--sectionGradient);
}
.adminPanelNav__icon {
  font-size: 30px;
  color: white;
}
</style>