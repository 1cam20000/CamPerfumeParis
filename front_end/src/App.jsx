import "../src/styles/App.css";
import { createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import axios from "axios";

export const AppContext = createContext(null);

async function callAPI() {
  try {
    const response = await axios.get("http://localhost:8000");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
const data = await callAPI();
console.log("🚀 ~ data:", data);

function App() {
  return (
    <AppContext.Provider value={{ data: data }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
