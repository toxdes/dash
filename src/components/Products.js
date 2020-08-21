import React from "react";
import { useDispatch } from "react-redux";
import { navigate, PAGES } from "../store";

export default function Products() {
  const dispatch = useDispatch();
  // TODO: allow information to pass on when navigating
  return (
    <div className="products">
      <h1>A grid of products here</h1>
      {Array.from({ length: 10 }).map((_, each) => {
        return (
          <a
            href="./bruh"
            onClick={(e) => {
              e.preventDefault();
              dispatch(navigate(PAGES.SINGLE_PRODUCT));
            }}
          >
            Product {each}
          </a>
        );
      })}
    </div>
  );
}
