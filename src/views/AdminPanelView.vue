<template>
  <div id="adminPanel">
    <adminPanel/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import adminPanel from "@/components/adminPanel/adminPanel.vue";

@Options({
  components: {
    adminPanel
  }
})

export default class AdminPanelView extends Vue{

}
</script>
<style>

</style>