import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  