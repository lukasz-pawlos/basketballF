<template>
    <section class="sectionPaddingLevel sectionPaddingVertical">
        <ul>
            <li v-for="player in players" :key="player">
                <player :player="player"/>
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';
import player from './plyer.vue';

@Options({
    components: {
        player,
    }
})


export default class playersList extends Vue{

    @Prop()
    players!: []
}
</script>
<style>
    
</style>