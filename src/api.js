import axios from "axios";

/**
 * converted the fakeData object to a JSON file, and now I'm just hosting the JSON file online.
 * this will be replaced with the given API link later on
 */
export const SUPER_SECRET_KEY =
  "$2b$10$WcAfWR3SL1l..ZNBqeDWhuqHb1qun0vK7WO1wGy6T9DSOCNJ6Klbi";
export const SINGLE_PRODUCT_URL =
  "https://api.jsonbin.io/b/5f41431d4d8ce411137e735c";

export const PRODUCTS_URL =
  "https://api.jsonbin.io/b/5f4146f9514ec5112d0bf059/1";

const axiosConfig = {
  headers: {
    get: {
      "secret-key": SUPER_SECRET_KEY,
    },
  },
};
export default axios.create(axiosConfig);
