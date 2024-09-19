import "./App.css";
import Register from "./components/Register";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Layout from "./components/Layout";

// Academic components
import Chapter1 from "./components/academic/Chapter1";
import Content from "./components/academic/Content";
import Introduction from "./components/academic/Introduction";
import Phase2 from "./components/academic/Phase2";
import Phase3 from "./components/academic/Phase3";
import Phase4 from "./components/academic/Phase4";
import Phase5 from "./components/academic/Phase5";


import PeerChapter1 from "./components/peer/Chapter1";
import PeerContent from "./components/peer/Content";
import PeerIntroduction from "./components/peer/Introduction";
import PeerPhase2 from "./components/peer/Phase2";
import PeerPhase3 from "./components/peer/Phase3";
import PeerPhase4 from "./components/peer/Phase4";
import PeerPhase5 from "./components/peer/Phase5";


import SocialChapter1 from "./components/social/Chapter1";
import SocialContent from "./components/social/Content";
import SocialIntroduction from "./components/social/Introduction";
import SocialPhase2 from "./components/social/Phase2";
import SocialPhase3 from "./components/social/Phase3";
import SocialPhase4 from "./components/social/Phase4";
import SocialPhase5 from "./components/social/Phase5";

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

      {/* Peer Routes */}
      <Route
        path="/peer"
        element={
          <Layout>
            <PeerContent />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1"
        element={
          <Layout>
            <PeerIntroduction />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub1"
        element={
          <Layout>
            <PeerChapter1 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub2"
        element={
          <Layout>
            <PeerPhase2 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub3"
        element={
          <Layout>
            <PeerPhase3 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub4"
        element={
          <Layout>
            <PeerPhase4 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub5"
        element={
          <Layout>
            <PeerPhase5 />
          </Layout>
        }
      />

    
      <Route
        path="/social"
        element={
          <Layout>
            <SocialContent />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1"
        element={
          <Layout>
            <SocialIntroduction />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub1"
        element={
          <Layout>
            <SocialChapter1 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub2"
        element={
          <Layout>
            <SocialPhase2 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub3"
        element={
          <Layout>
            <SocialPhase3 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub4"
        element={
          <Layout>
            <SocialPhase4 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub5"
        element={
          <Layout>
            <SocialPhase5 />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
