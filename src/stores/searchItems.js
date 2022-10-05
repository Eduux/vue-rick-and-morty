import { reactive, toRefs, watch } from "vue";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineStore } from "pinia";
import { apolloClient } from "../main";

export const useSearchItems = defineStore("searchItems", () => {
  provideApolloClient(apolloClient);

  const state = reactive({
    loading: false,
    response: null,
    search: "",
  });

  const handleSearch = (search = state.search, type = state.type) => {
    state.loading = true;
    state.search = search;
    state.type = type;
    state.response = null;

    const { result } = useQuery(
      gql`
        query Query($name: String, $species: String) {
          characters(page: 0, filter: { name: $name, species: $species }) {
            results {
              id
              name
              image
              origin {
                name
              }
              species
              status
              gender
            }
          }
        }
      `,
      {
        name: state.type === "Name" ? state.search : "",
        species: state.type === "Species" ? state.search : "",
      }
    );

    watch(result, (result) => {
      state.response = result;
      state.loading = false;
    });
  };

  return { ...toRefs(state), handleSearch };
});
