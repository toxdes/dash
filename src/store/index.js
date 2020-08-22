import { createStore } from "redux";
// actions
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";

// action creators
export const navigate = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: { page },
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
  activePage: PAGES.SINGLE_PRODUCT,
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
    default:
      return state;
  }
};

export default createStore(reducer);
