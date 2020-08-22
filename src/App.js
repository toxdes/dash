import React from "react";
import { Provider as StoreProvider, useSelector } from "react-redux";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import store from "./store";
import { PAGES } from "./store/actions";

import "./styles.css";

function MyApp() {
  // const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage);
  // const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);
  // setTimeout(() => {
  //   dispatch(setLoading(false));
  // }, 5000);
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <Error />;
  // }
  return (
    <div className="app">
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
