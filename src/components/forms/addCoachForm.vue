<template>
  <div id="addForm" class="text-center">
    <h5>Adding form</h5>
    <form @submit.prevent="addCoach">
      <label class="formArea__label">name</label>
      <input class="formArea__input" v-model="coach.name" type="text"/>

      <label class="formArea__label">secondName</label>
      <input class="formArea__input" v-model="coach.secondName" type="text"/>

      <label class="formArea__label">nationality</label>
      <input class="formArea__input" v-model="coach.nationality" type="text"/>

      <label class="formArea__label">role</label>
      <input class="formArea__input" v-model="coach.role" type="text"/>

      <label class="formArea__label">age</label>
      <input class="formArea__input" v-model="coach.age" type="number"/>

      <input
          class="lngBtn"
          style="width: 70%"
          type="submit"
          value="Add"/>
    </form>
  </div>
</template>
<script lang="ts">

import { Vue} from 'vue-class-component';
import {CreateCoachClass} from "@/models/request/CreateCoachClass";
import {CoachService} from "@/services/CoachService";


export default class addPlayerForm extends Vue{

  coach: CreateCoachClass = {
    name: "",
    secondName: "",
    nationality: "",
    role: "",
    age: 0
  }

  addCoach() {
    CoachService.createCoach(this.coach)
        .then(() => {
          this.$router.go(0);
        })
  }

}
</script>

<style>
#addForm {
  color: var(--white);
  background: none;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

#addForm h5 {
  color: black;
}

#addForm .formArea__input,
#addForm .formArea__texarea{
  border: 2px solid black;
}

#addForm .formArea__input:focus,
#addForm .formArea__texarea:focus{
  opacity: 1;
  background: var(--sectionGradient);
}

#addForm .formArea__label {
  left: 0;
}
</style>