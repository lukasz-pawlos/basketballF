<template>
    <section class="sectionPaddingVertical sectionPaddingLevel resultTabSection">
        <div class="resultTab">
            <h2 class="text-center">Table</h2>
            <ul>
                <li class="flex resultTab__li text-center">
                    <div style="width: 20%">1</div>
                    <div style="height: 100%;">
                        <img class="imgH" src="logo1.png" alt="">
                    </div>
                    <div style="width: 40%"> TEAM NAME </div>
                    <div style="width: 20%"> 5 - 0 </div>
                    <div style="width: 20%"> 10 </div>

                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class resultTab extends Vue {
    
}
</script>
<style>
.resultTabSection {
}

.resultTab__li {
    border-radius: 16px;
    background: var(--orange);
    height: 60px;
    align-items: center;
    padding: 5px;
    border: 2px solid var(--black);
    font-size: 32px;
    margin-bottom: 12px;
}
</style>