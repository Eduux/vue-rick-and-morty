<template>
  <div class="flex flex-row flex-wrap mt-5">
    <NoItemsFound v-if="!activeItems() || !activeItems().length" />
    <div
      class="basis-1/2 md:basis-1/3"
      v-for="(item, index) in activeItems()"
      :key="item.name"
    >
      <div
        v-if="items.length"
        class="text-center bg-slate-50/10 mr-1 md:mr-3 mb-4 p-2 md:p-5 rounded-2xl shadow-lg shadow-white/5"
      >
        <img :src="item.image" class="min-w-full max-h-72" />
        <h4 class="text-2xl italic mt-4 font-bold">
          {{ item.name }}
        </h4>
        <p>Species: {{ item.species }}</p>
        <p>Origin: {{ item.origin.name }}</p>
        <p>Gender: {{ item.gender }}</p>
        <p>Status: {{ item.status }}</p>
        <div class="flex justify-center align-center mt-5">
          <button
            class="text-orange border-2 font-bold p-2"
            :class="{ 'bg-orange text-white': !!hasOnFavs(item.id) }"
            @click="
              props.type === 'List'
                ? $emit('clickFav', item)
                : $emit('removeFav', index)
            "
          >
            {{
              props.type === "List"
                ? "Add to wish list"
                : "Remove from wish list"
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NoItemsFound from "../components/NoItemsFound.vue";

const props = defineProps([
  "items",
  "clickFav",
  "type",
  "removeFav",
  "wishList",
]);

const activeItems = () =>
  props.type === "List" ? props.items : props.wishList;

const hasOnFavs = (idItem) =>
  props.type === "List" && props.wishList.find(({ id }) => id === idItem);
</script>
