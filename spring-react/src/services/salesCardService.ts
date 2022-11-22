import queryHelpers from "../helpers/queryHelpers";
import httpCommon from "./http-common";

const endpoint = "sales";

const SalesCardService = {
    getAll: (filters?: string | number | any) => {
        return httpCommon.get(`/${endpoint}?${queryHelpers(filters)}`)
    }
};

export default SalesCardService;