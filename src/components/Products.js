import React from "react";
import {
  fetchProducts,
  navigate,
  setActiveProduct,
  PAGES,
} from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Loading, Error } from "./common";

export default function Products() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const products = useSelector((state) => state.products);
  const handleCardClick = (card) => {
    dispatch(setActiveProduct(products[card]));
    dispatch(navigate(PAGES.SINGLE_PRODUCT));
  };
  // TODO: allow information to pass on when navigating

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!products && !loading) {
    // maybe !loading is redundent here
    console.log("dispatching fetchproducts");
    dispatch(fetchProducts());
  }

  // If we're here, then products are loaded
  return (
    <div className="products">
      <h1>A grid of products here</h1>
      <div className="horizontal-bar">
        <p onClick={() => alert("Should something happen?")}>
          {products && products[0].customerID}
        </p>
        <p onClick={() => alert("Should something happen?")}>
          {products && products[0].siteID}
        </p>
        <p onClick={() => alert("Should something happen?")}>
          {products && products[0].gatewayID}
        </p>
      </div>
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
    <div onClick={onClick} className="sp small-card">
      <div className="content">
        <div className="tap-id">
          <p>{data.tapID}</p>
        </div>
        <div className="battery-volt">
          <img
            src={require("../assets/battery-icon.svg")}
            alt="battery-icon"
            width="32"
          />
          <span className="value">
            {(data.batteryVolt / (3.6 * 100)).toFixed(2)}%
          </span>
        </div>
        <h2>{data.productName}</h2>
        <h2>
          <span className="value">{data.vesselSize}</span> BBL Keg
        </h2>
        <h2>
          <span className="value">{data.timeLeft}</span> Days left
        </h2>
        <div className="battery-icon">
          <img
            src={require("../assets/battery-icon.svg")}
            alt="battery-icon"
            width="180"
            height="auto"
          />
          <h3 className="percent-left value">{data.percentLeft} %</h3>
        </div>
        <div className="horizontal-values-bar">
          <div className="item">
            <p className="value">{data.volumeLeftinOz.toFixed(2)}</p>
            <p>oz</p>
          </div>
          <div className="item">
            <p className="value">{(data.volumeLeftinOz / 16).toFixed(2)}</p>
            <p>Pint</p>
          </div>
          <div className="item">
            <p className="value">{(data.volumeLeftinOz / 12).toFixed(2)}</p>
            <p>12 oz</p>
          </div>
          <div className="item">
            <p className="value">{(data.volumeLeftinOz / 8).toFixed(2)}</p>
            <p>8 oz</p>
          </div>
          <div className="item">
            <p className="value">{(data.volumeLeftinOz / 3).toFixed(2)}</p>
            <p>3 oz</p>
          </div>
        </div>
        <div className="message-user">
          <h3 className="value">{data.messageForUser}</h3>
          <h3>{data.messageForUser2}</h3>
        </div>
      </div>
    </div>
  );
}
