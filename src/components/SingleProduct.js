import React from "react";
import { PAGES, navigate } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FaLock } from "./common";

// JSON api server it now, but leaving it here just in case.
/*const fakeData = {
  gatewayID: "gateway_id_123",
  sensorID: "sensor_id_123",
  siteID: "site_id_123",
  customerID: "customer_id_123",
  isLocked: true,
  tapID: "223",
  batteryVolt: 248.4,
  productName: "Product Name 1",
  productStyle: "Product style 1",
  manufacturer: "Overpriced Apple",
  vesselSize: 10,
  sideboxData: {
    sensorID: "sensorID",
    productID: "productID",
    vesselID: "vesselID",
    commandCode: "commandCode",
    sensorState: "sensorState",
    Payload: "Payload",
    timeStamp: "timeStamp",
    kickDate: "kickDate",
    sellPerOz: "sellPerOz",
    currentFlowRate: "currentFlowRate",
    productName: "productName",
    productStyle: "productStyle",
    manufacturer: "manufacturer",
    sideboxData: "sideboxData",
    timeLeft: "timeLeft",
    expDate: "expDate",
    percentLeft: "percentLeft",
  },
  timeLeft: "3",
  expDate: "10/20",
  percentLeft: "69",
  volumeLeftinOz: 256,
  messageForUser: "Unexpected Object on keg",
  messageForUser2: "4 1/2 BBL Left",
};*/
export default function SingleProduct() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.activeProduct);
  // TODO: Update addressbar URL OR use react-router?
  // TODO: Using css-loader / CSS in JS instead of global styles?
  return (
    <div className="sp">
      <div className="header">
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
      <div className="content">
        {data.isLocked && (
          <FaLock size="32px" color="#1e238c" className="lock" />
        )}
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
        <div className="top">
          <h2>{data.productName}</h2>
          <p>{data.productStyle}</p>
          <p>{data.manufacturer}</p>
        </div>
        <h2>
          <span className="value">{data.vesselSize}</span> BBL Keg
        </h2>
        <SideBox data={data.sideboxData} />
        <h2>
          <span className="value">{data.timeLeft}</span> Days left
        </h2>
        <p>
          Expires on: <span className="value">{data.expDate}</span>
        </p>
        <div className="battery-icon">
          <img
            src={require("../assets/battery-icon.svg")}
            alt="battery-icon"
            width="180"
            height="auto"
          />
          <h3 className="replace-battery">Replace Battery!!</h3>
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
function SideBox({ data }) {
  return (
    <div className="sidebox">
      <p>{data.sensorID}</p>
      <p>{data.productID}</p>
      <p>{data.vesselID}</p>
      <p>{data.commandCode}</p>
      <p>{data.sensorState}</p>
      <p>{data.Payload}</p>
      <p>{data.timeStamp}</p>
      <p>{data.kickDate}</p>
      <p>{data.sellPerOz}</p>
      <p>{data.currentFlowRate}</p>
    </div>
  );
}
