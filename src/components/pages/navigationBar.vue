<template>
    <section class="navSection">
        <div class="navArea ">
            <div class="navAreaLogo">
                <img class="navAreaLogo_img" src="ball.png" alt="">
            </div>
            <button class="navArea__button" @click="$router.push('/')">Home</button>
            <button class="navArea__button" @click="$router.push('/')">News</button>
            <button class="navArea__button" @click="$router.push('/team')">Team</button>
            <button class="navArea__button" @click="$router.push('/')">Stast</button>
            <button class="navArea__button" @click="$router.push('/')">Contact</button>
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
    background: black;
    padding: 20px 100px;
    height: 60px;
}

.navArea__button {
    background: b;
    padding: 10px;
    font-size: 30px;
    font-weight: 600;
    border: 0px;
    border-radius: 20px;
    background-color: transparent;
    color: wheat;
    transition: background-color 1s, color 0.4s;
}

.navArea__button:hover {
    background-color: var(--orange);
    color: var(--white);
}
.navAreaLogo {
    height: inherit;
}
.navAreaLogo_img{
    height: 100%;
}
</style>