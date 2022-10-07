<template>
    <section class="socialMediaSection sectionPaddingLevel sectionPaddingVertical">
        <div class="socialMediaBar">
            <h2>Find us on</h2>
            <div class="mediaLink">
                <button class="mediaLink__button">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
                </button>

                <button class="mediaLink__button">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
                </button>

                <button class="mediaLink__button">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" />
                </button>

                <button class="mediaLink__button">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
                </button>

                <button class="mediaLink__button">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tiktok' }" />
                </button>
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

.socialMediaBar {
    text-align: center;
}

.mediaLink {
    display: flex;
    justify-content: space-around;
    padding: 30px 0;
}

.mediaLink__button {
    background: none;
    border-radius: 70px;
    height: 140px;
    width: 140px;
    font-size: 100px;
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