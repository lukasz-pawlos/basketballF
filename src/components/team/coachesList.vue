<template>
    <section class="coachListSection sectionPaddingLevel sectionPaddingVertical">
        <h2 class="coachListSection__h2">Coaches</h2>
        <coach v-for="coach in coaches" :key="coach" :coach="coach"/>
    </section>
</template>
<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';
import coach from './coach.vue'

@Options({
    components: {
        coach,
    }
})


export default class coachList extends Vue{

    @Prop()
    coaches!: []
}
</script>

<style>
.coachListSection {
    background-color: var(--white);
}
.coachListSection__h2 {
    padding-bottom: 100px;
    text-align: center;
}
</style>