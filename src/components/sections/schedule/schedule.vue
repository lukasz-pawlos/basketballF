<template>
    <section class="text-center sectionPaddingLevel sectionPaddingVertical">
        <h2>Schedule</h2>
        <scheduleTab/>
    </section>
</template>
<script lang="ts">
import scheduleTab from "./scheduleTab.vue";
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
        scheduleTab,
    }
})
export default class schedule extends Vue{
    
}
</script>
<style>
    
</style>