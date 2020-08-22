import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate, PAGES, setLoading } from "../store";
import { Loading } from "./common";

export default function Products() {
  const dispatch = useDispatch();
  // TODO: allow information to pass on when navigating
  const loading = useSelector((state) => state.loading);
  setTimeout(() => {
    dispatch(setLoading(false));
  }, 5000);
  if (loading) {
    return <Loading />;
  }
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
