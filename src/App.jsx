import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./Layouts/MainLayout";
import Details from "./pages/Details.jsx"

export const TokenContext = createContext();
export const UserContext = createContext();
export const CountContext = createContext();

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [count, setCount] = useState({})
  return (
    <>
    <CountContext.Provider value={{count, setCount}}>
      <UserContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, settoken }}>
          <ToastContainer />
         <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home></Home>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <MainLayout>
                  <Products></Products>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/product/:id"
              element={
                <MainLayout>
                  <Details></Details>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <MainLayout>
                  <About></About>
                </MainLayout>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <MainLayout>
                  <Cart></Cart>
                </MainLayout>
              }
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            {token && (
              <>
                <Route
                  path="/orders"
                  element={
                    <MainLayout>
                      <Orders></Orders>
                    </MainLayout>
                  }
                ></Route>
                <Route
                  path="/checkout"
                  element={
                    <MainLayout>
                      <Checkout></Checkout>
                    </MainLayout>
                  }
                ></Route>
              </>
            )}
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
        </TokenContext.Provider>
      </UserContext.Provider>
    </CountContext.Provider>
      
    </>
  );
}

export default App;
