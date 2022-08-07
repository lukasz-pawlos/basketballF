<template>
    <section class="navSection sectionPaddingLevel sectionPaddingVertical">
        <div class="navArea ">
            <button class="navArea__button">Home</button>
            <button class="navArea__button">News</button>
            <button class="navArea__button">Team</button>
            <button class="navArea__button">Stast</button>
            <button class="navArea__button">Contact</button>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class navigationBar extends Vue{
    
}
</script>

<style>
.navArea {
    display: flex;
    gap: 5px;
}

.navArea__button {
    padding: 10px;
    font-size: 30px;
    font-weight: 600;
    border: 0px;
    border-radius: 20px;
    background-color: transparent;
    transition: background-color 1s, color 0.4s;
}

.navArea__button:hover {
    background-color: var(--orange);
    color: rgb(255, 255, 255);
}

</style>