<template>
    <div class="formArea">
        <h6 style="color:white;">Send your message to us</h6>

        <label class="formArea__label" for="title">Title</label>
        <input class="formArea__input" type="text" name="title" id="title" placeholder="Title">

        <label class="formArea__label" for="title">First name</label>
        <input class="formArea__input" type="text" name="fname" id="fname" placeholder="First name">

        <label for="title" class="formArea__label">Last name</label>
        <input class="formArea__input" type="text" name="lname" id="lname" placeholder="Last name">

        <label class="formArea__label" for="title">Email</label>
        <input class="formArea__input" type="email" name="email" id="email" placeholder="Email">

        <label class="formArea__label" for="title">Message</label>
        <textarea class="formArea__texarea" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>


    </div>
</template>
<script lang="ts">

import { Vue } from 'vue-class-component';

export default class contactForm extends Vue{

}
</script>

<style>
.formArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.formArea__label {
    color: var(--white);
    text-align: left;
    font-size: 22px;
    position: relative;
    top: 12px;
    left: 20px;
    background: var(--orange);
    width: fit-content;
    border-radius: 20px;
    padding: 0 8px;
    z-index: 5;
}

.formArea__input,
.formArea__texarea {
    border: none;
    border-radius: 20px;
    height: 45px;
    font-family: inherit;
    font-size: 20px;
    margin-bottom: 15px;
    width: 400px;
}

.formArea__input::placeholder,
.formArea__texarea::placeholder {
    color: var(--black);
    opacity: 0.6;
    position: absolute;
    top: 10px;
    left: 10px;
}

.formArea__input:focus,
.formArea__texarea:focus {
    opacity: 0.3;
}

.formArea__texarea{
    height: 80px !important;
    resize: none;
    font-family: inherit;
}

.formArea h6 {
    font-size: 30px;
    margin-bottom: 20px;
}

</style>