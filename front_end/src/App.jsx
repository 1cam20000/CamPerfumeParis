import "../src/styles/App.css";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Resister from "./pages/Resister";
import Login from "./pages/Login";
import PerfumeForWomen from "./pages/PerfumeForWomen";
import axios from "axios";
import DetailProduct from "./pages/DetailProduct";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

export const AppContext = createContext(null);

function App() {
  const [data, setData] = useState([]);
  const callAPI = async () => {
    const response = await axios.get("http://localhost:8000/product/list");
    console.log("🚀 ~ callAPI ~ response:", response.data);
    setData(response.data);
  };
  useEffect(() => {
    callAPI();
  }, []);
  const { ID } = useParams();
  return (
    <AppContext.Provider value={{ dataKey: data }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resister" element={<Resister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfume" element={<PerfumeForWomen />} />
          <Route path="/:id" element={<DetailProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
