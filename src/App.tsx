import "./App.css";
import Register from "./components/Register";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Chapter1 from "./components/academic/Chapter1";
import Content from "./components/academic/Content";
import Layout from "./components/Layout";
import Introduction from "./components/academic/Introduction";
import Phase2 from "./components/academic/Phase2";
import Phase3 from "./components/academic/Phase3";
import Phase4 from "./components/academic/Phase4";
import Phase5 from "./components/academic/Phase5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/academics"
        element={
          <Layout>
            <Content />
          </Layout>
        }
      />
      <Route
        path="/chapter1"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub1"
        element={
          <Layout>
            <Chapter1 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub2"
        element={
          <Layout>
            <Phase2 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub3"
        element={
          <Layout>
            <Phase3 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub4"
        element={
          <Layout>
            <Phase4 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub5"
        element={
          <Layout>
            <Phase5 />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
