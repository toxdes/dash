import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  SET_ACTIVE_PAGE,
  SET_LOADING,
  SET_ERROR,
  PAGES,
  SET_PRODUCTS,
  SET_ACTIVE_PRODUCT,
} from "./actions";
// initial state

const initialState = {
  activePage: PAGES.PRODUCTS,
  loading: false,
  error: false,
  products: undefined,
  // could've just used a index as well
  activeProduct: undefined,
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
        loading: false,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: action.payload.product,
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
