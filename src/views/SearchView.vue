<template>
  <div>
    <NftItemsInfo />
    <SearchCharactersInput />
    <div class="md:px-10 mt-10 max-w-7xl m-auto">
      <div class="flex text-xl cursor-pointer">
        <p
          class="mr-6"
          :class="{ 'font-bold': activeTab === 'List' }"
          @click="changeTab('List')"
        >
          List
        </p>
        <p
          @click="changeTab('Wishlist')"
          :class="{ 'font-bold': activeTab === 'Wishlist' }"
        >
          Wishlist
        </p>
      </div>
      <LoadingInfo v-if="loading" />
      <ListItem
        v-else
        :items="response?.characters?.results"
        :wishList="wishList"
        @clickFav="addItemWishList"
        @removeFav="removeFav"
        :type="activeTab"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NftItemsInfo from "../components/NftItemsInfo.vue";
import SearchCharactersInput from "../components/SearchCharactersInput.vue";
import ListItem from "../components/ListItem.vue";
import LoadingInfo from "../components/LoadingInfo.vue";

import { useSearchItems } from "../stores/searchItems";
import { useWishList } from "../stores/wishList";
import { storeToRefs } from "pinia";

const activeTab = ref("List");

const changeTab = (tab) => (activeTab.value = tab);

const { response, loading } = storeToRefs(useSearchItems());
const { wishList } = storeToRefs(useWishList());
const { addItemWishList, removeFav } = useWishList();
</script>
