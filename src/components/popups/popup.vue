<template>
  <div class="popup" v-show="open">
    <div class="popup-iner">
      <div class="flex flex-sb">
        <button class="popup-close-btn" @click="$emit('close')">
          <font-awesome-icon class="popup_icon" icon="fa-solid fa-xmark" />
        </button>
        <h6>
          {{ text }}
        </h6>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

export default class popup extends Vue{

  @Prop()
  open: {
    type: boolean,
    require: true
  }
  @Prop()
  text: String;

}
</script>

<style scoped>
.popup {
  position: fixed;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8 );
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-iner {
  padding: 10px;
  border-radius: 20px;
  background: var(--white);
}

.popup-close-btn {
  border-radius: 100%;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
.popup_icon {
  font-size: 17px;
}
.popup-close-btn:hover {
  background: black;
}
.popup-close-btn:hover .popup_icon {
  color: white;
}

</style>