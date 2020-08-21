import React from "react";
import { Provider as StoreProvider, useSelector } from "react-redux";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import store, { PAGES } from "./store";

import "./styles.css";

function MyApp() {
  const activePage = useSelector((state) => state.activePage);
  return (
    <div className="App">
      {activePage === PAGES.PRODUCTS ? <Products /> : <SingleProduct />}
    </div>
  );
}
function App() {
  return (
    <StoreProvider store={store}>
      <MyApp />
    </StoreProvider>
  );
}

export default App;
