// to temporarily generate fake JSON data, not relevant to project directly.

const fakeData = {
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
};

const a = Array.from({ length: 12 }).map((each) => {
  let newData = { ...fakeData };
  newData.productName = `${newData.productName}_${
    [1, 2, 3, 43, 23, 234][Math.floor(Math.random() * 6)]
  }`;
  newData.manufacturer = `${newData.manufacturer}_${
    [1, 2, 3, 43, 23, 234][Math.floor(Math.random() * 6)]
  }`;
  newData.tapID = `${newData.tapID}_${
    [1, 2, 3, 43, 23, 234][Math.floor(Math.random() * 6)]
  }`;
  newData.messageForUser = `${newData.productName}_${
    [1, 2, 3, 43, 23, 234][Math.floor(Math.random() * 6)]
  }`;
  return newData;
});

console.log(JSON.stringify(a));
