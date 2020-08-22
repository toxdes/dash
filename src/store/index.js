import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_ACTIVE_PAGE, SET_LOADING, SET_ERROR, PAGES } from "./actions";
// initial state

/**
 * Active pages are:
 * products -> grid of products
 * single_product -> single product (detailed)
 */

const initialState = {
  activePage: PAGES.PRODUCTS,
  loading: true,
  error: false,
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
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
