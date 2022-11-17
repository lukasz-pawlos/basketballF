<template>
    <div class="formArea">
      <h6 style="color:white;">Send your message to us</h6>


      <inputWithLabel :type="`text`" :name="`Title`"/>
      <inputWithLabel :type="`text`" :name="`First name`"/>
      <inputWithLabel :type="`text`" :name="`Last name`"/>
      <inputWithLabel :type="`email`" :name="`E-mail`"/>

        <label class="formArea__label" for="title">Message</label>
        <textarea class="formArea__texarea" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>


    </div>
</template>
<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import inputWithLabel from "@/components/forms/iputs/inputWithLabel.vue";

@Options({
  components:{
    inputWithLabel,
  }
})

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
    background: var(--sectionGradient);
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