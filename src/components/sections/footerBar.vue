<template>
    <footer>
        <section class="footerSection sectionPaddingVertical">
            <div class="footerArea">
                <div class="footerAreaHalf">
                    <contactForm/>
                </div>
                <div class="footerAreaGuarter">
                    <ul class="footerAreaGuarter__ul">
                        <li class="footerAreaGuarter__li">
                            <span class="footerAreaGuarter__span" @click="$router.push('/')">Home</span></li>
                        <li class="footerAreaGuarter__li">
                            <span class="footerAreaGuarter__span" @click="$router.push('/')">News</span></li>
                        <li class="footerAreaGuarter__li">
                            <span class="footerAreaGuarter__span" @click="$router.push('/team')">Team</span></li>
                        <li class="footerAreaGuarter__li">
                            <span class="footerAreaGuarter__span" @click="$router.push('/')">Stats</span></li>
                        <li class="footerAreaGuarter__li">
                            <span class="footerAreaGuarter__span" @click="$router.push('/')">Contact</span></li>
                    </ul>
                </div>
                <div class="footerAreaGuarter"></div>
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
import { Options, Vue } from "vue-class-component";
import contactForm from "../forms/contactForm.vue";

    @Options({
    components: {
        contactForm,
    }
})

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
.footerAreaHalf {
    width: 50%;
    padding: 20px 30px;
    text-align: center;

}

.footerAreaGuarter {
    width: 25%;
    text-align: center;
}

.footerAreaGuarter__span{
    font-size: 30px;
    font-weight: 100;
    color: var(--white);
}

.footerAreaGuarter__span:hover {
    font-weight: 900;
}

.footerAreaGuarter__ul{
    list-style-type: none;
    text-align: left;
}

.footerAreaGuarter__li {
    margin-bottom: 20px;
}

.footerLine{
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