import React from "react";
import { fetchProducts } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Loading, Error } from "./common";

export default function Products() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const products = useSelector((state) => state.products);
  const handleCardClick = (card) => {
    alert(`navigate to card number ${card}`);
  };
  // TODO: allow information to pass on when navigating

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!products && !loading) {
    // fetch
    console.log("dispatching fetchproducts");
    dispatch(fetchProducts());
  }

  // If we're here, then products are loaded
  return (
    <div className="products">
      <h1>A grid of products here</h1>
      <div className="content">
        {products?.map((each, i) => {
          const uniqKey = `${each.productID}_uniq_${i}`;
          return (
            <SmallCard
              key={uniqKey}
              data={each}
              onClick={() => handleCardClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

function SmallCard({ data, onClick }) {
  return (
    <div onClick={onClick} className="small-card">
      <p>Ayy got the data</p>
      <p>{data.productName}</p>
    </div>
  );
}
