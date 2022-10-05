import { ref } from "vue";
import { defineStore } from "pinia";

export const useWishList = defineStore("wishList", () => {
  const wishList = ref([]);

  const addItemWishList = (item) => {
    if (!wishList.value.find(({ id }) => id === item.id)) {
      wishList.value.push(item);
    }
  };

  const removeFav = (index) => {
    wishList.value.splice(index, 1);
  };

  return { wishList, addItemWishList, removeFav };
});
