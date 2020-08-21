import React from "react";
import { PAGES, navigate } from "../store";
import { useDispatch } from "react-redux";

export default function SingleProduct() {
  const dispatch = useDispatch();
  // TODO: Update addressbar URL OR use react-router?
  // TODO: Using css-loader / CSS in JS instead of global styles?
  return (
    <div className="single-product">
      <h1>Single Product Here.</h1>
      <a
        href="./bruh"
        onClick={(e) => {
          e.preventDefault();
          dispatch(navigate(PAGES.PRODUCTS));
        }}
      >
        Go back.
      </a>
    </div>
  );
}
