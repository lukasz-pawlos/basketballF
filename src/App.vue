<template>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="in-out">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>

</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
