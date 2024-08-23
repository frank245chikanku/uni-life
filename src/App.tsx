import "./App.css";
import Register from "./components/Register";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Signup />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
