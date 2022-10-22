<template>
    <section class="socialMediaSection sectionPaddingLevel sectionPaddingVertical">
        <div class="text-center">
            <h2>Find us on</h2>
            <div class="mediaLink">
                <a class="mediaLink__button" href="https://www.facebook.com/">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
                </a>
                <a class="mediaLink__button" href="https://twitter.com/">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
                </a>

                <a class="mediaLink__button" href="https://youtube.com/">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" />
                </a>

                <a class="mediaLink__button" href="https://www.instagram.com/">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
                </a>

                <a class="mediaLink__button" href="https://www.tiktok.com/">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tiktok' }" />
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class socialMediaBar extends Vue{
    
}
</script>
<style>

.socialMediaSection {
    background: var(--sectionGradient);
}


.mediaLink {
    display: flex;
    justify-content: space-around;
    padding: 30px 0;
}

.mediaLink__button {
    background: none;
    padding: 20px;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    color: var(--black);
    font-size: 80px;
    text-align: center;
    box-shadow: 0px 0px 50px -13px;
    transition: background-color 1s, color 0.4s, box-shadow 1s;
    cursor: pointer;
}

.mediaLink__button:hover {
    background: white;
    box-shadow: 0px 0px 75px -13px white;
}
</style>