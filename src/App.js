import React  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PageBuild from "./pages/PageBuild/PageBuild";
import { CartProvider } from "./Context/CartProvider";
import Cart from "./components/Cart/cart";
import Checkout from "./components/Checkout/Checkout";
import UpLoaderAllProducts from "./components/UpLoaderAllProducts/UpLoaderAllProducts";
import IndexPage from './pages/IndexPage/IndexPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/all"
              element={<ItemListContainer />}
            />
            <Route
              path="/category/:id"
              element={
                <ItemListContainer greeting={"Producto por Categoría: "} />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/buildPage" element={<PageBuild />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/" element={<IndexPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/UpLoaderAllProducts" element={<UpLoaderAllProducts />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  // ...otras configuraciones necesarias
};

// Inicializa Firebase con tu configuración



export default App;