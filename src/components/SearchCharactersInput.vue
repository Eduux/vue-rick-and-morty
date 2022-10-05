<template>
  <div class="flex align-center justify-center">
    <div
      class="flex flex-1 bg-slate-50/10 md:max-w-lg p-2 pr-4 rounded shadow-lg shadow-white/5"
    >
      <select
        v-model="searchType"
        class="outline-0 text-white bg-gradient-to-r from-buttonSelectLight to-buttonSelect font-bold py-2 rounded mr-3 border-0"
      >
        <option class="text-black">Name</option>
        <option class="text-black">Species</option>
      </select>
      <input
        v-model="searchValue"
        class="bg-transparent placeholder-white w-full outline-0 text-white"
        type="text"
        placeholder="Search Rick and Morty Characters"
      />
      <img class="w-6" src="../assets/images/search.svg" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import useDebouncedRef from "../hooks/useDebounceRef";
import { useSearchItems } from "../stores/searchItems";

const searchType = ref("Name");
const searchValue = useDebouncedRef(null, 400);
const { handleSearch } = useSearchItems();

watch(searchValue, () => handleSearch(searchValue.value, searchType.value));
watch(searchType, () => handleSearch(searchValue.value, searchType.value));
</script>
