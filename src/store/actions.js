// actions
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

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

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};
