
import Vuex from "vuex";
import {DataSetsApiService} from "@/common/api-service";

const initialState = { datasets: [], searchResults: []}

export const state = { ...initialState };

export const actions = {
    async fetchDatasets({commit}) {
      const apiData = await DataSetsApiService.getDataSetsList();
      commit('setDatasets', apiData.data);
    }
};

export const mutations = {
    setDatasets(state, newDatasets) {
        state.datasets = newDatasets;
        state.searchResults = newDatasets;
    },
    removeDataset (state, dataset) {
        const index = state.datasets.indexOf(dataset);
        if (index === 0) { state.datasets = state.datasets.shift()}
        else if (index === state.datasets.length) {
            state.datasets = state.datasets.pop()}
        else {
            this.state.datasets = [...state.datasets.splice(index, 1)];
        }
    },
    searchDataset (state, queryString) {
        if(queryString.length > 0) {
            state.searchResults = state.datasets.filter(dataset =>
            {
                const name = dataset.name.toLowerCase();
                const searchQu = queryString.toLowerCase();
                return name.includes(searchQu);
            });
            console.log(state.datasets.length);
        }
    },
    resetState(state) {
        state.datasets = [];
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});