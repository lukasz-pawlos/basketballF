<template>
  <div id="adminPanelMenu">
    <router-link to="/admin/player">
      <button class="adminPanelMenu_btn">Players</button>
    </router-link>
    <router-link to="/admin/coches">
      <button class="adminPanelMenu_btn">Coaches</button>
    </router-link>
    <router-link to="/admin/teams">
      <button class="adminPanelMenu_btn">Teams</button>
    </router-link>
    <router-link to="/admin/matches">
      <button class="adminPanelMenu_btn">Matches</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class adminPanelMenu extends Vue{

}
</script>

<style>
#adminPanelMenu {
  display: grid;
  grid-template-columns: 250px 250px;
  grid-template-rows: 125px 125px;
}

.adminPanelMenu_btn {
  margin: 10px;
  font-size: 30px;
  border-radius: 20px;
  cursor: pointer;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  transition: all .2s ease-in-out;
}

.adminPanelMenu_btn:hover {
  transform: scale(1.1);
  box-shadow: 0 14px 20px 0px rgba(0, 0, 0, 1);
}
</style>