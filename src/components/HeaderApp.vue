<template>
  <div class="flex justify-between items-center flex-col md:flex-row">
    <div>
      <router-link to="/">
        <img src="../assets/images/logo.png" />
      </router-link>
    </div>
    <div class="flex items-center text-xs md:text-base">
      <div
        class="mr-4 border-solid border-gray border p-2 rounded-md cursor-pointer"
      >
        + Connect Wallet
      </div>
      <div class="mr-4 text-orange font-medium">105 ETH</div>
      <div class="font-medium flex items-center">
        Janne Doe <img class="ml-1" src="../assets/images/janne.png" />
      </div>
    </div>
  </div>
</template>
