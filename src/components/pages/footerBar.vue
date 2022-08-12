<template>
    <footer>
        <section class="footerSection sectionPaddingVertical">
            <div class="footerArea">
                <div class="footerAreaLeft">

                </div>
                <div class="footerAreaRight">
                    <ul class="footerAreaRight__ul">
                        <li><button class="footerAreaRight__button" @click="$router.push('/')">Home</button></li>
                        <li><button class="footerAreaRight__button" @click="$router.push('/')">News</button></li>
                        <li><button class="footerAreaRight__button" @click="$router.push('/team')">Team</button></li>
                        <li><button class="footerAreaRight__button" @click="$router.push('/')">Stats</button></li>
                        <li><button class="footerAreaRight__button" @click="$router.push('/')">Contact</button></li>
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
                    <a class="footerAuhor_SocialMedia_link" href="https://www.facebook.com/pawloslukasz">
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
.footerAreaLeft {
    width: 50%;
}

.footerAreaRight {
    width: 50%;
    text-align: center;
}

.footerAreaRight__button{
    font-size: 30px;
    font-weight: 100;
    border: 0px;
    color: var(--white);
    width: 40%;
    background-color: transparent;
}

.footerAreaRight__button:hover {
    font-weight: 900;
}

.footerAreaRight__ul{
    list-style-type: none;
}

.footerLine{
    margin-top: 2%;
    width: 95%;
}

.footerAuthor {
    color: var(--white);
    text-align: center;
}

.footerAuhor_SocialMedia {
    display: flex;
    justify-content: center;
}

.footerAuhor_SocialMedia_link {
    font-size: 30px;
    color: var(--white);
    padding: 0 10px 0 10px;
}
</style>