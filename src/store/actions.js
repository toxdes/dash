import api, { PRODUCTS_URL } from "../api";

// actions
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ACTIVE_PRODUCT = "SET_ACTIVE_PRODUCT";

/**
 * Active pages are:
 * products -> grid of products
 * single_product -> single product (detailed)
 */
export const PAGES = {
  PRODUCTS: "products",
  SINGLE_PRODUCT: "single_product",
};

// action creators
export const navigate = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: { page },
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload: { loading },
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: { error },
  };
};
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: { products },
  };
};

export const setActiveProduct = (product) => {
  return {
    type: SET_ACTIVE_PRODUCT,
    payload: { product },
  };
};

// async actionCreactors
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const data = await api.get(PRODUCTS_URL);
      dispatch(setProducts(data.data));
    } catch (e) {
      dispatch(setError(true));
      console.log(e);
    }
  };
};
