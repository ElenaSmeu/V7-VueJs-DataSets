<template>
  <div class="flex flex-col md:p-20 sm:p-10 bg-gradient-to-r from-green-400 to-blue-400">
    <div class="font-bold md:text-7xl sm:text-5xl p-10 text-white">Explore V7 Datasets</div>
    <div class="flex flex-row justify-center">
    <div class="flex md:flex-row sm:flex-col-reverse pb-10">
      <label for="searchbar" class="mr-3 text-xl text-bold mt-1 text-white">Search</label>
      <input id="searchbar" class="border h-10 md:w-80 sm:w-auto rounded"
             @change="search(searchQuery)"
             v-model="searchQuery">
    </div>
  </div>
  </div>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-8 sm:gap-3 md:p-10 sm:p-3" v-if="results.length > 0">
      <div v-for="dataset in results">
        <Dataset v-bind:dataset="dataset"></Dataset>
      </div>
  </div>
  <div v-else class="h-full">
  <div class="text-center text-bold text-2xl mx-auto mt-8">
    <div class="flex flex-col">
      <span>No results.</span>
      <div class="m-4">
        <button class=""></button>
      </div>
  </div></div>
</div>
</template>

<script>
import {computed, onMounted} from "vue";
import { useStore } from 'vuex';
import Dataset from "@/views/Dataset";
export default {
  name: "DatasetsList",
  components: {Dataset},
  setup(){
    const  store = useStore();
    const searchQuery = ' ';
    const datasets = computed(() => store.state.datasets);
    const results = computed(() => store.state.searchResults);
    onMounted( () => {
      store.dispatch('fetchDatasets');
    })
    return {
      searchQuery,
      datasets,
      results,
      search: (searchQueryString) => {
        console.log('I search', searchQueryString.length);
       if(searchQueryString.length > 0) {
         return store.commit('searchDataset', searchQueryString);
       }
      }
    }
  }
}
</script>

<style scoped>

</style>