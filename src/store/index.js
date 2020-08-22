import { createStore } from "redux";
// actions
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_LOADING = "SET_LOADING";
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
// initial state

/**
 * Active pages are:
 * products -> grid of products
 * single_product -> single product (detailed)
 */
export const PAGES = {
  PRODUCTS: "products",
  SINGLE_PRODUCT: "single_product",
};

const initialState = {
  activePage: PAGES.PRODUCTS,
  loading: true,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE: {
      return {
        ...state,
        activePage: action.payload.page,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default createStore(reducer);
