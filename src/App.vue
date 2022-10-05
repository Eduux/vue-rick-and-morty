<template>
  <div
    class="bg-black pl-4 pr-4 md:pl-14 md:pr-14 pt-6 min-h-screen text-gray text-base"
  >
    <HeaderApp />
    <RouterView />
  </div>
</template>

<script setup>
import HeaderApp from "./components/HeaderApp.vue";
</script>
