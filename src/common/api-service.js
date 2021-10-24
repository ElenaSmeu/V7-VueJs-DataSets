import {use} from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

const ApiService = {
    get(resource, slug = "") {
        const headers = { "Authorization" : "ApiKey 9rfxIna.cSUOjwedKpWyv0R5KqT4NCrwW7jEbBDh"}
        return axios.get(`https://darwin.v7labs.com/api/${resource}`, {headers}).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;
export const DataSetsApiService = {

    getDataSetsList() {
        return ApiService.get("datasets");
    }
};