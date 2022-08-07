<template>
    <footer>
        <section class="footerSection sectionPaddingVertical">
            <div class="footerArea">
                <div class="footerArea__left">

                </div>
                <div class="footerArea__right">
                    <ul>
                        <li><button class="footerArea__right__button">Home</button></li>
                        <li><button class="footerArea__right__button">News</button></li>
                        <li><button class="footerArea__right__button">Team</button></li>
                        <li><button class="footerArea__right__button">Stats</button></li>
                        <li><button class="footerArea__right__button">Contact</button></li>
                    </ul>
                </div>
            </div>
            <hr class="footerLine">
            <div class="footerAuthor">
                <p>Created by</p>
                <p>Łukasz Pawłoś</p>
                <div class="footerAuhor_SocialMedia">
                    <a class="footerAuhor_SocialMedia_link" href="https://github.com/lukasz-pawlos">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
                    </a>
                    <a class="footerAuhor_SocialMedia_link" href="https://www.facebook.com/profile.php?id=100007344810188">
                        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
                    </a>
                    <a class="footerAuhor_SocialMedia_link" href="https://www.instagram.com/losiek23/">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
                    </a>
                </div>
            </div>
        </section>
    </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class footerBar extends Vue{
    
}
</script>

<style>
.footerSection {
    background-color: black;
}

.footerArea {
    display: flex;
}
.footerArea__left {
    width: 50%;
}

.footerArea__right {
    width: 50%;
    text-align: center;
}

.footerArea__right__button{
    font-size: 30px;
    font-weight: 100;
    border: 0px;
    color: wheat;
    width: 40%;
    background-color: rgba(255, 123, 0, 0);
}

.footerArea__right__button:hover {
    font-weight: 900;
}

.footerLine{
    margin-top: 2%;
    width: 95%;
}

.footerAuthor {
    color: wheat;
    text-align: center;
}

.footerAuhor_SocialMedia {
    display: flex;
    justify-content: center;
}

.footerAuhor_SocialMedia_link {
    font-size: 30px;
    color: wheat;
    padding: 0 10px 0 10px;
}
</style>