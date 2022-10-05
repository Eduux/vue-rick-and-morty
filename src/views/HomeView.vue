<template>
  <div>
    <NftItemsInfo />
    <div class="flex justify-center flex-col">
      <p class="text-center mb-6">Click on button to start searching...</p>
      <router-link
        to="/search"
        class="max-w-xs m-auto text-white bg-gradient-to-r from-buttonSelectLight to-buttonSelect font-bold px-10 py-4 rounded"
      >
        Go to search
      </router-link>
    </div>
  </div>
</template>

<script setup>
import NftItemsInfo from "../components/NftItemsInfo.vue";
</script>
